# Navigating VS Code

Now that VS Code is set up, let's take a tour. Understanding the layout will make everything else much easier.

<!-- total-tasks: 6 -->

---

## The Main Areas of VS Code

VS Code has four main areas you should know about:

### 1. Activity Bar (Left Edge)

The Activity Bar is the strip of icons on the far left. Each icon opens a different view:

![VS Code Activity Bar with labeled icons](/images/02-activity-bar-annotated.png)

| Icon | View | What It Does |
|------|------|-------------|
| 📁 File icon | Explorer | Browse and manage your files |
| 🔍 Magnifying glass | Search | Search across all files |
| 🔀 Git icon | Source Control | Track changes to your files |
| 🐛 Bug icon | Run and Debug | Run and debug programs (you won't need this) |
| 🧩 Squares icon | Extensions | Install add-ons like Continue |

- [ ] Click each icon in the Activity Bar and observe what changes in the side panel

### 2. Primary Side Bar (Left Panel)

When you click an icon in the Activity Bar, the Primary Side Bar opens next to it. The most important one for you is the **Explorer** view, which shows your project files in a tree structure.

![Explorer panel showing project files](/images/02-explorer-panel.png)

You can:
- Click a file name to open it in the editor
- Click the arrows next to folder names to expand or collapse them
- Right-click a file or folder to rename, delete, or create new items

### 3. Editor (Center)

This is where you actually read and edit files. When you open a file, it appears as a tab at the top. You can have multiple files open at the same time.

![Multiple files open as tabs in the editor](/images/02-editor-tabs.png)

### 4. Panel (Bottom)

The Panel area appears at the bottom and contains the **Terminal**, **Problems**, **Output**, and **Debug Console** views. For this course, you mostly won't need this area. You can toggle it with ``Ctrl+` `` (View > Terminal).

![The bottom Panel with the Terminal active](/images/02-panel-terminal.png)

---

## The Command Palette

The Command Palette is one of VS Code's most powerful features. It lets you find and run any command without clicking through menus.

- **Windows/Linux:** Press `Ctrl+Shift+P`
- **macOS:** Press `Cmd+Shift+P`

When you open it, a search box appears at the top of the screen. Type what you want to do and VS Code will show matching commands.

For example, try typing:
- `toggle sidebar` — to show or hide the side panel
- `word wrap` — to turn on word wrapping so long lines don't scroll off screen
- `format document` — to clean up the formatting of the current file

![Using the Command Palette to toggle word wrap](/images/02-command-palette-toggle-wrap.gif)

- [ ] Open the Command Palette and run "Toggle Word Wrap"

> **Tip:** If you ever can't find a feature, the Command Palette is your friend. Just type a few words describing what you want and it will likely find it.

---

## Opening Files and Folders

VS Code works best when you open a **folder** (also called a workspace). This tells VS Code which project you're working on.

### Opening a folder
1. Go to **File > Open Folder...**
2. Navigate to the `Project-Phoenix` folder you downloaded in Module 1
3. Click **Select Folder**

### Opening individual files
- Double-click any file in the Explorer to open it
- Or use **File > Open File...** to browse for a single file

- [ ] Open the Project Phoenix folder in VS Code and double-click the `README.md` file

---

## Quick Open (Finding Files Fast)

Need to quickly jump to a file? Use **Quick Open**:

- **Windows/Linux:** Press `Ctrl+P`
- **macOS:** Press `Cmd+P`

Just start typing a file name and press Enter to open it. For example, type `stake` and it will find `stakeholders.md`.

![Using Quick Open to find and open a file](/images/02-quick-open.gif)

- [ ] Use Quick Open (Ctrl+P / Cmd+P) to find and open `stakeholders.md`

---

## Split View (Viewing Two Files Side by Side)

As a project manager, you'll often want to look at two documents at the same time — like meeting notes next to a requirements document.

### How to open split view:
1. Open a file (like `meeting_notes/kickoff.md`)
2. Press ``Ctrl+\`` (or ``Cmd+\`` on Mac) to split the editor
3. Open another file in the new pane

You can also drag a file's tab to the right side of the editor to create a split.

![Opening split view to see two files side by side](/images/02-split-view.gif)

- [ ] Open `kickoff.md` and `requirements.md` side by side using split view

---

## Customizing Your View

A few settings that project managers especially appreciate:

| Setting | How to Change It | Why |
|---------|-----------------|-----|
| Word Wrap | Command Palette > "Toggle Word Wrap" | Keeps long lines visible without scrolling |
| Auto Save | File > Auto Save | Saves your changes automatically so you don't lose work |
| Font Size | Command Palette > "Font Size" | Make text bigger or smaller for comfort |
| Zoom In/Out | `Ctrl+Plus` / `Ctrl+Minus` | Zoom the entire UI in or out |

- [ ] Enable Auto Save (File > Auto Save) and toggle Word Wrap on

---

## Quick Reference

| Shortcut | Windows/Linux | macOS |
|----------|--------------|-------|
| Command Palette | Ctrl+Shift+P | Cmd+Shift+P |
| Quick Open | Ctrl+P | Cmd+P |
| Toggle Sidebar | Ctrl+B | Cmd+B |
| Split Editor | Ctrl+\ | Cmd+\ |
| Toggle Terminal | Ctrl+` | Cmd+` |
| Zoom In | Ctrl+Plus | Cmd+Plus |
| Zoom Out | Ctrl+Minus | Cmd+Minus |
