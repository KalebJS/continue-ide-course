import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { BookOpen, ArrowRight, Download, CheckCircle2, Circle } from 'lucide-react'

export default function Home() {
  const [lessons, setLessons] = useState([])
  const { completedLessons, resetProgress } = useProgress()

  useEffect(() => {
    fetch('/api/lessons')
      .then((r) => r.json())
      .then(setLessons)
      .catch(() => {})
  }, [])

  if (!lessons.length) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-4">
          <BookOpen className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          VS Code & Continue
        </h1>
        <p className="text-lg text-gray-600">
          An interactive training course for project managers. Learn to use VS Code as a text editor,
          prompt AI agents with the Continue extension, and write basic Markdown.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <a
          href="/api/download-workspace"
          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Practice Files
        </a>
        <Link
          to="/reference"
          className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Reference Guides
        </Link>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => {
          const complete = completedLessons.includes(lesson.id)
          return (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-sm transition-all group"
            >
              {complete ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900">
                  Module {lesson.number}: {lesson.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors shrink-0" />
            </Link>
          )
        })}
      </div>

      {completedLessons.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              if (window.confirm('Are you sure? This will reset all your progress.')) {
                resetProgress()
              }
            }}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            Reset all progress
          </button>
        </div>
      )}
    </div>
  )
}
