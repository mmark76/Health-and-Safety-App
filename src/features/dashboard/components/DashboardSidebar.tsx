import { Icon } from './DashboardIcon'
import type { DashboardContent, Language } from '../types/dashboard'

type DashboardSidebarProps = {
  copy: DashboardContent
  language: Language
  sidebarOpen: boolean
  onClose: () => void
  onLanguageChange: (language: Language) => void
}

export function DashboardSidebar({ copy, language, sidebarOpen, onClose, onLanguageChange }: DashboardSidebarProps) {
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
        {copy.nav.map(([icon, label], index) => (
          <button
            aria-current={index === 0 ? 'page' : undefined}
            className={`sidebar-link${index === 0 ? ' is-active' : ''}`}
            key={label}
            onClick={onClose}
            type="button"
          >
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

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
        <p className="sidebar-version">v0.1 · Development</p>
      </div>
    </aside>
  )
}
