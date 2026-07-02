import { Icon } from './DashboardIcon'
import type { DashboardContent, DashboardView, Language } from '../types/dashboard'
import './DashboardSidebar.css'

const mainViews: DashboardView[] = ['home', 'overview', 'legislation', 'safety-file', 'news']

type DashboardSidebarProps = {
  activeView: DashboardView
  copy: DashboardContent
  language: Language
  sidebarOpen: boolean
  onClose: () => void
  onLanguageChange: (language: Language) => void
  onSelectView: (view: DashboardView) => void
}

export function DashboardSidebar({
  activeView,
  copy,
  language,
  sidebarOpen,
  onClose,
  onLanguageChange,
  onSelectView,
}: DashboardSidebarProps) {
  const selectView = (view: DashboardView) => {
    onSelectView(view)
    onClose()
  }

  const supportingLabel = language === 'el' ? 'Βοηθητικές επιλογές' : 'Supporting options'
  const settingsLabel = language === 'el' ? 'Ρυθμίσεις' : 'Settings'
  const contactLabel = language === 'el' ? 'Χρήσιμα τηλέφωνα' : 'Useful telephone numbers'
  const aboutBadge = language === 'el' ? 'Πληροφορίες' : 'Information'
  const aboutDescription = language === 'el'
    ? 'Σκοπός, λειτουργίες και κατάσταση'
    : 'Purpose, features and status'

  return (
    <aside className={`dashboard-sidebar${sidebarOpen ? ' is-open' : ''}`} id="dashboard-sidebar">
      <button
        aria-label={copy.closeMenu}
        className="mobile-close-button"
        onClick={onClose}
        type="button"
      >
        <Icon name="close" />
      </button>

      <div className="brand">
        <span className="brand-mark"><Icon name="shield" /></span>
        <span className="brand-copy">
          <strong>{copy.appName}</strong>
          <span>{copy.appTagline}</span>
        </span>
      </div>

      <p className="sidebar-section-label">{copy.navigation}</p>
      <nav className="sidebar-nav" aria-label={copy.navigation}>
        {copy.nav.map(([icon, label], index) => {
          const view = mainViews[index]
          const isActive = activeView === view

          return (
            <button
              aria-current={isActive ? 'page' : undefined}
              className={`sidebar-link${isActive ? ' is-active' : ''}`}
              key={view}
              onClick={() => selectView(view)}
              type="button"
            >
              <Icon name={icon} />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>

      <div className="sidebar-supporting-nav">
        <p className="sidebar-supporting-label">{supportingLabel}</p>

        <button
          aria-current={activeView === 'contact' ? 'page' : undefined}
          className={`sidebar-link sidebar-supporting-link${activeView === 'contact' ? ' is-active' : ''}`}
          onClick={() => selectView('contact')}
          type="button"
        >
          <Icon name="phone" />
          <span>{contactLabel}</span>
        </button>

        <button
          aria-current={activeView === 'about' ? 'page' : undefined}
          className={`sidebar-link sidebar-about-link${activeView === 'about' ? ' is-active' : ''}`}
          onClick={() => selectView('about')}
          type="button"
        >
          <Icon name="info" />
          <span className="sidebar-about-copy">
            <span className="sidebar-about-badge">{aboutBadge}</span>
            <strong>{copy.aboutApp}</strong>
            <span className="sidebar-about-description">{aboutDescription}</span>
          </span>
        </button>

        <button
          aria-current={activeView === 'settings' ? 'page' : undefined}
          className={`sidebar-link sidebar-supporting-link${activeView === 'settings' ? ' is-active' : ''}`}
          onClick={() => selectView('settings')}
          type="button"
        >
          <Icon name="settings" />
          <span>{settingsLabel}</span>
        </button>
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
