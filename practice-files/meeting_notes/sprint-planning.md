# Sprint Planning Meeting Notes

**Date:** February 19, 2026
**Time:** 9:00 AM - 10:30 AM
**Location:** Conference Room B / Zoom
**Facilitator:** Alex Rivera

---

## Attendees

- Alex Rivera (Project Manager)
- Jordan Lee (Lead Designer)
- Sam Patel (Frontend Developer)
- Chris Nguyen (Backend Developer)
- Morgan Blake (Content Strategist)

---

## Sprint 3 Retrospective (Brief)

**What went well:**
- Design review went smoothly, stakeholders approved navigation
- Brand assets delivered on time
- CloudCMS sandbox is up and running

**What could improve:**
- Content audit is behind schedule (only 40% complete)
- Need better async communication -- some Slack threads got buried

**Action from retro:** Morgan to provide daily content audit progress updates in the #project-phoenix channel.

---

## Sprint 4 Goals

1. Complete homepage frontend build (responsive)
2. Set up CRM integration proof-of-concept
3. Finish content audit (top 50 priority pages)
4. Begin Services page design

---

## User Stories for Sprint 4

| ID | Story | Points | Assignee |
|----|-------|--------|----------|
| PHX-101 | As a visitor, I want to see a hero section with a CTA so I understand the value proposition | 5 | Sam |
| PHX-102 | As a visitor, I want responsive navigation so I can browse on mobile | 3 | Sam |
| PHX-103 | As a visitor, I want to see client testimonials so I trust the company | 3 | Sam |
| PHX-104 | As a marketer, I want form submissions to sync to HubSpot so leads are captured | 8 | Chris |
| PHX-105 | As a content manager, I want the blog template to support Markdown so posts are easy to write | 5 | Chris |
| PHX-106 | As a visitor, I want the hero section to show our differentiators without scrolling | 2 | Jordan |

---

## Technical Notes

- Sam will use the new brand color variables defined in the design system
- Chris to explore HubSpot API rate limits -- we may need to batch form submissions
- Morgan flagged that we have 237 pages on the current site, but only ~80 are actively linked. We should archive the rest before migration.

---

## Definition of Done

- [ ] Code reviewed by at least one other team member
- [ ] Responsive on mobile, tablet, and desktop
- [ ] Lighthouse accessibility score >= 85
- [ ] Content reviewed by Morgan
- [ ] Deployed to staging environment for stakeholder review

---

## Risks for This Sprint

- **CRM integration complexity:** HubSpot POC may reveal limitations. Chris to report findings by Feb 26.
- **Homepage scope creep:** Stakeholders keep adding ideas. Alex to manage scope strictly.

---

*Next meeting: Sprint 4 Demo - March 5, 2026*
