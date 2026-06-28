import { useEffect, useRef, useState } from 'react'
import { AboutAppPage } from '../../about-app/pages/AboutAppPage'
import { DashboardActionsAndAreas } from '../components/DashboardActionsAndAreas'
import { DashboardHeading } from '../components/DashboardHeading'
import { DashboardMetrics } from '../components/DashboardMetrics'
import { DashboardPanels } from '../components/DashboardPanels'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { DashboardTopbar } from '../components/DashboardTopbar'
import { dashboardTranslations } from '../data/dashboardContent'
import type { Language } from '../types/dashboard'
import './DashboardPage.css'

type DashboardView = 'overview' | 'about'

export function DashboardPage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'el'
    return window.localStorage.getItem('hs-language') === 'en' ? 'en' : 'el'
  })
  const [activeView, setActiveView] = useState<DashboardView>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
  const copy = dashboardTranslations[language]

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('hs-language', language)
  }, [language])

  useEffect(() => {
    if (!sidebarOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      setSidebarOpen(false)
      mobileMenuButtonRef.current?.focus()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [sidebarOpen])

  const switchLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const selectView = (view: DashboardView) => {
    setActiveView(view)
    window.scrollTo(0, 0)
  }

  return (
    <div className="dashboard-shell">
      <div className="dashboard-layout">
        {sidebarOpen && (
          <button
            aria-label={copy.closeMenu}
            className="sidebar-overlay"
            onClick={closeSidebar}
            type="button"
          />
        )}

        <DashboardSidebar
          activeView={activeView}
          copy={copy}
          language={language}
          onClose={closeSidebar}
          onLanguageChange={switchLanguage}
          onSelectAbout={() => selectView('about')}
          onSelectOverview={() => selectView('overview')}
          sidebarOpen={sidebarOpen}
        />

        <div className="dashboard-main">
          <DashboardTopbar
            copy={copy}
            onOpenSidebar={() => setSidebarOpen(true)}
            ref={mobileMenuButtonRef}
            sidebarOpen={sidebarOpen}
          />

          <main className="dashboard-content">
            {activeView === 'overview' ? (
              <>
                <DashboardHeading copy={copy} />
                <DashboardMetrics copy={copy} />
                <DashboardPanels copy={copy} />
                <DashboardActionsAndAreas copy={copy} />
              </>
            ) : (
              <AboutAppPage language={language} />
            )}

            <footer className="dashboard-footer-note">
              <span>{copy.footerLeft}</span>
              <span>{copy.footerRight}</span>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
