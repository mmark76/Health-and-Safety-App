import { Icon } from './DashboardIcon'
import type { DashboardContent, DashboardView, NavigationItem } from '../types/dashboard'

type DashboardActionsAndAreasProps = {
  copy: DashboardContent
  navigationItems: NavigationItem[]
  onSelectView: (view: DashboardView) => void
}

export function DashboardActionsAndAreas({ copy, navigationItems, onSelectView }: DashboardActionsAndAreasProps) {
  const primaryItems = navigationItems.filter((item) => item.category === 'primary')

  return (
    <>
      <section className="panel modules-panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <Icon name="plus" />
            <div>
              <h2 className="panel-title">{copy.quickTitle}</h2>
              <p className="panel-kicker">{copy.quickSubtitle}</p>
            </div>
          </div>
        </div>
        <div className="quick-actions-grid">
          {copy.quickActions.map((action) => (
            <button
              aria-label={`${action.title}. ${copy.unavailableAction}`}
              className="quick-action"
              disabled
              key={action.title}
              title={copy.unavailableAction}
              type="button"
            >
              <span className="quick-icon"><Icon name={action.icon} /></span>
              <strong>{action.title}</strong>
              <span>{action.detail}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="panel modules-panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <Icon name="dashboard" />
            <div>
              <h2 className="panel-title">{copy.modulesTitle}</h2>
              <p className="panel-kicker">{copy.modulesSubtitle}</p>
            </div>
          </div>
        </div>
        <div className="modules-grid">
          {primaryItems.map((item) => (
            <button className="module-card" key={item.id} onClick={() => onSelectView(item.id)} type="button">
              <span className="module-icon"><Icon name={item.icon} /></span>
              <span>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
