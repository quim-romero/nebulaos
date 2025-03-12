import { createContext, useEffect, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

interface ThemeContextProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const initial =
      (stored as 'light' | 'dark') || (systemPrefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(initial)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
