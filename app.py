import io
import os
import zipfile

from flask import Flask, jsonify, send_file, send_from_directory

app = Flask(__name__)

DIST_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "frontend", "dist")
CONTENT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "content")
PRACTICE_DIR = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "practice-files"
)

LESSON_TITLES = {
    "01": "Welcome & Setup",
    "02": "Navigating VS Code",
    "03": "Editing Essentials",
    "04": "Markdown for Project Managers",
    "05": "Meet Your AI Assistant",
    "06": "Prompting Like a Pro",
    "07": "Telling AI About Your Work",
    "08": "Workflow 1: Updating Docs",
    "09": "Workflow 2: Status Reports",
    "10": "Conclusion & Reference Guide",
}


@app.route("/api/lessons")
def list_lessons():
    import re

    modules = []
    task_re = re.compile(r"<!--\s*total-tasks:\s*(\d+)\s*-->")
    for filename in sorted(os.listdir(CONTENT_DIR)):
        if filename.endswith(".md"):
            number = filename.split("-")[0]
            title = LESSON_TITLES.get(
                number, filename[len(number) + 1 : -3].replace("-", " ").title()
            )
            total_tasks = 0
            filepath = os.path.join(CONTENT_DIR, filename)
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                    match = task_re.search(content)
                    if match:
                        total_tasks = int(match.group(1))
            except Exception:
                pass
            modules.append(
                {
                    "id": filename[:-3],
                    "number": int(number),
                    "title": title,
                    "file": filename,
                    "totalTasks": total_tasks,
                }
            )
    return jsonify(modules)


@app.route("/api/lessons/<lesson_id>")
def get_lesson(lesson_id):
    filename = f"{lesson_id}.md"
    filepath = os.path.join(CONTENT_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        return jsonify({"id": lesson_id, "content": content})
    return jsonify({"error": "Lesson not found"}), 404


@app.route("/api/download-workspace")
def download_workspace():
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(PRACTICE_DIR):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.join(
                    "Project-Phoenix", os.path.relpath(full_path, PRACTICE_DIR)
                )
                zf.write(full_path, arcname)
    buf.seek(0)
    return send_file(
        buf,
        as_attachment=True,
        download_name="Project-Phoenix.zip",
        mimetype="application/zip",
    )


# Serve static assets (JS, CSS, images)
@app.route("/assets/<path:path>")
def serve_assets(path):
    return send_from_directory(os.path.join(DIST_DIR, "assets"), path)


# SPA fallback: all other routes serve index.html
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_spa(path):
    if path:
        file_path = os.path.join(DIST_DIR, path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return send_from_directory(DIST_DIR, path)
    return send_from_directory(DIST_DIR, "index.html")


if __name__ == "__main__":
    app.run(debug=True, port=5002)
