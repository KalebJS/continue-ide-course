import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import { useProgress } from '../contexts/ProgressContext'
import { usePlatform } from '../contexts/PlatformContext'
import { preprocessContent } from '../utils/keybinds'
import { ArrowLeft, ArrowRight, CheckCircle2, Square, SquareCheckBig, ArrowUp } from 'lucide-react'

const TASK_REGEX = /^-\s*\[\s*\]\s*(.+)$/gm
const TOTAL_TASKS_REGEX = /<!--\s*total-tasks:\s*(\d+)\s*-->/

function getText(node) {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getText).join('')
  if (node?.props?.children) return getText(node.props.children)
  return ''
}

export default function Lesson() {
  const { lessonId } = useParams()
  const [lesson, setLesson] = useState(null)
  const [lessons, setLessons] = useState([])
  const [taskMap, setTaskMap] = useState({})
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { markLessonComplete, unmarkLessonComplete, completedLessons, isTaskChecked, toggleTask, getLessonProgress } = useProgress()
  const { platform } = usePlatform()
  const contentRef = useRef(null)

  useEffect(() => {
    fetch('/api/lessons')
      .then((r) => r.json())
      .then(setLessons)
      .catch(() => {})
  }, [])

  useEffect(() => {
    // Reset to loading state and scroll to top immediately on lesson change
    setLesson(null)
    const el = document.getElementById('main-scroll')
    if (el) el.scrollTop = 0

    fetch(`/api/lessons/${lessonId}`)
      .then((r) => r.json())
      .then((data) => {
        setLesson(data)
        // Scroll to top again after new content renders
        requestAnimationFrame(() => {
          const el2 = document.getElementById('main-scroll')
          if (el2) el2.scrollTop = 0
        })
      })
      .catch(() => {})
  }, [lessonId])

  // Show back-to-top button when scrolled down
  useEffect(() => {
    const el = document.getElementById('main-scroll')
    const handleScroll = () => setShowBackToTop((el?.scrollTop || 0) > 400)
    el?.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => el?.removeEventListener('scroll', handleScroll)
  }, [])

  const currentIndex = lessons.findIndex((l) => l.id === lessonId)
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null
  const isComplete = completedLessons.includes(lessonId)

  const totalTasksMatch = lesson?.content?.match(TOTAL_TASKS_REGEX)
  const totalTaskCount = totalTasksMatch ? parseInt(totalTasksMatch[1]) : 0

  const lessonProgress = getLessonProgress(lessonId, totalTaskCount)

  // Build taskMap once per lesson content (preprocessed for platform)
  useEffect(() => {
    if (!lesson?.content) return
    const map = {}
    let idx = 0
    const raw = preprocessContent(lesson.content.replace(/<!--[\s\S]*?-->/g, ''), platform)
    raw.replace(TASK_REGEX, (_match, taskText) => {
      // Strip backticks so keys match getText() output, which walks the
      // React tree where backtick text becomes <code> elements (backticks lost)
      const key = taskText.trim().replace(/`/g, '')
      map[key] = idx++
      return ''
    })
    setTaskMap(map)
  }, [lesson, platform])

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse text-gray-400">Loading lesson...</div>
      </div>
    )
  }

  // Strip comments so they don't render; preprocess keybinds for platform
  const rawContent = preprocessContent(lesson.content.replace(/<!--[\s\S]*?-->/g, ''), platform)

  return (
    <>
      {totalTaskCount > 0 && (
        <div className="fixed top-0 left-0 lg:left-72 right-0 z-30 bg-gray-50/80 backdrop-blur-md border-b border-indigo-100 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4">
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
        </div>
      )}
      <div className={`max-w-4xl mx-auto px-6 py-12${totalTaskCount > 0 ? ' pt-28' : ''}`} ref={contentRef}>
      <div className="prose prose-lg prose-gray max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeUnwrapImages]}
          components={{
            img: ({ src, alt, ...props }) => (
              <img
                src={src}
                alt={alt || ''}
                className="rounded-lg shadow-md my-6 w-full max-w-2xl"
                loading="lazy"
              />
            ),
            li: ({ children, ...props }) => {
              const text = getText(children).trim()
              const taskIdx = taskMap[text]
              if (taskIdx === undefined) return <li {...props}>{children}</li>
              const checked = isTaskChecked(lessonId, taskIdx)
              return (
                <li {...props} className="flex items-start gap-2.5 list-none -ml-5">
                  <button
                    onClick={() => toggleTask(lessonId, taskIdx)}
                    className="mt-0.5 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                    aria-label={checked ? 'Mark task incomplete' : 'Mark task complete'}
                  >
                    {checked
                      ? <SquareCheckBig className="w-5 h-5 text-indigo-600" />
                      : <Square className="w-5 h-5 text-gray-400 hover:text-indigo-400 transition-colors" />
                    }
                  </button>
                  <span className={checked ? 'line-through text-gray-400' : 'text-gray-700'}>
                    {text}
                  </span>
                </li>
              )
            },
          }}
        >{rawContent}</ReactMarkdown>
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

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          onClick={() => {
            const el = document.getElementById('main-scroll')
            el?.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="fixed bottom-6 right-6 z-20 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-105"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}
