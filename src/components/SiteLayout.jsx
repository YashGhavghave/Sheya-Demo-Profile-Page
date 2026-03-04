import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import TopNav from './TopNav'

function SiteLayout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme-mode')
    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme-mode', theme)
  }, [isDarkMode])

  return (
    <div className="site">
      <TopNav isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)} />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
