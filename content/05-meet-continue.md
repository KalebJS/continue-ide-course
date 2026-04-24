# Meet Your AI Assistant

Now for the exciting part — meeting Continue, your AI assistant inside VS Code. Think of Continue as a smart colleague who has read every document in your project and can help you write, summarize, and organize your work.

<!-- total-tasks: 5 -->

---

## What Is Continue?

Continue is an **AI-powered extension** that lives inside VS Code. It gives you a chat panel where you can:

- **Ask questions** about your project files
- **Summarize** long documents
- **Edit files** by describing what you want changed
- **Generate new content** like reports, checklists, or formatted lists

Unlike ChatGPT or other chatbots, Continue can **see your workspace** — it has access to the files you have open and can reference them when answering your questions.

> **Key concept:** Continue is not a search engine. It's a reasoning assistant. It reads your documents, understands their content, and helps you work with them. Always review its output — AI can make mistakes.

---

## Opening the Continue Panel

1. Click the **Continue icon** in the Activity Bar (it's usually at the bottom of the Activity Bar icons)
2. Or press `Ctrl+L` (Windows/Linux) or `Cmd+L` (macOS) to open it with a keyboard shortcut

The panel opens on the right side of VS Code. You'll see:
- A **chat history** showing previous conversations
- A text **input box** at the bottom where you type your messages
- A **model selector** at the top (if configured with multiple models)

- [ ] Open the Continue panel using the Activity Bar icon or the keyboard shortcut

---

## Understanding the Chat Interface

The Continue chat works like any messaging app:

1. **You type a message** (called a "prompt") in the input box at the bottom
2. **The AI responds** in the chat area above
3. **You can ask follow-up questions** and the AI remembers your conversation

### Chat modes

Continue typically offers different interaction modes:

| Mode | What It Does | When to Use |
|------|-------------|-------------|
| **Chat** | Ask questions, get explanations | Learning, brainstorming, asking about files |
| **Edit** | AI proposes changes to your code | Making specific edits to documents |
| **Agent** | AI autonomously makes multi-step changes | Complex workflows that touch multiple files |

> **For this course,** we'll focus mostly on **Chat** mode, since it's the safest way to interact with AI and the best starting point for learning.

- [ ] Identify the chat modes available in your Continue panel

---

## Your First Prompt

Let's try a simple prompt. Make sure you have the Project Phoenix folder open in VS Code, then:

1. Open the Continue panel
2. In the chat input, type:

> Summarize the README.md file in my workspace in three key points.

3. Press Enter and wait for the response

The AI will read your `README.md` file and give you a summary. Pretty cool, right?

- [ ] Ask Continue to summarize the README.md file

---

## Understanding the Response

When Continue responds, you'll see the answer in the chat area. Here are some things to notice:

1. **The content** — the actual answer to your question
2. **File references** — Continue may mention which files it used to answer your question
3. **Accuracy** — always review the response. AI sometimes adds details that aren't in the original document or misses important points

> **Important:** Treat AI responses like a first draft from a colleague. They're usually good but not always perfect. Always verify important information, especially dates, names, and numbers.

- [ ] Read through the AI's summary and compare it to the original README.md to check accuracy

---

## Starting a New Conversation

If you want to start fresh (clear the history so the AI doesn't get confused by earlier messages):

1. Click the **"New Session"** button (usually a plus icon or "New Chat" at the top of the panel)
2. Or press `Ctrl+L` (Windows/Linux) / `Cmd+L` (macOS) for a quick new session

This is helpful when switching between different tasks, like moving from summarizing meeting notes to drafting a status report.

- [ ] Start a new chat session in Continue

---

## Quick Reference

| Action | How |
|--------|-----|
| Open Continue panel | Click icon or press Ctrl+L / Cmd+L |
| Send a message | Type in input box, press Enter |
| New conversation | Click New Session or Ctrl+L / Cmd+L |
| Chat mode | Ask questions and get explanations |
| Edit mode | AI proposes specific file changes |
| Agent mode | AI autonomously makes multi-step changes |
