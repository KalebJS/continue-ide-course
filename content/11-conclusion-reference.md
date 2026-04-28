# Conclusion & Reference Guide

Congratulations on completing the VS Code & Continue training course! Let's recap what you've learned and provide quick-reference cheat sheets you can come back to anytime.

<!-- total-tasks: 2 -->

---

## What You Learned

### VS Code Skills
- Installing and setting up VS Code and the Continue extension
- Navigating the VS Code interface: Activity Bar, Explorer, Editor, Panel
- Using the Command Palette and Quick Open to find anything fast
- Creating, saving, and editing files
- Search and replace within files and across the entire project
- Split editor view for working with multiple documents side by side

### Markdown Skills
- Writing headings, paragraphs, and line breaks
- Formatting text with bold, italic, and strikethrough
- Creating ordered lists, unordered lists, and checklists
- Building tables for data organization
- Adding links, images, and blockquotes
- Previewing Markdown in VS Code

### Continue Skills
- Opening the chat panel and understanding Chat, Plan, and Agent modes
- Writing effective prompts using the context-task-format framework
- Referencing files with @ mentions
- Using highlighted text for focused context
- Iterating on AI responses to refine output
- Using Agent mode for autonomous multi-file changes
- Using the Plan-then-Agent workflow to plan before executing
- Quality-checking AI-generated content against source documents

### Workflow Skills
- Updating documents based on meeting notes with AI assistance
- Generating status reports from multiple project files
- Using Agent mode to execute complex multi-file updates
- Using VS Code's split view alongside the Continue panel

- [ ] Take a moment to reflect: which skill do you think will be most useful in your daily work?

---

## VS Code Shortcut Cheat Sheet

### Navigation

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| Command Palette | Ctrl+Shift+P | Cmd+Shift+P |
| Quick Open (find file) | Ctrl+P | Cmd+P |
| Toggle Sidebar | Ctrl+B | Cmd+B |
| Toggle Terminal | Ctrl+` | Cmd+` |
| Split Editor | Ctrl+\ | Cmd+\ |
| Go to Line | Ctrl+G | Cmd+G |
| Switch between open tabs | Ctrl+Tab | Cmd+Tab |

### Editing

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| Cut | Ctrl+X | Cmd+X |
| Copy | Ctrl+C | Cmd+C |
| Paste | Ctrl+V | Cmd+V |
| Undo | Ctrl+Z | Cmd+Z |
| Redo | Ctrl+Y | Cmd+Shift+Z |
| Find | Ctrl+F | Cmd+F |
| Find and Replace | Ctrl+H | Option+Cmd+F |
| Search All Files | Ctrl+Shift+F | Cmd+Shift+F |
| Select All | Ctrl+A | Cmd+A |
| Move Line Up | Alt+Up | Option+Up |
| Move Line Down | Alt+Down | Option+Down |
| Multiple Cursors | Alt+Click | Option+Click |
| Delete Line | Ctrl+Shift+K | Cmd+Shift+K |

### File Management

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| New File | Ctrl+N | Cmd+N |
| Save | Ctrl+S | Cmd+S |
| Close File | Ctrl+W | Cmd+W |
| Open Folder | Ctrl+K Ctrl+O | Cmd+K Cmd+O |

### View

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| Zoom In | Ctrl+Plus | Cmd+Plus |
| Zoom Out | Ctrl+Minus | Cmd+Minus |
| Toggle Word Wrap | Alt+Z | Option+Z |
| Markdown Preview | Ctrl+Shift+V | Cmd+Shift+V |
| Markdown Preview Side | Ctrl+K V | Cmd+K V |

---

## Continue Prompting Cheat Sheet

### Basic Prompt Patterns

| Goal | Prompt Template |
|------|----------------|
| Summarize | "Summarize @file in [number] key points" |
| Extract list | "List all [items] from @file with [details]" |
| Format as table | "Create a Markdown table with columns: [col1], [col2], [col3] from @file" |
| Compare documents | "Compare @file1 with @file2 and list the differences" |
| Draft content | "Draft a [type of content] based on @file for [audience]" |
| Improve writing | "Rewrite this to be more [concise/formal/casual]: [paste text]" |
| Verify accuracy | "Review @draft against @source. Is anything missing or incorrect?" |

### Context Methods

| Method | Syntax | Best For |
|--------|--------|----------|
| File reference | `@filename` | Pointing to a specific file |
| Multiple files | `@file1 @file2 @file3` | Comparing or combining information |
| Highlighted text | Select text first | Focusing on one section |
| Active tab | Just ask (file auto-included) | Quick questions about the current file |
| Background info | Describe it in the prompt | Adding context AI can't find in files |

### Prompt Quality Checklist

Before sending a prompt, ask yourself:
- [ ] Did I specify **which file(s)** the AI should reference?
- [ ] Did I state **what I want** (task) clearly?
- [ ] Did I specify **the format** I want the answer in?
- [ ] Did I mention **the audience** (who is this for)?
- [ ] Did I set **constraints** (length, tone, what to exclude)?

### Continue Modes

| Mode | What It Does | When to Use |
|------|-------------|------------|
| **Chat** | Answers questions, explains concepts | Quick questions, brainstorming |
| **Plan** | Creates a step-by-step plan, no edits | Planning complex changes before executing |
| **Agent** | Autonomously reads, edits, and writes files | Multi-file, multi-step tasks |

**Best workflow for complex tasks:** Plan first → review the plan → switch to Agent → review each change

---

## Markdown Cheat Sheet

| Feature | Syntax | Example |
|---------|--------|---------|
| Heading 1 | `# text` | `# Project Phoenix` |
| Heading 2 | `## text` | `## Meeting Notes` |
| Heading 3 | `### text` | `### Action Items` |
| Bold | `**text**` | `**Important deadline**` |
| Italic | `*text*` | `*Draft version*` |
| Bold + Italic | `***text***` | `***Critical finding***` |
| Strikethrough | `~~text~~` | `~~Old requirement~~` |
| Unordered list | `- item` | `- Action item 1` |
| Ordered list | `1. item` | `1. First step` |
| Checklist | `- [ ] item` | `- [ ] Follow up` |
| Link | `[text](url)` | `[Guide](https://example.com)` |
| Image | `![alt](url)` | `![Diagram](diagram.png)` |
| Blockquote | `> text` | `> Key decision` |
| Horizontal rule | `---` | Section divider |
| Inline code | `` `code` `` | `` `FR-101` `` |
| Code block | ` ``` ... ``` ` | Multi-line code |
| Table | ` \| col \| col \| ` | See Module 4 |

### Table Template

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

### Checklist Template

```markdown
- [ ] Task one
- [ ] Task two
- [x] Completed task
```

---

## Using This Guide Going Forward

This course is designed to be a **living reference**. Here's how to use it:

1. **Bookmark this module** — it's your one-stop cheat sheet
2. **Use the Reference Guides tab** — the website has a reference guide section where you can quickly look up any topic without retaking the course
3. **Practice regularly** — the more you use VS Code and Continue, the more natural it becomes
4. **Iterate on your prompts** — your first AI prompt won't be perfect, and that's okay. Refine it like you would refine an email draft

- [ ] Bookmark this page or add it to your favorites for quick access

---

## Next Steps

Now that you've completed the course, here are some ways to continue building your skills:

1. **Use VS Code daily** for note-taking, document editing, and project management
2. **Write everything in Markdown** — meeting notes, status updates, requirements docs
3. **Experiment with Continue prompts** — try different approaches and see what works best
4. **Explore VS Code extensions** — there are thousands of extensions for productivity, formatting, and more
5. **Stay curious** — the best way to learn is by doing

You've got the skills. Now go put them to work!

---

*Thank you for completing the VS Code & Continue Training Course. You can always come back to any module or use the Reference Guides tab to look things up.*
