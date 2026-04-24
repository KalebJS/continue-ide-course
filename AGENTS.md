# AGENTS.md

## Project Overview

Interactive training course for non-technical project managers to learn VS Code (as a text editor), the Continue AI extension, and basic Markdown. Delivered as a Flask + React web application with downloadable practice files.

## Tech Stack

- **Backend:** Python 3.14 + Flask (serves API + built React SPA)
- **Frontend:** React 19 + Vite 8 + TailwindCSS 4 + react-markdown + remark-gfm + lucide-react + react-router-dom
- **Package Managers:** uv (Python), pnpm (Node)
- **Build:** `pnpm build` in `frontend/` produces static assets to `frontend/dist/`, served by Flask

## How to Run

```bash
# Production (serves built frontend from frontend/dist/)
uv run python app.py          # http://localhost:5001

# Development (hot-reload frontend)
cd frontend && pnpm dev       # http://localhost:5173 (proxies /api to Flask on 5001)
uv run python app.py          # Flask on 5001 in another terminal
```

## Project Structure

```
app.py                 # Flask backend: API routes, SPA serving, zip download
content/               # 10 lesson Markdown files (01- through 10-)
practice-files/        # Project Phoenix workspace (served as downloadable zip)
frontend/
  src/
    App.jsx            # Root component with routes
    main.jsx           # Entry point
    index.css          # Tailwind v4 import
    components/
      Layout.jsx       # Sidebar + main area shell
      Sidebar.jsx       # Navigation sidebar with progress tracking
    contexts/
      ProgressContext.jsx  # React context for lesson progress + task checkboxes (localStorage)
    pages/
      Home.jsx          # Module listing with progress indicators
      Lesson.jsx        # Single lesson view with Markdown rendering + interactive tasks
      ReferenceGuide.jsx  # Reference-only view stripped of interactive prompts
  vite.config.js        # Vite config with Tailwind plugin + Flask API proxy
frontend/dist/         # Built static assets (served by Flask in production)
```

## Key Architecture Decisions

- **Always use `uv` for Python and `pnpm` for Node** — Do not use `pip`, `npm`, `yarn`, or `npx` in this project. Run Python scripts via `uv run` and install Node dependencies via `pnpm install`. If a command example suggests otherwise, translate it to `uv`/`pnpm` equivalents.
- **Flask serves everything in production** — both the built React SPA and the API. No separate static server needed.
- **Lesson content lives as `.md` files** in `content/` — the API reads them at request time. No database.
- **Practice workspace** is zipped on-the-fly from `practice-files/` and served at `/api/download-workspace`.
- **Progress tracking** uses `localStorage` in the browser (no backend state). `ProgressContext` manages completed lessons and checked tasks.
- **Lesson IDs** are the filenames minus `.md` (e.g., `01-welcome-setup`). The Flask app has a `LESSON_TITLES` dict mapping lesson numbers to human-readable titles.
- **Markdown comments** like `<!-- total-tasks: 5 -->` are metadata stripped before rendering. Task checkboxes (`- [ ]`) are toggled interactively via `ProgressContext`.
- **SPA fallback** — Flask's catch-all route returns `index.html` so React Router handles client-side navigation.

## Content Conventions

- Lesson files are named `{number}-{slug}.md` (e.g., `04-markdown-basics.md`)
- Each lesson includes a `<!-- total-tasks: N -->` comment indicating the number of interactive tasks
- Interactive tasks use GitHub-flavored checkbox syntax: `- [ ] Task description`
- All content targets **non-technical project managers** — no programming jargon
- Practice files in `practice-files/` tell the fictional "Project Phoenix" story (website redesign)

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `GET /api/lessons` | GET | List all lessons (id, number, title) |
| `GET /api/lessons/<id>` | GET | Get lesson content by id |
| `GET /api/download-workspace` | GET | Download Project-Phoenix.zip |
| `GET /` | GET | React SPA entry point |
| `GET /<path>` | GET | React SPA fallback (index.html) |

## Frontend Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Module listing with progress |
| `/lesson/:lessonId` | Lesson | Single lesson view |
| `/reference` | ReferenceGuide | All lessons as quick-reference (no interactive tasks) |

## Making Changes

- **Add a lesson:** Create a new `content/{number}-{slug}.md` file and add its title to `LESSON_TITLES` in `app.py`
- **Add a practice file:** Add it to `practice-files/` — it's automatically included in the zip
- **Edit frontend:** Modify files in `frontend/src/`, then run `cd frontend && pnpm build`
- **Edit styles:** Tailwind classes in components. `index.css` only has `@import "tailwindcss"`
- **After frontend changes:** Always rebuild with `cd frontend && pnpm build` before deploying

## Testing

```bash
# Verify all API routes
uv run python -c "from app import app; client = app.test_client(); assert client.get('/api/lessons').status_code == 200"

# Build frontend
cd frontend && pnpm build
```
