import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useProgress } from '../contexts/ProgressContext'
import { ArrowLeft, ArrowRight, CheckCircle2, Square, SquareCheckBig } from 'lucide-react'

const TASK_REGEX = /^-\s*\[ \]\s*(.+)$/gm
const TOTAL_TASKS_REGEX = /<!--\s*total-tasks:\s*(\d+)\s*-->/

export default function Lesson() {
  const { lessonId } = useParams()
  const [lesson, setLesson] = useState(null)
  const [lessons, setLessons] = useState([])
  const [taskMap, setTaskMap] = useState({})
  const { markLessonComplete, unmarkLessonComplete, completedLessons, isTaskChecked, toggleTask, getLessonProgress } = useProgress()
  const contentRef = useRef(null)

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

  // Scroll to top on lesson change
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [lessonId])

  const currentIndex = lessons.findIndex((l) => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null
  const isComplete = completedLessons.includes(lessonId)

  const totalTasksMatch = lesson?.content?.match(TOTAL_TASKS_REGEX)
  const totalTaskCount = totalTasksMatch ? parseInt(totalTasksMatch[1]) : 0

  const lessonProgress = getLessonProgress(lessonId, totalTaskCount)

  const processContent = useCallback((content) => {
    if (!content) return ''
    let processed = content.replace(/<!--[\s\S]*?-->/g, '')
    const map = {}
    let idx = 0
    processed = processed.replace(TASK_REGEX, (_match, taskText) => {
      const taskIdx = idx++
      map[taskIdx] = taskText
      return `- [${isTaskChecked(lessonId, taskIdx) ? 'x' : ' '}] ${taskText}`
    })
    setTaskMap(map)
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
    <div className="max-w-3xl mx-auto px-6 py-12" ref={contentRef}>
      {totalTaskCount > 0 && (
        <div className="mb-8 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-indigo-800">Task Progress</span>
            <span className="text-sm text-indigo-600">{lessonProgress}%</span>
          </div>
          <div className="w-full bg-indigo-100 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${lessonProgress}%` }}
            />
          </div>
        </div>
      )}
      <div className="prose prose-lg prose-gray max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            li: ({ children, ...props }) => {
              const text = String(children)
              const checkedMatch = text.match(/^\s*\[(x| )\]\s*/)
              if (!checkedMatch) return <li {...props}>{children}</li>
              const isChecked = checkedMatch[1] === 'x'
              const taskText = text.replace(checkedMatch[0], '')
              // Find the task index from taskMap
              const taskIdx = Object.entries(taskMap).find(([, v]) => v === taskText)?.[0]
              const handleToggle = taskIdx !== undefined
                ? () => toggleTask(lessonId, parseInt(taskIdx))
                : undefined
              return (
                <li {...props} className="flex items-start gap-2.5 list-none -ml-5">
                  <button
                    onClick={handleToggle}
                    className="mt-0.5 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                    aria-label={isChecked ? 'Mark task incomplete' : 'Mark task complete'}
                  >
                    {isChecked
                      ? <SquareCheckBig className="w-5 h-5 text-indigo-600" />
                      : <Square className="w-5 h-5 text-gray-400 hover:text-indigo-400 transition-colors" />
                    }
                  </button>
                  <span className={isChecked ? 'line-through text-gray-400' : 'text-gray-700'}>
                    {taskText}
                  </span>
                </li>
              )
            },
          }}
        >{processedContent}</ReactMarkdown>
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
