import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { BookOpen, ArrowRight, Download, CheckCircle2, ChevronDown, Trash2 } from 'lucide-react'

export default function Home() {
  const [lessons, setLessons] = useState([])
  const [showReset, setShowReset] = useState(false)
  const { completedLessons, resetProgress, getLessonProgress } = useProgress()

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
      <div className="text-center mb-12 bg-gradient-to-b from-indigo-50 to-white -mx-6 -mt-12 px-6 pt-12 pb-10 rounded-b-3xl">
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

      <div className="relative space-y-3">
        {/* Vertical connecting line between modules */}
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-200 via-indigo-100 to-transparent hidden sm:block" aria-hidden="true" />
        {lessons.map((lesson, idx) => {
          const complete = completedLessons.includes(lesson.id)
          const progress = lesson.totalTasks > 0
            ? getLessonProgress(lesson.id, lesson.totalTasks)
            : (complete ? 100 : 0)
          return (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="relative flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-sm transition-all group"
            >
              {/* Step number badge */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 z-10 transition-colors ${
                complete
                  ? 'bg-green-100 text-green-700'
                  : idx === 0 || completedLessons.includes(lessons[idx - 1]?.id)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-400'
              }`}>
                {complete ? <CheckCircle2 className="w-5 h-5" /> : lesson.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900">
                  Module {lesson.number}: {lesson.title}
                </div>
                {!complete && lesson.totalTasks > 0 && progress > 0 && (
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-indigo-400 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{progress}%</span>
                  </div>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors shrink-0" />
            </Link>
          )
        })}
      </div>

      {completedLessons.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowReset(!showReset)}
            className="text-sm text-gray-400 hover:text-gray-500 transition-colors inline-flex items-center gap-1"
          >
            <ChevronDown className={`w-3 h-3 transition-transform ${showReset ? 'rotate-180' : ''}`} />
            Manage Progress
          </button>
          {showReset && (
            <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-xl inline-block">
              <p className="text-sm text-red-700 mb-2">This will reset all your progress and cannot be undone.</p>
              <button
                onClick={() => {
                  resetProgress()
                  setShowReset(false)
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Reset All Progress
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
