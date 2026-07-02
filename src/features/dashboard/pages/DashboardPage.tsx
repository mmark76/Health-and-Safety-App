import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AboutAppPage } from '../../about-app/pages/AboutAppPage'
import { DashboardActionsAndAreas } from '../components/DashboardActionsAndAreas'
import { DashboardHeading } from '../components/DashboardHeading'
import { DashboardMetrics } from '../components/DashboardMetrics'
import { DashboardPanels } from '../components/DashboardPanels'
import { DashboardSidebar } from '../components/DashboardSidebar'
import { DashboardTopbar } from '../components/DashboardTopbar'
import { dashboardTranslations } from '../data/dashboardContent'
import { getNavigationItems, routeViewMap } from '../navigation'
import type { DashboardView, Language } from '../types/dashboard'
import { AppSectionPage } from './AppSectionPage'
import { HomePage } from './HomePage'
import './DashboardPage.css'
import './BuildVersion.css'

function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return 'el'
  return window.localStorage.getItem('hs-language') === 'en' ? 'en' : 'el'
}

function getActiveView(pathname: string): DashboardView {
  const view = routeViewMap[pathname]
  return view ?? 'home'
}

export function DashboardPage() {
  const [language, setLanguage] = useState<Language>(getLanguageFromStorage)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [focusMainOnRouteChange, setFocusMainOnRouteChange] = useState(false)
  const [mobileSidebarMode, setMobileSidebarMode] = useState(false)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
  const firstSidebarLinkRef = useRef<HTMLAnchorElement>(null)
  const mainContentRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const copy = dashboardTranslations[language]
  const navigationItems = getNavigationItems(copy)
  const activeView = getActiveView(location.pathname)
  const buildVersionTitle = language === 'el'
    ? `Έκδοση εφαρμογής · Commit: ${__APP_BUILD_LABEL__}`
    : `Application version · Commit: ${__APP_BUILD_LABEL__}`

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('hs-language', language)
  }, [language])

  useEffect(() => {
    const query = window.matchMedia('(max-width: 980px)')
    const updateSidebarMode = () => {
      setMobileSidebarMode(query.matches)
    }

    updateSidebarMode()
    query.addEventListener('change', updateSidebarMode)

    return () => {
      query.removeEventListener('change', updateSidebarMode)
    }
  }, [])

  useEffect(() => {
    if (!sidebarOpen) return

    firstSidebarLinkRef.current?.focus()

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

  useEffect(() => {
    if (!focusMainOnRouteChange) return

    mainContentRef.current?.focus()
    setFocusMainOnRouteChange(false)
  }, [focusMainOnRouteChange, location.pathname])

  const switchLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
    mobileMenuButtonRef.current?.focus()
  }

  const selectView = (view: DashboardView) => {
    const target = view === 'home' ? '/' : navigationItems.find((item) => item.id === view)?.path
    if (target === undefined) return

    navigate(target)
    setFocusMainOnRouteChange(true)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
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
          firstNavigationRef={firstSidebarLinkRef}
          inert={mobileSidebarMode && !sidebarOpen}
          language={language}
          navigationItems={navigationItems}
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

          <main className="dashboard-content" ref={mainContentRef} tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage copy={copy} language={language} navigationItems={navigationItems} onSelectView={selectView} />} />
              <Route
                path="/overview"
                element={(
                  <>
                    <DashboardHeading copy={copy} />
                    <DashboardMetrics copy={copy} />
                    <DashboardPanels copy={copy} />
                    <DashboardActionsAndAreas copy={copy} navigationItems={navigationItems} onSelectView={selectView} />
                  </>
                )}
              />
              <Route path="/coverage" element={<AppSectionPage language={language} view="coverage" />} />
              <Route path="/risks-and-measures" element={<AppSectionPage language={language} view="risks-and-measures" />} />
              <Route path="/training-and-preparedness" element={<AppSectionPage language={language} view="training-and-preparedness" />} />
              <Route path="/compliance-and-governance" element={<AppSectionPage language={language} view="compliance-and-governance" />} />
              <Route path="/reports" element={<AppSectionPage language={language} view="reports" />} />
              <Route path="/about" element={<AboutAppPage language={language} />} />
              <Route path="/settings" element={<AppSectionPage language={language} view="settings" />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <footer className="dashboard-footer-note">
              <p className="dashboard-footer-credit">{copy.footerCredit}</p>
              <div className="dashboard-footer-links" aria-label={copy.footerLinksLabel} role="list">
                {copy.footerLinks.map((link) => (
                  <span key={link.label} role="listitem">
                    {link.label}
                    <small>{copy.footerUnavailable}</small>
                  </span>
                ))}
              </div>
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
