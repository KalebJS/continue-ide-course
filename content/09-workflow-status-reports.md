# Workflow 2: Generating Status Reports

In this module, you'll use Continue and your Markdown skills together to generate a real status report from multiple project files. This is something project managers do weekly — and AI can save you significant time.

<!-- total-tasks: 5 -->

---

## The Scenario

It's the end of Sprint 4, and you need to write a weekly status report for the Project Phoenix stakeholders. Your status report template is in `status_report.md`, and you have a rich set of project documents to draw from:

- `README.md` — project overview and current sprint focus
- `stakeholders.md` — who the stakeholders are and how to communicate with them
- `requirements.md` — the functional and non-functional requirements
- `meeting_notes/kickoff.md` — the kickoff meeting notes
- `meeting_notes/design-review.md` — the design review notes
- `meeting_notes/sprint-planning.md` — Sprint 4 planning details

You'll use Continue to gather information from these files and generate a polished status report.

- [ ] Open `status_report.md` and review the template structure

> 💡 **Hint: Opening Multiple Files**
> Use Quick Open to jump between files fast: press `Ctrl+P` (Windows/Linux) or `Cmd+P` (macOS), then type part of the file name. Keep multiple files open as tabs and switch with `Ctrl+Tab` (Windows/Linux) or `Cmd+Tab` (macOS).

---

## Step 1: Gathering Information

The first step in writing any good report is gathering the right information. Let's ask Continue to analyze our project files and extract the key data points.

Try this prompt:

> I need to write a weekly status report for Project Phoenix. Please review @README.md, @kickoff.md, @design-review.md, and @sprint-planning.md. Then provide me with:
> 1. A 2-3 sentence executive summary of the project's current status
> 2. A list of what was accomplished recently (based on the meeting notes and sprint planning)
> 3. A list of what's planned for the current/upcoming sprint
> 4. Any risks or blockers mentioned across these documents

- [ ] Use Continue with multiple @ mentions to gather project status information

> 💡 **Hint: Referencing Multiple Files**
> Type `@` in the Continue chat, select a file, then type `@` again to add another. Each `@` reference tells Continue to read that file before answering. The files autocomplete as you type, so you don't need to remember the exact names.

---

## Step 2: Drafting the Executive Summary

Take the output from Step 1 and refine it. You might need to:

- Adjust the tone (more formal for executives, more casual for the team)
- Add specific numbers or dates
- Remove sensitive information that shouldn't go in the report

Try an iterative prompt:

> Based on your previous answer, draft a 2-3 sentence executive summary for the status report. The audience is Dana Mitchell (VP of Marketing). Keep it professional and concise. Focus on: are we on track, what was accomplished, and what's coming next.

- [ ] Ask Continue to draft an executive summary tailored to the VP of Marketing

---

## Step 3: Filling in the Report Template

Now let's fill in the status report template. Open `status_report.md` — you'll see it has sections for:
- Executive Summary
- Key Metrics
- Accomplishments
- Next Sprint Plans
- Risks & Blockers
- Decisions Needed
- Upcoming Milestones

Use Continue to generate content for each section. You can do this in one prompt or break it into multiple:

> Using the information from @README.md, @sprint-planning.md, @kickoff.md, and @design-review.md, fill in each section of the status report template in @status_report.md. Use realistic data based on what you find in these files. Format everything in Markdown.

- [ ] Ask Continue to fill in the status report template based on project files

---

## Step 4: Formatting with Markdown

Take the AI's draft and format it properly in your status report. Use the Markdown skills from Module 4:

- Use `##` headings for each section
- Use **bold** for key terms and deadlines
- Use tables for metrics and milestones
- Use bullet lists for accomplishments and risks
- Use checklists for action items if needed

Here's what a well-formatted section might look like:

```markdown
## What We Accomplished This Sprint

- **Homepage hero section:** Finalized design with brand differentiation messaging
- **Navigation structure:** Approved responsive navigation with hamburger menu for mobile
- **Color palette:** Locked in navy (#1B2A4A), gold (#D4A843), teal (#2DA68E), and grays
- **CRM proof-of-concept:** HubSpot integration POC completed, identified batch submission need
- **Content audit:** 40% complete (top 50 priority pages in progress)
```

- [ ] Format the status report using proper Markdown: headings, bold text, lists, and tables

> 💡 **Hint: Previewing Your Markdown**
> Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (macOS) to open a Markdown preview. For a side-by-side view, use `Ctrl+K V` (Windows/Linux) or `Cmd+K V` (macOS). The preview updates live as you type.

---

## Step 5: Review and Finalize

Final review checklist:

1. **Accuracy** — Do the dates, names, and numbers match the source documents?
2. **Audience** — Is this written for the right audience (executives, not engineers)?
3. **Completeness** — Is every section of the template filled in?
4. **Formatting** — Does the Markdown render correctly? (Use Ctrl+Shift+V to preview!)
5. **Tone** — Is it professional and clear?

Try one more prompt for quality assurance:

> Review the status report I've written in @status_report.md against the project files @sprint-planning.md and @README.md. Flag any inaccuracies or missing information.

- [ ] Use Continue to verify the status report is accurate and complete, then preview it with Ctrl+Shift+V / Cmd+Shift+V

---

## What You Learned

In this workflow, you practiced:

1. **Referencing multiple files** to give AI comprehensive project context
2. **Using iterative prompts** to refine content for a specific audience
3. **Filling in a template** with AI-generated content
4. **Formatting with Markdown** to create a professional, readable document
5. **Quality-checking AI output** against source material

This is one of the most practical workflows for project managers — AI helps you draft the content, and your expertise ensures it's accurate and well-structured.

---

## Quick Reference

| Step | Action | Key Skill |
|------|--------|----------|
| 1. Gather info | Reference multiple @files in one prompt | Multi-file context |
| 2. Draft summary | Ask AI to generate content for a specific audience | Iterative prompting |
| 3. Fill template | Use AI output to complete each section | Template completion |
| 4. Format | Apply Markdown headings, lists, tables, bold | Markdown formatting |
| 5. Review | Verify against source docs and preview render | Quality assurance |
