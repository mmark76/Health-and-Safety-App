import { Icon } from './DashboardIcon'
import type { DashboardContent } from '../types/dashboard'

type DashboardHeadingProps = {
  copy: DashboardContent
}

export function DashboardHeading({ copy }: DashboardHeadingProps) {
  return (
    <section className="dashboard-heading-row" aria-labelledby="dashboard-title">
      <div>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="dashboard-title" id="dashboard-title">{copy.title}</h1>
        <p className="dashboard-subtitle">{copy.subtitle}</p>
      </div>
      <div className="heading-actions">
        <span className="demo-chip"><Icon name="shield" />{copy.demo}</span>
        <button
          aria-label={`${copy.newRecord}. ${copy.unavailableAction}`}
          className="primary-button"
          disabled
          title={copy.unavailableAction}
          type="button"
        >
          <Icon name="plus" />
          {copy.newRecord}
        </button>
      </div>
    </section>
  )
}
