# Continue IDE Course

Interactive training course for non-technical project managers to learn VS Code, the Continue AI extension, and basic Markdown. Built as a Flask + React web application with downloadable practice files.

**[Live Demo →](https://github.com/KalebJS/continue-ide-course)**

## Course Modules

| # | Module | Description |
|---|--------|-------------|
| 01 | Welcome & Setup | Installing VS Code and the Continue extension |
| 02 | Navigating VS Code | Commands, shortcuts, and file navigation |
| 03 | Editing Essentials | Basic editing, find & replace, multi-cursor |
| 04 | Markdown for Project Managers | Headings, lists, tables, and formatting |
| 05 | Meet Your AI Assistant | Introduction to Continue's Chat and Plan modes |
| 06 | Prompting Like a Pro | Writing clear, effective prompts |
| 07 | Telling AI About Your Work | Using @ mentions and file references |
| 08 | Workflow 1: Updating Docs | Updating a requirements doc from meeting notes |
| 09 | Workflow 2: Status Reports | Generating status reports from project files |
| 10 | Using Agent Mode | Autonomous multi-file edits with Plan → Agent workflow |
| 11 | Conclusion & Reference Guide | Recap and quick-reference cheat sheets |

## Features

- **Platform-aware keybinds** — Toggle between Mac and Windows/Linux; all shortcuts update dynamically
- **Interactive task checklists** — Track progress per-lesson with localStorage persistence
- **Downloadable practice workspace** — A fictional "Project Phoenix" workspace served as a zip
- **Reference guide mode** — Stripped-down view of all lessons for quick lookup

## Tech Stack

- **Backend:** Python 3.14 + Flask
- **Frontend:** React 19 + Vite 8 + TailwindCSS 4 + react-markdown
- **Package managers:** [uv](https://docs.astral.sh/uv/) (Python), [pnpm](https://pnpm.io/) (Node)

## Getting Started

### Prerequisites

- [Python 3.14+](https://www.python.org/) and [uv](https://docs.astral.sh/uv/)
- [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/)

### Install Dependencies

```bash
# Python dependencies
uv sync

# Frontend dependencies
cd frontend && pnpm install && cd ..
```

### Development

Run the Flask backend and Vite dev server in separate terminals:

```bash
# Terminal 1: Flask API server (port 5002)
uv run python app.py

# Terminal 2: Vite dev server with hot reload (port 5173)
cd frontend && pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) — Vite proxies `/api` requests to Flask automatically.

### Production Build

```bash
cd frontend && pnpm build
uv run python app.py   # Serves built frontend from frontend/dist/ on port 5002
```

Open [http://localhost:5002](http://localhost:5002).

## Project Structure

```
app.py                 # Flask backend: API routes, SPA serving, zip download
content/               # 11 lesson Markdown files (01- through 11-)
practice-files/        # Project Phoenix workspace (served as downloadable zip)
frontend/
  src/
    App.jsx            # Root component with routes and PlatformProvider
    main.jsx           # Entry point
    index.css          # Tailwind v4 import + prose styles
    components/
      Layout.jsx       # Sidebar + main area shell
      Sidebar.jsx      # Navigation sidebar with progress + OS toggle
    contexts/
      ProgressContext.jsx  # Lesson progress + task checkboxes (localStorage)
      PlatformContext.jsx  # Mac/Windows keybind toggle (localStorage + auto-detect)
    pages/
      Home.jsx           # Module listing with progress indicators
      Lesson.jsx         # Lesson view with Markdown rendering + interactive tasks
      ReferenceGuide.jsx # Quick-reference view (no interactive tasks)
    utils/
      keybinds.js        # Platform-aware markdown preprocessor for keybinds
  vite.config.js        # Vite config with Tailwind plugin + Flask proxy
frontend/dist/         # Built static assets (served by Flask in production)
```

## API Routes

| Route | Description |
|-------|-------------|
| `GET /api/lessons` | List all lessons with task counts |
| `GET /api/lessons/<id>` | Get lesson Markdown content |
| `GET /api/download-workspace` | Download Project-Phoenix.zip |

## Adding Content

- **New lesson:** Create `content/{number}-{slug}.md` with a `<!-- total-tasks: N -->` comment, then add the title to `LESSON_TITLES` in `app.py`
- **Practice files:** Add to `practice-files/` — automatically included in the download zip
- **Frontend changes:** Edit files in `frontend/src/`, then rebuild with `cd frontend && pnpm build`

## License

MIT
