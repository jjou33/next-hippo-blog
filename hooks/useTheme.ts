import { useCallback, useEffect, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { darkModeState } from 'states/darkModeThemeState'
type ThemeKey = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useRecoilState(darkModeState)

  const isDarkMode = useMemo(() => theme === 'dark', [theme])
  const initTheme = useCallback(() => {
    const preferDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const initalTheme = (localStorage.getItem('theme') ||
      (preferDarkMode ? 'dark' : 'light')) as ThemeKey

    setTheme(initalTheme)
  }, [])

  useEffect(() => {
    initTheme()
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return { theme, isDarkMode, setTheme, toggleTheme }
}

export default useTheme
