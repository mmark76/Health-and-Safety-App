import { Icon } from './DashboardIcon'
import type { DashboardContent } from '../types/dashboard'

type DashboardPanelsProps = {
  copy: DashboardContent
}

export function DashboardPanels({ copy }: DashboardPanelsProps) {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-stack">
        <section className="panel">
          <div className="panel-header">
            <div className="panel-title-wrap">
              <Icon name="alert" />
              <div>
                <h2 className="panel-title">{copy.alertsTitle}</h2>
                <p className="panel-kicker">{copy.alertsSubtitle}</p>
              </div>
            </div>
            <button className="text-button" type="button">{copy.viewAll}</button>
          </div>
          <div className="alert-list">
            {copy.alerts.map((alert) => (
              <article className="alert-item" key={alert.title}>
                <span className={`alert-severity ${alert.level}`}><Icon name="alert" /></span>
                <div className="item-copy">
                  <strong>{alert.title}</strong>
                  <span>{alert.detail}</span>
                </div>
                <span className={`status-badge ${alert.level === 'high' ? 'urgent' : 'pending'}`}>{alert.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div className="panel-title-wrap">
              <Icon name="calendar" />
              <div>
                <h2 className="panel-title">{copy.tasksTitle}</h2>
                <p className="panel-kicker">{copy.tasksSubtitle}</p>
              </div>
            </div>
            <button className="text-button" type="button">{copy.viewAll}</button>
          </div>
          <div className="task-list">
            {copy.tasks.map((task) => (
              <article className="task-item" key={`${task.day}-${task.title}`}>
                <span className="task-date">{task.day}<small>{task.month}</small></span>
                <div className="item-copy">
                  <strong>{task.title}</strong>
                  <span>{task.detail}</span>
                </div>
                <span className="status-badge pending">{task.status}</span>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="panel">
        <div className="panel-header">
          <div className="panel-title-wrap">
            <Icon name="reports" />
            <div>
              <h2 className="panel-title">{copy.activityTitle}</h2>
              <p className="panel-kicker">{copy.activitySubtitle}</p>
            </div>
          </div>
        </div>
        <div className="activity-list">
          {copy.activity.map((activity) => (
            <article className="activity-item" key={activity.title}>
              <span className="activity-marker"><Icon name={activity.icon} /></span>
              <div className="item-copy">
                <strong>{activity.title}</strong>
                <span>{activity.detail}</span>
                <p className="activity-time">{activity.time}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
