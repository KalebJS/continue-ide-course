# Workflow 1: Updating Documents Based on Meeting Notes

Time for a real-world scenario! In this module, you'll practice using Continue to update a requirements document based on new meeting notes — exactly the kind of task project managers do all the time.

<!-- total-tasks: 5 -->

---

## The Scenario

You're the project manager for Project Phoenix. You've just had a design review meeting where several new requirements and changes were discussed. Your task is to update the `requirements.md` document to reflect these changes.

### What's in the meeting notes?
Open `meeting_notes/design-review.md` and read through it. You'll notice:
- New design decisions (color palette, navigation structure, homepage layout)
- A new requirement for a "Request a Demo" sticky button
- Feedback from stakeholders about the hero section

### What's in the requirements document?
Open `requirements.md` and read through it. This is the current, official requirements document that needs updating.

- [ ] Open both `requirements.md` and `meeting_notes/design-review.md` side by side using split view

---

## Step 1: Identify What Needs to Change

Before asking the AI, review the meeting notes yourself and identify what's new. This helps you write a better prompt and verify the AI's work later.

Key changes from the design review:
1. The color palette has been finalized (navy, gold, teal, grays)
2. Navigation structure is approved
3. A "Request a Demo" sticky button is needed in the header
4. Hero section needs to show differentiators without scrolling
5. Testimonial carousel should auto-play but be pausable

- [ ] Manually read both documents and list at least three changes the meeting notes require

---

## Step 2: Ask Continue to Identify Changes

Now let's use Continue to help identify what needs to change. Open the Continue panel and try this prompt:

> I have a requirements document (@requirements.md) and new meeting notes (@design-review.md). Compare them and list all the new requirements or changes from the meeting notes that are not yet reflected in the requirements document.

Review the AI's list against your own. Did it catch everything? Did it add anything you missed?

- [ ] Use Continue to compare the two documents and list the changes needed

---

## Step 3: Ask Continue to Draft Updates

Once you've confirmed what needs to change, ask Continue to draft the updated sections:

> Based on @design-review.md, I need to update @requirements.md with the following changes:
> 1. Add a new section "5. Design Requirements" with brand colors and typography decisions
> 2. Add FR-105 for a "Request a Demo" sticky button in the header
> 3. Update FR-101 to mention differentiators visible without scrolling
> 4. Add a requirement that the testimonial carousel auto-plays but can be paused
>
> Please draft the new/updated sections in Markdown format.

> **Important:** Ask Continue to write the **updated sections only**, not the entire document. This makes it easier to review and merge changes.

- [ ] Ask Continue to draft the updated sections of the requirements document

---

## Step 4: Review and Apply the Changes

The AI gave you a draft — now it's time for your most important job: **review and verify**.

### Check for:
1. **Accuracy** — Do the requirements match what was actually discussed in the meeting?
2. **Completeness** — Did any changes get left out?
3. **Formatting** — Does the Markdown formatting match the rest of the document?
4. **Requirement IDs** — Are the new FR- numbers consistent with the existing numbering?
5. **Numbers and specifics** — Are the color hex codes correct?

### How to apply the changes:
1. Open `requirements.md` in VS Code
2. Scroll to the appropriate section
3. Copy the updated content from Continue's response
4. Paste it into the document, making any adjustments needed
5. Save the file

You can also use Continue's **Plan** mode to plan out your changes before implementing them if you're comfortable with that workflow.

- [ ] Copy the AI's drafted updates, verify them against the meeting notes, and apply them to requirements.md

---

## Step 5: Final Review

After making your changes, ask Continue one more question to validate:

> Review my updated @requirements.md against @design-review.md. Are there any meeting decisions that are still not reflected in the requirements?

This creates a nice quality-check loop where the AI helps you catch anything you might have missed.

- [ ] Ask Continue to verify your updated requirements document is complete

---

## What You Learned

In this workflow, you practiced:

1. **Reading documents** side by side using VS Code's split view
2. **Using @ mentions** to reference multiple files
3. **Writing specific prompts** that clearly state what changes are needed
4. **Reviewing AI output** for accuracy before applying it
5. **Using AI for quality assurance** with a follow-up verification prompt

This is exactly the workflow you'll use in real projects — review source material, identify changes, draft updates, verify, and apply.

---

## Quick Reference

| Step | Action | Prompt Pattern |
|------|--------|---------------|
| 1. Identify changes | Read both docs yourself | Manual review |
| 2. AI comparison | Ask AI to compare docs | "Compare @file1 with @file2 and list differences" |
| 3. Draft updates | Ask AI to write new sections | "Based on @file, draft the following changes..." |
| 4. Review & apply | Verify and copy into your doc | Manual editing |
| 5. Final QA | Ask AI to verify completeness | "Review @file against @source. Anything missing?" |
