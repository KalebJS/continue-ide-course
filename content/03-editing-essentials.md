# Editing Essentials

Now that you can navigate VS Code, let's learn the core editing skills you'll use every day. These are the same skills you'd use in any text editor — VS Code just makes them faster and easier.

<!-- total-tasks: 6 -->

---

## Creating New Files

There are several ways to create a new file in VS Code:

1. **From the Explorer:** Hover over a folder name, click the **New File** icon (a page with a plus), type the file name, and press Enter
2. **From the menu:** File > New File (this creates an untitled file you can save later)
3. **Keyboard shortcut:** `Ctrl+N` (Windows/Linux) or `Cmd+N` (macOS)

![Creating a new file from the Explorer panel](/images/03-create-new-file.gif)

> **Important:** Always include the file extension when naming your file. For example:
> - `notes.md` for a Markdown file
> - `report.txt` for a plain text file
> - `data.csv` for a CSV file

- [ ] Create a new file called `my_notes.md` inside the Project Phoenix folder

---

## Saving Files

By default, VS Code does **not** save your changes automatically. There are two ways to save:

- **Manual save:** Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (macOS)
- **Auto Save:** Enable it with **File > Auto Save** — this saves every few seconds

We recommend turning on Auto Save for day-to-day work. You'll see a dot on the file tab if there are unsaved changes.

![The dot indicator on a file tab showing unsaved changes](/images/03-unsaved-dot-tab.png)

- [ ] Turn on Auto Save (File > Auto Save) if you haven't already

---

## Basic Text Editing

These are the essential text editing shortcuts you'll use most:

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| Cut | Ctrl+X | Cmd+X |
| Copy | Ctrl+C | Cmd+C |
| Paste | Ctrl+V | Cmd+V |
| Undo | Ctrl+Z | Cmd+Z |
| Redo | Ctrl+Y | Cmd+Shift+Z |
| Select All | Ctrl+A | Cmd+A |
| Find | Ctrl+F | Cmd+F |
| Find and Replace | Ctrl+H | Option+Cmd+F |

> **Note:** The Windows/Linux shortcuts work the same way in Google Docs, Microsoft Word, and most other applications. On macOS, Cmd+H hides the current window instead, so VS Code uses Option+Cmd+F.

- [ ] Open the `README.md` file and try using Ctrl+F / Cmd+F to search for the word "Phoenix"

---

## Search and Replace

VS Code has powerful search built right in.

### Find in current file
Press `Ctrl+F` (or `Cmd+F`). A small search box appears at the top of the editor. Type your search term and:
- Press **Enter** or click the arrows to jump between matches
- Click the **Aa** button for case-sensitive search
- Click the **.\*** button for regex search (advanced)

### Find and Replace in current file
Press `Ctrl+H` (Windows/Linux) or `Option+Cmd+F` (macOS). This works the same as Find, but also has a **Replace** field:
- Type the replacement text
- Click **Replace** (single) or **Replace All** (every match)

![The Find and Replace bar in the editor](/images/03-find-replace-bar.png)

- [ ] Use Find and Replace (Ctrl+H / Option+Cmd+F) to search for "Project Phoenix" in README.md

### Search across all files
Press `Ctrl+Shift+F` (or `Cmd+Shift+F`) to open the project-wide search in the side panel. This searches every file in your workspace at once — incredibly useful for finding which document mentions a specific person, term, or requirement.

![Project-wide search showing results across multiple files](/images/03-project-wide-search.png)

- [ ] Use project-wide search (Ctrl+Shift+F / Cmd+Shift+F) to find which files mention "CRM"

---

## Selecting and Moving Text

### Select a word
Double-click a word to select it.

### Select a line
Triple-click a line to select the entire line.

### Select multiple lines
Click at the start of your selection, hold **Shift**, and click at the end. This selects everything between.

### Move lines up or down
Select one or more lines, then press `Alt+Up/Down` (Windows/Linux) or `Option+Up/Down` (macOS) to move the entire block up or down. This is great for reorganizing lists or paragraphs.

![Moving a table row up and down using Alt+Arrow keys](/images/03-move-line-alt-arrow.gif)

- [ ] Open `stakeholders.md` and try moving a row in the table up or down using Alt+Arrow keys

---

## Deleting and Renaming Files

### Renaming a file
Right-click a file in the Explorer panel and select **Rename**. Type the new name and press Enter.

### Deleting a file
Right-click a file in the Explorer panel and select **Delete**. VS Code asks for confirmation before deleting.

### Creating a folder
In the Explorer, hover over the parent folder and click the **New Folder** icon. Type the folder name and press Enter.

> **Warning:** Deleted files go to your system trash, but it's still good practice to double-check before deleting anything important.

- [ ] Create a folder called `drafts` inside Project Phoenix, then delete it (you won't need it yet)

---

## Undo, Redo, and Multiple Cursors

### Undo and Redo
- `Ctrl+Z` (Cmd+Z) undoes your last change
- `Ctrl+Y` (Cmd+Shift+Z) redoes it if you went too far

### Multiple Cursors (Bonus)
VS Code supports multiple cursors, which lets you edit several lines at once:
1. Hold `Alt` (Windows/Linux) or `Option` (macOS) and click in multiple places
2. Each click adds a new cursor
3. Type normally and it appears at every cursor location

This is handy for editing several rows in a table or list at the same time.

![Using multiple cursors to edit several lines at once](/images/03-multiple-cursors.gif)

- [ ] Try creating multiple cursors by holding Alt/Option and clicking on two different lines, then typing some text

---

## Quick Reference

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| New File | Ctrl+N | Cmd+N |
| Save | Ctrl+S | Cmd+S |
| Find | Ctrl+F | Cmd+F |
| Find and Replace | Ctrl+H | Option+Cmd+F |
| Search All Files | Ctrl+Shift+F | Cmd+Shift+F |
| Move Line Up/Down | Alt+Up/Down | Option+Up/Down |
| Multiple Cursors | Alt+Click | Option+Click |
| Undo | Ctrl+Z | Cmd+Z |
| Redo | Ctrl+Y | Cmd+Shift+Z |
