# Markdown for Project Managers

Markdown is a simple way to add formatting to plain text. Think of it like a lightweight version of Microsoft Word's formatting — but instead of clicking buttons, you add special characters to your text. Markdown files use the `.md` extension.

Why should project managers care about Markdown?
- It's the standard format for documentation on GitHub, GitLab, and most developer tools
- It's readable even without rendering (unlike HTML)
- It works great with AI assistants like Continue
- It's fast — your hands never leave the keyboard

<!-- total-tasks: 8 -->

---

## Headings

Headings structure your document. Use `#` followed by a space:

```markdown
# Heading 1 (largest)
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 (smallest)
```

![Markdown headings shown as raw syntax and rendered output](/images/04-headings-rendered.png)

> **Tip:** For project documents, `#` is typically the document title, `##` for major sections, and `###` for subsections.

- [ ] In your `my_notes.md` file, add headings for a meeting notes document

---

## Paragraphs and Line Breaks

In Markdown, paragraphs are separated by a **blank line**. If you just press Enter once, the text will continue on the same line when rendered.

```markdown
This is the first paragraph.

This is the second paragraph.
```

To force a line break within a paragraph, add **two spaces** at the end of a line before pressing Enter.

- [ ] Write two paragraphs in `my_notes.md` with a blank line between them

---

## Bold, Italic, and Strikethrough

| Format | Markdown | Result |
|--------|----------|--------|
| Bold | `**important**` | **important** |
| Italic | `*emphasis*` | *emphasis* |
| Bold + Italic | `***very important***` | ***very important*** |
| Strikethrough | `~~deleted~~` | ~~deleted~~ |

![Bold, italic, and strikethrough formatting rendered](/images/04-bold-italic-table.png)

Use bold for key terms and action items. Use italic for emphasis or titles.

- [ ] Write a sentence in `my_notes.md` that uses bold, italic, and strikethrough

---

## Lists

### Unordered (bullet) lists
Use `-`, `*`, or `+` followed by a space:

```markdown
- First item
- Second item
  - Indented sub-item
- Third item
```

### Ordered (numbered) lists
Use numbers followed by a period:

```markdown
1. First step
2. Second step
3. Third step
```

### Checklists (task lists)
Use `- [ ]` for unchecked and `- [x]` for checked:

```markdown
- [ ] Task not yet done
- [x] Task completed
```

> **Tip:** Checklists are perfect for tracking action items from meetings!

![A rendered checklist with checked and unchecked items](/images/04-checklist-rendered.png)

- [ ] Create an unordered list and an ordered list in `my_notes.md`

- [ ] Add a checklist with at least three action items in `my_notes.md`

---

## Links and Images

### Links
```markdown
[Link text](https://example.com)
```

For example: `[Visit Google](https://google.com)` becomes [Visit Google](https://google.com).

### Images
```markdown
![Alt description](path-or-url-to-image.png)
```

The `!` before the brackets is what makes it an image instead of a link.

- [ ] Add a link in `my_notes.md` pointing to any website

---

## Tables

Tables are incredibly useful for project managers. Here's how to create them:

```markdown
| Name  | Role | Status |
|-------|------|--------|
| Alex  | PM  | Active |
| Jordan | Designer | Active |
```

### Key rules:
- Use pipes `|` to separate columns
- Use hyphens `---` for the header row separator
- Alignment: `:---` (left), `:---:` (center), `---:` (right)

![A rendered Markdown table](/images/04-table-rendered.png)

```markdown
| Left-aligned | Center-aligned | Right-aligned |
|:--- | :---: | ---:|
| Left | Center | Right |
```

- [ ] Create a table in `my_notes.md` with three columns and three rows of data

---

## Blockquotes

Use `>` at the start of a line to create a blockquote — great for highlighting important information:

```markdown
> This is an important note that should stand out.
> It can span multiple lines.
```

Renders as:

> This is an important note that should stand out.
> It can span multiple lines.

- [ ] Add a blockquote to `my_notes.md` with an important project announcement

---

## Horizontal Rules

Add a horizontal divider line with three or more hyphens, asterisks, or underscores:

```markdown
---

***

___
```

All three produce the same result. Use these to separate major sections of your document.

---

## Previewing Markdown in VS Code

VS Code has a built-in Markdown preview! Here's how to use it:

1. Open any `.md` file
2. Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (macOS) to open a preview
3. Or click the **Preview** icon in the top-right corner of the editor (it looks like a magnifying glass with lines)

To see both the editor and preview side by side, press `Ctrl+K V` (Windows/Linux) or `Cmd+K V` (macOS).

![Opening the Markdown preview and side-by-side view](/images/04-markdown-preview.gif)

- [ ] Open the preview for `README.md` using Ctrl+Shift+V / Cmd+Shift+V

---

## Putting It All Together

Now put your Markdown skills into practice! Write a short meeting summary in `my_notes.md` that includes:
- A heading with the meeting name
- A paragraph describing the meeting
- A table listing attendees and their roles
- A checklist of action items
- A bold deadline
- A blockquote with a key decision

- [ ] Write a complete meeting summary using at least five different Markdown features

---

## Quick Reference

| Feature | Syntax | Example |
|---------|--------|---------|
| Heading | `# text` | `## Meeting Notes` |
| Bold | `**text**` | `**Action item**` |
| Italic | `*text*` | `*Draft v2*` |
| Strikethrough | `~~text~~` | `~~Removed item~~` |
| Unordered list | `- item` | `- Review docs` |
| Ordered list | `1. item` | `1. Schedule call` |
| Checklist | `- [ ] item` | `- [ ] Follow up` |
| Link | `[text](url)` | `[Guide](https://example.com)` |
| Image | `![alt](url)` | `![Logo](logo.png)` |
| Table | `\| col \| col \|` | See tables section |
| Blockquote | `> text` | `> Important note` |
| Horizontal rule | `---` | Divider between sections |
