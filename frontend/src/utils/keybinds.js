/**
 * Transform markdown content to show only the keybinds for the selected platform.
 * Supports:
 *   - Tables with Windows/Linux | macOS columns
 *   - Inline dual keybinds in backticks separated by slash or "or"
 *   - Plain text dual keybinds (Ctrl+X / Cmd+X, etc.)
 *   - Platform labels like (Windows/Linux) or (macOS)
 */

function isMacBind(text) {
  return /\b(?:Cmd|Command|Option|Opt)\b/i.test(text)
}

function pickPlatform(left, right, platform) {
  const leftMac = isMacBind(left)
  const rightMac = isMacBind(right)
  if (leftMac && rightMac) return null
  if (!leftMac && !rightMac) return null
  return platform === 'mac'
    ? (rightMac ? right : left)
    : (rightMac ? left : right)
}

// ── Table helpers ──────────────────────────────────────────────────────────
function isTableSeparator(line) {
  return /^\s*\|?\s*:?-+:?\s*(?:\|\s*:?-+:?\s*)*\|?\s*$/.test(line)
}

function isMarkdownTableBlock(lines, startIdx) {
  if (!lines[startIdx]?.includes('|')) return null
  let end = startIdx
  while (end < lines.length && lines[end].includes('|')) end++
  const block = lines.slice(startIdx, end)
  const sepIdx = block.findIndex(isTableSeparator)
  if (sepIdx === -1 || sepIdx === 0) return null
  return { end, block }
}

function processTableBlock(block, platform) {
  const sepIdx = block.findIndex(isTableSeparator)
  if (sepIdx <= 0) return block

  const headerRow = block[0].trim()
  const hadLeading = headerRow.startsWith('|')
  const hadTrailing = headerRow.endsWith('|')

  const splitCells = (row) => {
    const raw = row.split('|').map(c => c.trim())
    const from = raw[0] === '' ? 1 : 0
    const to = raw[raw.length - 1] === '' ? raw.length - 1 : raw.length
    return raw.slice(from, to)
  }

  const headers = splitCells(headerRow)
  const winIdx = headers.findIndex(h => /Windows\/Linux|Windows/i.test(h))
  const macIdx = headers.findIndex(h => /macOS|Mac/i.test(h))
  if (winIdx === -1 || macIdx === -1) return block

  const keepIdx = platform === 'mac' ? macIdx : winIdx

  const rebuild = (action, shortcut) => {
    if (hadLeading && hadTrailing) return `| ${action} | ${shortcut} |`
    if (hadLeading) return `| ${action} | ${shortcut}`
    return `${action} | ${shortcut}`
  }

  const result = []
  for (let i = 0; i < block.length; i++) {
    if (i === 0) {
      result.push(rebuild(headers[0] || 'Action', 'Shortcut'))
    } else if (i === sepIdx) {
      result.push(rebuild('---', '---'))
    } else {
      const cells = splitCells(block[i])
      result.push(rebuild(cells[0] || '', cells[keepIdx] || ''))
    }
  }
  return result
}

// ── Main export ────────────────────────────────────────────────────────────
export function preprocessContent(content, platform) {
  const lines = content.split('\n')
  const out = []
  let i = 0

  // Phase 1: line-by-line table + bullet detection
  while (i < lines.length) {
    const line = lines[i]
    const tableInfo = isMarkdownTableBlock(lines, i)
    if (tableInfo) {
      out.push(...processTableBlock(tableInfo.block, platform))
      i = tableInfo.end
      continue
    }
    if (/^\s*-\s*\*\*Windows\/Linux:\*\*/.test(line)) {
      if (platform === 'mac') { i++; continue }
      out.push(line.replace(/^\s*-\s*\*\*Windows\/Linux:\*\*\s*/, '- '))
      i++; continue
    }
    if (/^\s*-\s*\*\*macOS:\*\*/.test(line)) {
      if (platform === 'windows') { i++; continue }
      out.push(line.replace(/^\s*-\s*\*\*macOS:\*\*\s*/, '- '))
      i++; continue
    }
    out.push(line)
    i++
  }

  let result = out.join('\n')

  // Phase 2: inline dual patterns

  // 2a. Double-backtick pair with slash: ``Ctrl+X`` / ``Cmd+X``
  result = result.replace(
    /``([^`]+)``\s*\/\s*``([^`]+)``/g,
    (m, left, right) => {
      const pick = pickPlatform(left, right, platform)
      return pick !== null ? `\`\`${pick}\`\`` : m
    }
  )

  // 2b. Single-backtick pair with slash: `Ctrl+X` / `Cmd+X`
  result = result.replace(
    /`([^`\/]+)`\s*\/\s*`([^`]+)`/g,
    (m, left, right) => {
      const pick = pickPlatform(left, right, platform)
      return pick !== null ? `\`${pick}\`` : m
    }
  )

  // 2c. Single-backtick (or) patterns: `Ctrl+X` (or `Cmd+X`) or `Ctrl+X` (or `Cmd+X` on Mac)
  result = result.replace(
    /`([^`]+)`\s*\(\s*or\s+`([^`]+)`(?:\s+on\s+Mac)?\s*\)/gi,
    (m, left, right) => {
      const pick = pickPlatform(left, right, platform)
      return pick !== null ? `\`${pick}\`` : m
    }
  )

  // 2d. Double-backtick (or) patterns: ``Ctrl+X`` (or ``Cmd+X`` on Mac)
  result = result.replace(
    /``([^`]+)``\s*\(\s*or\s+``([^`]+)``(?:\s+on\s+Mac)?\s*\)/gi,
    (m, left, right) => {
      const pick = pickPlatform(left, right, platform)
      return pick !== null ? `\`\`${pick}\`\`` : m
    }
  )

  // 2e. Parenthetical with explicit platform labels
  //     `Key` (Windows/Linux) or `Key` (macOS)
  const winParen = '(?:Windows\\/Linux|Windows|Win)'
  const macParen = '(?:macOS|Mac)'

  result = result.replace(
    new RegExp(
      '`([^`]+)`\\s*\\(' + winParen + '\\)\\s*(?:or|\\/+)\\s*`([^`]+)`\\s*\\(' + macParen + '\\)',
      'gi'
    ),
    (m, win, mac) => platform === 'mac' ? `\`${mac.trim()}\`` : `\`${win.trim()}\``
  )

  result = result.replace(
    new RegExp(
      '`([^`]+)`\\s*\\(' + macParen + '\\)\\s*(?:or|\\/+)\\s*`([^`]+)`\\s*\\(' + winParen + '\\)',
      'gi'
    ),
    (m, mac, win) => platform === 'mac' ? `\`${mac.trim()}\`` : `\`${win.trim()}\``
  )

  // 2f. Plain text slash: Ctrl+X / Cmd+X
  result = result.replace(
    /\b(Ctrl(?:\+[A-Z][A-Za-z0-9]*)+)\s*\/\s*(Cmd(?:\+[A-Z][A-Za-z0-9]*)+)\b/gi,
    (m, win, mac) => platform === 'mac' ? mac : win
  )
  result = result.replace(
    /\b(Cmd(?:\+[A-Z][A-Za-z0-9]*)+)\s*\/\s*(Ctrl(?:\+[A-Z][A-Za-z0-9]*)+)\b/gi,
    (m, mac, win) => platform === 'mac' ? mac : win
  )

  // 2g. Plain text parenthetical: Ctrl+Shift+F (Windows/Linux) or Cmd+Shift+F (macOS)
  result = result.replace(
    new RegExp(
      '\\b(Ctrl(?:\\+[A-Z][A-Za-z0-9]*)+)\\s*\\(' + winParen + '\\)\\s*(?:or|\\/+)\\s*(Cmd(?:\\+[A-Z][A-Za-z0-9]*)+)\\s*\\(' + macParen + '\\)',
      'gi'
    ),
    (m, win, mac) => platform === 'mac' ? mac : win
  )
  result = result.replace(
    new RegExp(
      '\\b(Cmd(?:\\+[A-Z][A-Za-z0-9]*)+)\\s*\\(' + macParen + '\\)\\s*(?:or|\\/+)\\s*(Ctrl(?:\\+[A-Z][A-Za-z0-9]*)+)\\s*\\(' + winParen + '\\)',
      'gi'
    ),
    (m, mac, win) => platform === 'mac' ? mac : win
  )

  // 2h. Clean up standalone platform labels after backticked binds
  if (platform === 'mac') {
    result = result.replace(
      new RegExp('`([^`]+)`\\s*\\(' + winParen + '\\)', 'gi'),
      (m, key) => `\`${key}\``
    )
  } else {
    result = result.replace(
      new RegExp('`([^`]+)`\\s*\\(' + macParen + '\\)', 'gi'),
      (m, key) => `\`${key}\``
    )
  }

  // Collapse multiple blank lines from removed content
  result = result.replace(/\n{3,}/g, '\n\n')

  return result
}

// ── Hint blockquote stripper ──────────────────────────────────────────────
// Removes hint blockquotes (lines starting with "> 💡 **Hint: ...") from
// content entirely, including continuation lines.
export function stripHintBlockquotes(content) {
  return content
    .split('\n')
    .filter((line) => !line.startsWith('> 💡 **Hint:'))
    .filter((line, idx, arr) => {
      if (line.startsWith('> ') && !line.startsWith('> 💡')) {
        for (let i = idx - 1; i >= 0; i--) {
          const prev = arr[i]
          if (prev.startsWith('> 💡 **Hint:')) return false
          if (prev.startsWith('> ')) continue
          break
        }
      }
      return true
    })
    .join('\n')
}
