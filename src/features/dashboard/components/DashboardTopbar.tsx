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
          <input
            aria-describedby="search-under-development"
            aria-label={copy.search}
            disabled
            placeholder={copy.searchUnavailable}
            type="search"
          />
          <span className="visually-hidden" id="search-under-development">{copy.searchUnavailable}</span>
        </label>

        <div className="topbar-actions">
          <button
            aria-label={`${copy.notifications}. ${copy.notificationsUnavailable}`}
            className="icon-button"
            disabled
            title={copy.notificationsUnavailable}
            type="button"
          >
            <Icon name="bell" />
          </button>
          <button
            aria-label={`${copy.userMenu}. ${copy.profileUnavailable}`}
            className="profile-button"
            disabled
            title={copy.profileUnavailable}
            type="button"
          >
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
