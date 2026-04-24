# Prompting Like a Pro

Now that you've met Continue, let's learn how to communicate with it effectively. Writing good prompts (often called "prompt engineering") is the key skill for getting useful, accurate results from AI.

<!-- total-tasks: 6 -->

---

## The Anatomy of a Good Prompt

A good prompt has three parts:

1. **Context** — What information does the AI need?
2. **Task** — What do you want it to do?
3. **Format** — How should it present the answer?

### Example: A vague prompt
> Tell me about the project.

This is too vague. Which project? What kind of information?

### Example: A good prompt
> Based on the stakeholders.md file, create a summary table showing each stakeholder's name, role, and communication preference. Only include primary stakeholders.

This works because it provides:
- **Context:** "Based on the stakeholders.md file" — tells the AI where to look
- **Task:** "create a summary table" — tells the AI what to do
- **Format:** "showing each stakeholder's name, role, and communication preference" — tells the AI how to structure the answer

- [ ] Write a clear, specific prompt asking Continue to list all action items from the kickoff meeting notes

---

## Be Specific About Format

AI responds well when you tell it exactly how you want the output formatted:

| Vague | Specific |
|-------|----------|
| "List the risks" | "List all risks identified in the kickoff meeting notes as bullet points" |
| "Make a table" | "Create a Markdown table with columns: Risk, Impact (High/Med/Low), Mitigation Strategy" |
| "Summarize this" | "Write a 3-sentence executive summary focusing on timeline and budget" |
| "Fix this document" | "Rewrite the following paragraph to be more concise while keeping all key data points" |

- [ ] Ask Continue to format the stakeholders' engagement plan as a Markdown table, specifying the exact columns you want

---

## Iterating on Responses

The first response from AI is rarely perfect. That's okay! Think of it as a conversation:

### Strategy 1: Ask for adjustments
> That's good, but can you make it more concise and add a "priority" column?

### Strategy 2: Ask for a different format
> Can you reformat that as a numbered list instead of a table?

### Strategy 3: Ask for a different tone
> Rewrite this in a more formal tone suitable for an executive audience.

### Strategy 4: Point out what's wrong
> You missed the risk about CRM integration. Please add it based on the kickoff meeting notes.

- [ ] Take Continue's previous response and ask it to improve or adjust the format in some way

---

## Prompt Templates for Project Managers

Here are ready-to-use prompt templates you can adapt:

### Meeting Summary
> Summarize the key decisions, action items, and open questions from [filename]. Present action items as a checklist with owners and due dates.

### Status Update
> Based on [filename] and [filename], write a brief status update covering: what was accomplished, what's in progress, and any blockers.

### Requirements Review
> Review the requirements in [filename] and flag any that are ambiguous, missing acceptance criteria, or conflict with [other filename].

### Stakeholder Communication
> Draft an email to [stakeholder name] summarizing the key points from [filename] in a professional but friendly tone. Keep it under 200 words.

### Document Comparison
> Compare the requirements in [filename A] with the meeting notes in [filename B]. List any new requirements mentioned in the meeting that aren't in the requirements document.

- [ ] Use one of the prompt templates above (or adapt one) to ask Continue a question about your Project Phoenix files

---

## Common Mistakes to Avoid

| Mistake | Why It's a Problem | What to Do Instead |
|---------|-------------------|-------------------|
| Being too vague | AI guesses what you want, often wrong | Be specific about task and format |
| Asking too many things at once | AI may skip or confuse parts | Break complex requests into steps |
| Not specifying which file | AI may reference the wrong document | Use `@file` to point to the exact file |
| Accepting the first answer | First responses can miss nuances | Always review and iterate |
| Trusting numbers blindly | AI sometimes gets dates and figures wrong | Verify specific numbers against source docs |

- [ ] Think of a vague prompt you might write, then rewrite it to be more specific using the context-task-format framework

---

## When AI Gets It Wrong

AI assistants can:
- **Hallucinate** — make up facts that sound plausible but aren't true
- **Miss details** — overlook important points in long documents
- **Misunderstand** — interpret your request differently than you intended

**Always verify:**
- Dates and deadlines
- Names and titles
- Numbers and figures
- Specific requirements or constraints

When something seems off, ask the AI:
> "Can you point to where in the document you found that information?"

- [ ] Ask Continue a question and then verify one specific detail from its response against the original document

---

## Quick Reference

| Prompt Pattern | Example |
|---------------|---------|
| Summarize | "Summarize [file] in 3 key points" |
| List/Extract | "List all action items from [file] with owners and dates" |
| Format/Restructure | "Convert this list into a Markdown table" |
| Compare | "Compare [file A] with [file B] and list differences" |
| Draft | "Draft an email to [person] about [topic] based on [file]" |
| Improve | "Make this more concise/formal/casual" |
| Verify | "Where in the document did you find that information?" |
