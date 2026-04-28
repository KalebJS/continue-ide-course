import { useState, useEffect, useLayoutEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { usePlatform } from '../contexts/PlatformContext'
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Download,
  FileText,
  Menu,
  Monitor,
  X,
} from 'lucide-react'

export default function Sidebar() {
  const [lessons, setLessons] = useState([])
  const [mobileOpen, setMobileOpen] = useState(false)
  const { completedLessons, getLessonProgress } = useProgress()
  const location = useLocation()

  useEffect(() => {
    fetch('/api/lessons')
      .then((r) => r.json())
      .then(setLessons)
      .catch(() => {})
  }, [])

  useLayoutEffect(() => {
    // Close mobile sidebar on route change before paint to avoid flicker
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false)
  }, [location.pathname])

  if (!lessons.length) return null

  const navItems = lessons.map((l) => ({
    to: `/lesson/${l.id}`,
    label: l.title,
    number: l.number,
    complete: completedLessons.includes(l.id),
    progress: l.totalTasks > 0 ? getLessonProgress(l.id, l.totalTasks) : (completedLessons.includes(l.id) ? 100 : 0),
    totalTasks: l.totalTasks,
  }))

  const totalComplete = completedLessons.length
  const totalLessons = lessons.length
  const overallProgress = totalLessons ? Math.round((totalComplete / totalLessons) * 100) : 0

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
      isActive
        ? 'bg-indigo-100 text-indigo-800 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`

  function OsToggle() {
    const { platform, setPlatform } = usePlatform()
    return (
      <div className="flex items-center gap-2 px-3 py-2">
        <Monitor className="w-4 h-4 text-gray-400" />
        <div className="flex bg-gray-100 rounded-md p-0.5">
          <button
            onClick={() => setPlatform('mac')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              platform === 'mac'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            aria-label="Use Mac shortcuts"
            aria-pressed={platform === 'mac'}
          >
            Mac
          </button>
          <button
            onClick={() => setPlatform('windows')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              platform === 'windows'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            aria-label="Use Windows shortcuts"
            aria-pressed={platform === 'windows'}
          >
            Windows
          </button>
        </div>
      </div>
    )
  }

  const sidebarContent = (
    <>
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          VS Code & Continue
        </h1>
        <p className="text-xs text-gray-500 mt-1">Interactive Training Course</p>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>{totalComplete}/{totalLessons} lessons ({overallProgress}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      <nav className="flex-1 p-3 overflow-y-auto">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
          Modules
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass}>
                {item.complete ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-300 shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="truncate block">{item.number}. {item.label}</span>
                  {!item.complete && item.totalTasks > 0 && item.progress > 0 && (
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-indigo-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-3 border-t border-gray-200 space-y-2">
        <NavLink
          to="/reference"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Reference Guides
        </NavLink>
        <a
          href="/api/download-workspace"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Practice Files
        </a>
        <OsToggle />
      </div>
    </>
  )

  return (
    <>
      <button
        className="lg:hidden fixed top-3 left-3 z-50 bg-white shadow-md rounded-lg p-2 border border-gray-200 touch-manipulation"
        style={{ marginTop: 'env(safe-area-inset-top)', marginLeft: 'env(safe-area-inset-left)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div
        className={`fixed inset-0 bg-black/30 z-30 lg:hidden transition-opacity ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 flex flex-col transition-transform lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
