import { createContext, useContext, useState, useEffect } from 'react'

const PlatformContext = createContext()

function detectPlatform() {
  const ua = navigator.userAgent || ''
  if (ua.includes('Mac')) return 'mac'
  if (ua.includes('Win')) return 'windows'
  return 'mac'
}

export function PlatformProvider({ children }) {
  const [platform, setPlatform] = useState(() => {
    const saved = localStorage.getItem('platform')
    return saved === 'mac' || saved === 'windows' ? saved : detectPlatform()
  })

  useEffect(() => {
    localStorage.setItem('platform', platform)
  }, [platform])

  const togglePlatform = () => {
    setPlatform(prev => prev === 'mac' ? 'windows' : 'mac')
  }

  return (
    <PlatformContext.Provider value={{ platform, setPlatform, togglePlatform }}>
      {children}
    </PlatformContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePlatform() {
  return useContext(PlatformContext)
}
