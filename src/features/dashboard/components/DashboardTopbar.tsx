import { forwardRef } from 'react'
import { Icon } from './DashboardIcon'
import type { DashboardContent } from '../types/dashboard'

type DashboardTopbarProps = {
  copy: DashboardContent
  sidebarOpen: boolean
  onOpenSidebar: () => void
}

export const DashboardTopbar = forwardRef<HTMLButtonElement, DashboardTopbarProps>(
  function DashboardTopbar({ copy, sidebarOpen, onOpenSidebar }, mobileMenuButtonRef) {
    return (
      <header className="dashboard-topbar">
        <button
          aria-controls="dashboard-sidebar"
          aria-expanded={sidebarOpen}
          aria-label={copy.openMenu}
          className="icon-button mobile-menu-button"
          onClick={onOpenSidebar}
          ref={mobileMenuButtonRef}
          type="button"
        >
          <Icon name="menu" />
        </button>

        <label className="search-box">
          <Icon name="search" />
          <input aria-label={copy.search} placeholder={copy.search} type="search" />
        </label>

        <div className="topbar-actions">
          <button aria-label={copy.notifications} className="icon-button" type="button">
            <Icon name="bell" />
            <span className="notification-dot" />
          </button>
          <button aria-label={copy.userMenu} className="profile-button" type="button">
            <span className="profile-avatar">{copy.profileInitials}</span>
            <span className="profile-copy">
              <strong>{copy.profileName}</strong>
              <span>{copy.profileRole}</span>
            </span>
          </button>
        </div>
      </header>
    )
  },
)
