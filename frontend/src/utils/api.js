/**
 * Resolve the base path from the <meta name="base-path"> tag injected by Flask.
 * Falls back to import.meta.env.BASE_URL (set by Vite's `base` config) or "/".
 */
export function getBasePath() {
  const meta = document.querySelector('meta[name="base-path"]')
  if (meta) return meta.getAttribute('content') || '/'
  return import.meta.env.BASE_URL || '/'
}

const _BASE = getBasePath().replace(/\/$/, '')

/** Prepend the base path to an absolute path (e.g. "/api/lessons" → "/content/123/api/lessons"). */
export function apiUrl(path) {
  return `${_BASE}${path}`
}
