import { Icon } from './DashboardIcon'
import type { DashboardContent } from '../types/dashboard'

type DashboardMetricsProps = {
  copy: DashboardContent
}

export function DashboardMetrics({ copy }: DashboardMetricsProps) {
  return (
    <section className="metrics-grid" aria-label={copy.eyebrow}>
      {copy.metrics.map((metric, index) => {

        return (
          <article
            className={`metric-card metric-card-${index + 1}`}
            key={metric.label}
          >
            <div className="metric-top">
              <p className="metric-label">{metric.label}</p>
              <span className="metric-icon"><Icon name={metric.icon} /></span>
            </div>
            <div className="metric-value-row">
              <p className="metric-value">{metric.value}</p>
              <span className={`metric-trend ${metric.tone}`}>{metric.trend}</span>
            </div>
            <p className="metric-note">{metric.note}</p>
          </article>
        )
      })}
    </section>
  )
}
