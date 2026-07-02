import type { MouseEvent, RefObject } from 'react'
import { Icon } from './DashboardIcon'
import type { DashboardContent, DashboardView, Language, NavigationItem } from '../types/dashboard'
import './DashboardSidebar.css'

type DashboardSidebarProps = {
  activeView: DashboardView
  copy: DashboardContent
  firstNavigationRef: RefObject<HTMLAnchorElement | null>
  inert: boolean
  language: Language
  navigationItems: NavigationItem[]
  sidebarOpen: boolean
  onClose: () => void
  onLanguageChange: (language: Language) => void
  onSelectView: (view: DashboardView) => void
}

export function DashboardSidebar({
  activeView,
  copy,
  firstNavigationRef,
  inert,
  language,
  navigationItems,
  sidebarOpen,
  onClose,
  onLanguageChange,
  onSelectView,
}: DashboardSidebarProps) {
  const selectView = (event: MouseEvent<HTMLAnchorElement>, view: DashboardView) => {
    event.preventDefault()
    onSelectView(view)
  }

  const supportingLabel = language === 'el' ? 'Βοηθητικές επιλογές' : 'Supporting options'
  const primaryItems = navigationItems.filter((item) => item.category === 'primary')
  const supportingItems = navigationItems.filter((item) => item.category === 'supporting')

  return (
    <aside
      aria-hidden={inert ? true : undefined}
      className={`dashboard-sidebar${sidebarOpen ? ' is-open' : ''}`}
      id="dashboard-sidebar"
      inert={inert ? true : undefined}
    >
      <button
        aria-label={copy.closeMenu}
        className="mobile-close-button"
        onClick={onClose}
        type="button"
      >
        <Icon name="close" />
      </button>

      <button
        className="brand"
        onClick={(event) => {
          event.preventDefault()
          onSelectView('home')
        }}
        type="button"
      >
        <span className="brand-mark"><Icon name="shield" /></span>
        <span className="brand-copy">
          <strong>{copy.appName}</strong>
          <span>{copy.appTagline}</span>
        </span>
      </button>

      <p className="sidebar-section-label">{copy.navigation}</p>
      <nav className="sidebar-nav" aria-label={copy.navigation}>
        {primaryItems.map((item, index) => {
          const isActive = activeView === item.id

          return (
            <a
              aria-current={isActive ? 'page' : undefined}
              className={`sidebar-link${isActive ? ' is-active' : ''}`}
              href={item.path}
              key={item.id}
              onClick={(event) => selectView(event, item.id)}
              ref={index === 0 ? firstNavigationRef : undefined}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>

      <div className="sidebar-supporting-nav">
        <p className="sidebar-supporting-label">{supportingLabel}</p>

        {supportingItems.map((item) => {
          const isActive = activeView === item.id

          return (
            <a
              aria-current={isActive ? 'page' : undefined}
              className={`sidebar-link sidebar-supporting-link${isActive ? ' is-active' : ''}`}
              href={item.path}
              key={item.id}
              onClick={(event) => selectView(event, item.id)}
            >
              <Icon name={item.icon} />
              <span className={item.id === 'about' ? 'sidebar-about-copy' : undefined}>
                {item.id === 'about' && <span className="sidebar-about-badge">{language === 'el' ? 'Πληροφορίες' : 'Information'}</span>}
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </span>
            </a>
          )
        })}
      </div>

      <div className="sidebar-footer">
        <div className="language-switch" aria-label="Language / Γλώσσα">
          <button
            aria-pressed={language === 'el'}
            className={language === 'el' ? 'is-active' : ''}
            onClick={() => onLanguageChange('el')}
            type="button"
          >
            Ελληνικά
          </button>
          <button
            aria-pressed={language === 'en'}
            className={language === 'en' ? 'is-active' : ''}
            onClick={() => onLanguageChange('en')}
            type="button"
          >
            English
          </button>
        </div>
      </div>
    </aside>
  )
}
