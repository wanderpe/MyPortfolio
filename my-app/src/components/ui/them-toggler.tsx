"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-16 items-center justify-center rounded-full bg-gray-200 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-100 to-blue-100 dark:from-blue-900 dark:to-purple-900 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />

      {/* Slider thumb */}
      <div
        className={`absolute h-7 w-7 rounded-full bg-white shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center transform ${
          isDark ? 'translate-x-4' : '-translate-x-4'
        } dark:bg-gray-800`}
      >
        {/* Sun Icon */}
        <Sun
          className={`absolute h-4 w-4 text-amber-500 transition-all duration-400 ease-in-out ${
            isDark ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`absolute h-4 w-4 text-blue-400 transition-all duration-400 ease-in-out delay-75 ${
            isDark ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-90'
          }`}
        />
      </div>
    </button>
  )
}
