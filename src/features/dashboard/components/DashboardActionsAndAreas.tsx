import { Icon } from './DashboardIcon'
import type { DashboardContent } from '../types/dashboard'

type DashboardActionsAndAreasProps = {
  copy: DashboardContent
}

export function DashboardActionsAndAreas({ copy }: DashboardActionsAndAreasProps) {
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
            <button className="quick-action" key={action.title} type="button">
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
          {copy.nav.slice(1, 6).map(([icon, label, description]) => (
            <button className="module-card" key={label} type="button">
              <span className="module-icon"><Icon name={icon} /></span>
              <span>
                <strong>{label}</strong>
                <span>{description}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
