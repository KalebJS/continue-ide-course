import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'
import { usePlatform } from '../contexts/PlatformContext'
import { apiUrl, getBasePath } from '../utils/api'
import { preprocessContent } from '../utils/keybinds'
import { ArrowLeft } from 'lucide-react'

export default function ReferenceGuide() {
  const [lessons, setLessons] = useState([])
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [lessonContent, setLessonContent] = useState('')

  useEffect(() => {
    fetch(apiUrl('/api/lessons'))
      .then((r) => r.json())
      .then((data) => {
        setLessons(data)
        if (data.length > 0) setSelectedLesson(data[0].id)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!selectedLesson) return
    fetch(apiUrl(`/api/lessons/${selectedLesson}`))
      .then((r) => r.json())
      .then((data) => setLessonContent(data.content))
      .catch(() => {})
  }, [selectedLesson])

  const { platform } = usePlatform()

  const stripTaskPrefix = (content) => {
    return preprocessContent(
      content
        .replace(/-\s*\[[ x]\]\s*/gm, '- ')
        .replace(/<!--\s*total-tasks:\s*\d+\s*-->/g, ''),
      platform
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reference Guides</h1>
        <p className="text-gray-600">
          Quick-access reference material from all modules. Bookmark this page to look things up anytime.
        </p>
      </div>

      <div className="flex gap-6">
        <nav className="w-56 shrink-0">
          <ul className="space-y-1 sticky top-6">
            {lessons.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => setSelectedLesson(l.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedLesson === l.id
                      ? 'bg-indigo-100 text-indigo-800 font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {l.number}. {l.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-200 p-8">
          <div className="prose prose-gray max-w-none">
            {lessonContent ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ src, alt, ...props }) => {
                    const base = getBasePath().replace(/\/$/, '')
                    const resolvedSrc = src?.startsWith('/') ? `${base}${src}` : src
                    return <img src={resolvedSrc} alt={alt || ''} loading="lazy" {...props} />
                  },
                }}
              >{stripTaskPrefix(lessonContent)}</ReactMarkdown>
            ) : (
              <div className="animate-pulse text-gray-400">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
