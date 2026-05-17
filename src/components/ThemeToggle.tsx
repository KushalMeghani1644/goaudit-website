import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type ThemeMode = 'light' | 'dark'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return stored as ThemeMode
  }

  return 'dark'
}

function applyThemeMode(mode: ThemeMode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  document.documentElement.style.colorScheme = mode
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('dark')

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  function toggleMode() {
    const nextMode: ThemeMode = mode === 'light' ? 'dark' : 'light'
    setMode(nextMode)
    applyThemeMode(nextMode)
    window.localStorage.setItem('theme', nextMode)
  }

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 transition-all hover:scale-105 active:scale-95"
    >
      {mode === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
