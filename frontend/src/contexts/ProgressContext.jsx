import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

export function ProgressProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons')
    return saved ? JSON.parse(saved) : []
  })

  const [checkedTasks, setCheckedTasks] = useState(() => {
    const saved = localStorage.getItem('checkedTasks')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
  }, [completedLessons])

  useEffect(() => {
    localStorage.setItem('checkedTasks', JSON.stringify(checkedTasks))
  }, [checkedTasks])

  const markLessonComplete = (lessonId) => {
    setCompletedLessons((prev) => prev.includes(lessonId) ? prev : [...prev, lessonId])
  }

  const unmarkLessonComplete = (lessonId) => {
    setCompletedLessons((prev) => prev.filter((id) => id !== lessonId))
  }

  const toggleTask = (lessonId, taskIndex) => {
    const key = `${lessonId}-${taskIndex}`
    setCheckedTasks((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const isTaskChecked = (lessonId, taskIndex) => {
    return !!checkedTasks[`${lessonId}-${taskIndex}`]
  }

  const getLessonProgress = (lessonId, totalTasks) => {
    if (totalTasks === 0) return completedLessons.includes(lessonId) ? 100 : 0
    let checked = 0
    for (let i = 0; i < totalTasks; i++) {
      if (checkedTasks[`${lessonId}-${i}`]) checked++
    }
    return Math.round((checked / totalTasks) * 100)
  }

  const resetProgress = () => {
    setCompletedLessons([])
    setCheckedTasks({})
    localStorage.removeItem('completedLessons')
    localStorage.removeItem('checkedTasks')
  }

  return (
    <ProgressContext.Provider value={{
      completedLessons,
      markLessonComplete,
      unmarkLessonComplete,
      toggleTask,
      isTaskChecked,
      getLessonProgress,
      resetProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress() {
  return useContext(ProgressContext)
}
