import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useProgress } from '../contexts/ProgressContext'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

const TASK_REGEX = /^-\s*\[ \]\s*(.+)$/gm
const TOTAL_TASKS_REGEX = /<!--\s*total-tasks:\s*(\d+)\s*-->/

export default function Lesson() {
  const { lessonId } = useParams()
  const [lesson, setLesson] = useState(null)
  const [lessons, setLessons] = useState([])
  const { markLessonComplete, unmarkLessonComplete, completedLessons, isTaskChecked } = useProgress()

  useEffect(() => {
    fetch('/api/lessons')
      .then((r) => r.json())
      .then(setLessons)
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetch(`/api/lessons/${lessonId}`)
      .then((r) => r.json())
      .then(setLesson)
      .catch(() => {})
  }, [lessonId])

  const currentIndex = lessons.findIndex((l) => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null
  const isComplete = completedLessons.includes(lessonId)

  const totalTasksMatch = lesson?.content?.match(TOTAL_TASKS_REGEX)
  const totalTaskCount = totalTasksMatch ? parseInt(totalTasksMatch[1]) : 0
  void totalTaskCount

  const processContent = useCallback((content) => {
    if (!content) return ''
    // Strip HTML comments (like total-tasks metadata)
    let processed = content.replace(/<!--[\s\S]*?-->/g, '')
    let idx = 0
    processed = processed.replace(TASK_REGEX, (_match, taskText) => {
      const taskIdx = idx++
      return `- [${isTaskChecked(lessonId, taskIdx) ? 'x' : ' '}] ${taskText}`
    })
    return processed
  }, [lessonId, isTaskChecked])

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse text-gray-400">Loading lesson...</div>
      </div>
    )
  }

  const processedContent = processContent(lesson.content)

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="prose prose-gray max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{processedContent}</ReactMarkdown>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between">
        {prevLesson ? (
          <Link
            to={`/lesson/${prevLesson.id}`}
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {prevLesson.number}. {prevLesson.title}
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        )}

        {isComplete ? (
          <button
            onClick={() => unmarkLessonComplete(lessonId)}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            Completed!
          </button>
        ) : (
          <button
            onClick={() => markLessonComplete(lessonId)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Mark Complete
          </button>
        )}

        {nextLesson ? (
          <Link
            to={`/lesson/${nextLesson.id}`}
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            {nextLesson.number}. {nextLesson.title}
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            to="/reference"
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Reference Guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
