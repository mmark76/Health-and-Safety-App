import { useEffect, useRef, useState } from 'react'
import { AboutAppPage } from '../../about-app/pages/AboutAppPage'
import { DashboardActionsAndAreas } from '../components/DashboardActionsAndAreas'
import { DashboardHeading } from '../components/DashboardHeading'
import { DashboardMetrics } from '../components/DashboardMetrics'
import { DashboardPanels } from '../components/DashboardPanels'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { DashboardTopbar } from '../components/DashboardTopbar'
import { dashboardTranslations } from '../data/dashboardContent'
import type { DashboardView, Language } from '../types/dashboard'
import { AppSectionPage } from './AppSectionPage'
import { HomePage } from './HomePage'
import './DashboardPage.css'
import './BuildVersion.css'

export function DashboardPage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'el'
    return window.localStorage.getItem('hs-language') === 'en' ? 'en' : 'el'
  })
  const [activeView, setActiveView] = useState<DashboardView>('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
  const copy = dashboardTranslations[language]
  const buildVersionTitle = language === 'el'
    ? `Έκδοση εφαρμογής · Ώρα build Κύπρου · Commit: ${__APP_BUILD_LABEL__}`
    : `Application version · Cyprus build time · Commit: ${__APP_BUILD_LABEL__}`

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

  const renderActiveView = () => {
    if (activeView === 'home') {
      return <HomePage copy={copy} language={language} onSelectView={selectView} />
    }

    if (activeView === 'overview') {
      return (
        <>
          <DashboardHeading copy={copy} />
          <DashboardMetrics copy={copy} />
          <DashboardPanels copy={copy} />
          <DashboardActionsAndAreas copy={copy} onSelectView={selectView} />
        </>
      )
    }

    if (activeView === 'about') {
      return <AboutAppPage language={language} />
    }

    return <AppSectionPage language={language} view={activeView} />
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
          onSelectView={selectView}
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
            {renderActiveView()}

            <footer className="dashboard-footer-note">
              <p className="dashboard-footer-credit">{copy.footerCredit}</p>
              <nav className="dashboard-footer-links" aria-label={copy.footerLinksLabel}>
                {copy.footerLinks.map((link) => (
                  <a href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
              <span className="dashboard-build-version" title={buildVersionTitle}>
                {__APP_BUILD_LABEL__}
              </span>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}