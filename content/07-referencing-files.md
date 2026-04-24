# Telling AI About Your Work

One of Continue's superpowers is that it can **see your project files**. But you need to tell it which files to look at. In this module, you'll learn how to give the AI the right context so it can give you better answers.

<!-- total-tasks: 6 -->

---

## Why Context Matters

AI without context is like a new hire on their first day — smart, but they don't know anything about your project. The more context you provide, the better the results.

### Without context:
> What are our project risks?

The AI will give you generic project risk advice because it doesn't know which project you're talking about.

### With context:
> Based on @kickoff.md, what are the specific risks identified for Project Phoenix?

Now the AI can give you a precise, accurate answer based on the actual document.

- [ ] Ask Continue a question without file context, then ask the same question with file context and compare the answers

---

## Referencing Files with @ Mentions

The most important way to give Continue context is by **mentioning files**. In the Continue chat input:

1. Type `@` to see a list of files in your workspace
2. Select a file from the list
3. The file name appears in your prompt as a reference

For example:
> @kickoff.md Summarize the key decisions from this meeting.

### Tips for @ mentions:
- You can reference **multiple files** in one prompt by adding multiple `@` references
- The AI will read the full content of each referenced file
- Use the full file name or browse the list to find what you need

- [ ] Use the @ mention feature to reference `kickoff.md` and ask Continue to list the action items

---

## Referencing Multiple Files

Sometimes you need the AI to look at several documents at once. This is especially useful for:

- **Comparing** information across documents
- **Finding conflicts** between requirements and decisions
- **Generating summaries** that draw from multiple sources

Example:
> @kickoff.md @design-review.md @sprint-planning.md Across all three meetings, what action items are assigned to Jordan Lee?

This lets the AI scan all three files and compile a consolidated answer.

- [ ] Use @ mentions to reference both `kickoff.md` and `design-review.md`, then ask Continue to compare the risks discussed in each meeting

---

## Highlighting Text for Context

Another way to give Continue context is to **select text in your editor** before asking a question:

1. Open a file and **select (highlight)** the specific text you want the AI to focus on
2. Open the Continue panel
3. Type your question — Continue will use the highlighted text as additional context

This is especially helpful when:
- You only want the AI to focus on one section of a long document
- You want to ask about a specific paragraph, table, or bullet point
- You want the AI to edit a specific section without touching the rest

- [ ] Select the "Risks Identified" section in `kickoff.md`, then ask Continue to suggest additional mitigations for each risk

---

## Using Tab to Reference the Active File

If you already have a file open and active in the editor, you can reference it quickly:

1. Make sure the file you want is the **active tab** in the editor
2. In the Continue chat, type your prompt
3. The AI automatically includes the active file as context

> **Tip:** This is the fastest workflow. Open a file, switch to Continue, and ask your question. No need to use @ if the file is already your active tab.

- [ ] Open `stakeholders.md` as your active tab, then ask Continue who the executive sponsor is without using @ mentions

---

## Giving Context in Your Prompt

Beyond referencing files, you can also add context directly in your prompt text:

### Adding background:
> I'm a project manager working on a website redesign. Based on @requirements.md, which requirements relate to the contact form?

### Specifying your role:
> As a stakeholder communication specialist, draft a summary of @kickoff.md that I can send to the VP of Marketing.

### Setting constraints:
> Based on @sprint-planning.md, list only the user stories assigned to Chris. Do not include stories assigned to other team members.

The more context you provide, the more tailored and accurate the response.

- [ ] Ask Continue a question that includes both a file reference and additional context about your role or needs

---

## Quick Reference

| Method | How | When to Use |
|--------|-----|-------------|
| @ mention | Type `@` then select a file | Referencing specific files |
| Multiple @ | Add several `@file` references | Multi-file questions and comparisons |
| Highlight text | Select text in editor before asking | Focusing on a specific section |
| Active tab | Just have the file open | Quick questions about the current file |
| Prompt context | Describe background in your prompt | Adding role, audience, or constraints |
