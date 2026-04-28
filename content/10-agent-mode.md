# Using Agent Mode

You've used Chat mode to ask questions and Plan mode to think through changes. Now it's time to meet **Agent mode** — Continue's most powerful mode for getting real work done autonomously across multiple files.

<!-- total-tasks: 4 -->

---

## What Is Agent Mode?

Agent mode is Continue's autonomous execution mode. Unlike Chat (which just answers questions) or Plan (which outlines steps), Agent mode **reads your files, makes edits, runs commands, and completes multi-step tasks on its own**.

Think of it this way:

| Mode | Analogy | What It Does |
|------|---------|-------------|
| **Chat** | Asking a colleague a question | Answers questions, explains concepts |
| **Plan** | Brainstorming an approach with a colleague | Creates a step-by-step plan, no changes made |
| **Agent** | Delegating a task to a colleague | Executes the plan — reads, edits, and writes files |

> **Key concept:** Agent mode is like giving Continue a to-do list and letting it work through each item. It can open files, make edits, and even suggest running terminal commands. You stay in control by reviewing each change before accepting it.

- [ ] Open the Continue panel and identify where to switch between Chat, Plan, and Agent modes

---

## Step 1: When to Use Agent Mode

Agent mode isn't for everything. Here's when each mode shines:

| Task | Best Mode | Why |
|------|-----------|-----|
| Asking about a file | Chat | Quick answer, no changes needed |
| Exploring an approach | Plan | Think through options before acting |
| Updating one paragraph | Chat or Plan | Small change, easy to control |
| Updating multiple files based on meeting notes | Agent | Multi-file, multi-step work |
| Generating a report from several sources | Agent | Needs to read many files and write new content |
| Restructuring a document across sections | Agent | Complex edits across one file |

**Rule of thumb:** If your task requires more than 2-3 manual steps (open this file, edit that section, update another file), Agent mode will save you time.

> **Important:** Always review Agent's changes before accepting them. AI can make mistakes — especially with specific numbers, dates, and names.

- [ ] Think of a task in your own work that would benefit from Agent mode. What makes it a good fit?

---

## Step 2: Plan First, Then Agent

The most effective workflow with Continue is **Plan first, Agent second**:

1. **Start in Plan mode** — describe what you want done and let Continue create a step-by-step plan
2. **Review and adjust the plan** — make sure the steps are correct and nothing is missing
3. **Switch to Agent mode** — tell Continue to execute the plan
4. **Review each change** — accept or reject edits one at a time

### Why plan first?

Agent mode is powerful, but without a plan it might:
- Make changes you didn't intend
- Miss important steps
- Take a different approach than you had in mind

Planning first gives you a **steering wheel** — you catch problems before they become edits.

### Example: Planning a document update

Let's say new meeting notes from `sprint-planning.md` require updates across multiple files. In Plan mode:

> Based on @sprint-planning.md, create a plan to: 1) Update the requirements in @requirements.md with any new user stories, 2) Add new action items to @kickoff.md, 3) Update the project timeline in @README.md.

Review the plan. Does it cover everything? Are the steps in the right order? Adjust if needed, then switch to Agent mode to execute.

- [ ] Use Plan mode to create a plan for updating multiple Project Phoenix files based on @sprint-planning.md

---

## Step 3: Running an Agent Task

Once you have a plan, switch to Agent mode and give it a clear prompt that includes:

1. **What to do** — the task or plan to execute
2. **Which files** — reference them with @ mentions
3. **Constraints** — anything it should avoid or preserve

### Good Agent prompt:
> Execute the plan we created: update @requirements.md with new user stories from @sprint-planning.md, add action items to @kickoff.md, and update the timeline in @README.md. Preserve all existing content — only add new information, don't remove anything.

### What happens next:
- Agent reads each referenced file
- It works through each step of the plan
- It shows you each edit as a diff — **you can accept or reject each one**
- It may ask clarifying questions if something is ambiguous

> **Tip:** If Agent makes a change you don't like, reject that specific edit. You don't have to accept everything. You can also use `Ctrl+Z` / `Cmd+Z` to undo any accepted change in the editor.

- [ ] Switch to Agent mode and execute a multi-file update task using @ file references

---

## Step 4: Reviewing Agent Changes

After Agent finishes, it's your turn to review. Here's a checklist:

1. **Accuracy** — Do the changes match the source material (meeting notes, requirements, etc.)?
2. **Completeness** — Did Agent miss any steps from the plan?
3. **Formatting** — Does the Markdown formatting match the rest of each document?
4. **No accidental deletions** — Did Agent remove anything it shouldn't have?
5. **Numbers and specifics** — Are dates, names, and figures correct?

### Quick verification prompt

After Agent finishes, switch back to Chat mode and verify:

> Review my updated @requirements.md against @sprint-planning.md. Are there any decisions from the meeting notes that aren't reflected in the requirements?

This creates the same quality-check loop you learned in earlier modules — now applied to Agent's output.

- [ ] Review the changes Agent made, then use Chat mode to verify the updates are complete and accurate

---

## What You Learned

In this module, you practiced:

1. **Understanding Agent mode** — when it's the right tool vs Chat or Plan
2. **Planning first** — using Plan mode to create and review a plan before Agent executes it
3. **Running Agent tasks** — writing clear prompts with file references and constraints
4. **Reviewing changes** — accepting/rejecting edits and verifying with a follow-up prompt

The **Plan → Agent → Review** workflow is the most effective way to use Continue for complex tasks. Plan gives you direction, Agent gives you speed, and your review ensures quality.

---

## Quick Reference

| Step | Action | Key Skill |
|------|--------|----------|
| 1. Choose mode | Pick Agent for multi-file, multi-step tasks | Mode selection |
| 2. Plan first | Use Plan mode to outline steps, then review | Plan → Agent workflow |
| 3. Execute | Switch to Agent with a clear prompt + @ references | Agent prompting |
| 4. Review | Accept/reject edits, verify against sources | Quality assurance |

### Mode Selection Cheat Sheet

| Situation | Use This Mode |
|-----------|--------------|
| "What does this file mean?" | Chat |
| "How should I approach this update?" | Plan |
| "Update these three files based on this meeting" | Plan → Agent |
| "Generate a report from these sources" | Plan → Agent |
| "Fix one small thing in this file" | Chat or Edit |
