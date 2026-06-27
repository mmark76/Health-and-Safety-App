import { useEffect, useState } from 'react'
import './DashboardPage.css'

type Language = 'el' | 'en'

type IconName =
  | 'actions'
  | 'alert'
  | 'bell'
  | 'calendar'
  | 'check'
  | 'close'
  | 'dashboard'
  | 'documents'
  | 'incidents'
  | 'inspections'
  | 'menu'
  | 'phone'
  | 'plus'
  | 'reports'
  | 'risk'
  | 'search'
  | 'settings'
  | 'shield'
  | 'training'
  | 'user'

const iconPaths: Record<IconName, string[]> = {
  actions: ['M9 11l3 3L22 4', 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'],
  alert: ['M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z', 'M12 9v4', 'M12 17h.01'],
  bell: ['M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9', 'M10 21h4'],
  calendar: ['M3 5h18v16H3z', 'M16 3v4', 'M8 3v4', 'M3 10h18'],
  check: ['M20 6 9 17l-5-5'],
  close: ['M18 6 6 18', 'M6 6l12 12'],
  dashboard: ['M3 3h8v8H3z', 'M13 3h8v5h-8z', 'M13 10h8v11h-8z', 'M3 13h8v8H3z'],
  documents: ['M6 2h9l5 5v15H6z', 'M14 2v6h6', 'M9 13h6', 'M9 17h6'],
  incidents: ['M12 9v4', 'M12 17h.01', 'M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z'],
  inspections: ['M11 4H5a2 2 0 0 0-2 2v14h14v-6', 'M18 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z', 'M21 11l-3-3'],
  menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  phone: ['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z'],
  plus: ['M12 5v14', 'M5 12h14'],
  reports: ['M4 20V10', 'M10 20V4', 'M16 20v-7', 'M22 20H2'],
  risk: ['M9 5h6', 'M9 3h6a2 2 0 0 1 2 2v1h3v16H4V6h3V5a2 2 0 0 1 2-2Z', 'M8 12h8', 'M8 16h5'],
  search: ['M11 19a8 8 0 1 1 5.7-2.3L21 21'],
  settings: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 3.6-.2-.1a1.7 1.7 0 0 0-1.8-.1l-1 .6a1.7 1.7 0 0 0-.9 1.6v.2H9.7v-.2a1.7 1.7 0 0 0-.9-1.6l-1-.6a1.7 1.7 0 0 0-1.8.1l-.2.1L3.7 17l.1-.1A1.7 1.7 0 0 0 4.1 15l-.6-1a1.7 1.7 0 0 0-1.5-.9h-.2V8.9H2A1.7 1.7 0 0 0 3.5 8l.6-1a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-3.6.2.1a1.7 1.7 0 0 0 1.8.1l1-.6a1.7 1.7 0 0 0 .9-1.6v-.2h4.2v.2a1.7 1.7 0 0 0 .9 1.6l1 .6a1.7 1.7 0 0 0 1.8-.1l.2-.1L19.9 5l-.1.1a1.7 1.7 0 0 0-.3 1.9l.6 1a1.7 1.7 0 0 0 1.5.9h.2v4.2h-.2a1.7 1.7 0 0 0-1.5.9l-.7 1Z'],
  shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z', 'M9 12l2 2 4-4'],
  training: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M22 21v-2a4 4 0 0 0-3-3.9', 'M16 3.1a4 4 0 0 1 0 7.8'],
  user: ['M20 21a8 8 0 0 0-16 0', 'M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'],
}

function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {iconPaths[name].map((path, index) => (
        <path d={path} key={`${name}-${index}`} />
      ))}
    </svg>
  )
}

const translations = {
  el: {
    appName: 'Health and Safety App',
    appTagline: 'Διαχείριση Ασφάλειας & Υγείας',
    navigation: 'Πλοήγηση',
    nav: [
      ['dashboard', 'Πίνακας Ελέγχου'],
      ['risk', 'Εκτιμήσεις Κινδύνου'],
      ['inspections', 'Επιθεωρήσεις'],
      ['incidents', 'Συμβάντα & Παρ’ ολίγον'],
      ['actions', 'Διορθωτικές Ενέργειες'],
      ['training', 'Εκπαίδευση & Toolbox Talks'],
      ['documents', 'Έγγραφα & Έντυπα'],
      ['reports', 'Αναφορές'],
      ['phone', 'Επαφές Έκτακτης Ανάγκης'],
      ['settings', 'Ρυθμίσεις'],
    ] as [IconName, string][],
    search: 'Αναζήτηση σε συμβάντα, ενέργειες και έγγραφα…',
    profileRole: 'Υπεύθυνος Ασφάλειας & Υγείας',
    eyebrow: 'Κεντρική επισκόπηση',
    title: 'Καλημέρα, Markellos',
    subtitle: 'Παρακολούθησε τους βασικούς δείκτες, τις εκκρεμότητες και τις άμεσες προτεραιότητες του οργανισμού.',
    demo: 'Ενδεικτικά δεδομένα',
    newRecord: 'Νέα καταχώριση',
    metrics: [
      { label: 'Ανοικτές ενέργειες', value: '18', trend: '3 εκπρόθεσμες', note: '5 υψηλής προτεραιότητας', icon: 'actions', tone: 'warn' },
      { label: 'Επιθεωρήσεις μήνα', value: '24', trend: '92% ολοκλήρωση', note: '2 προγραμματισμένες σήμερα', icon: 'inspections', tone: 'good' },
      { label: 'Συμβάντα έτους', value: '7', trend: '↓ 22%', note: 'Σε σύγκριση με πέρσι', icon: 'incidents', tone: 'good' },
      { label: 'Συμμόρφωση εκπαίδευσης', value: '94%', trend: '6 λήξεις', note: 'Εντός των επόμενων 30 ημερών', icon: 'training', tone: 'warn' },
    ],
    alertsTitle: 'Κρίσιμες ειδοποιήσεις',
    alertsSubtitle: 'Θέματα που χρειάζονται άμεση προσοχή',
    viewAll: 'Προβολή όλων',
    alerts: [
      { title: 'Εκπρόθεσμη διορθωτική ενέργεια', detail: 'Εργοτάξιο Λευκωσίας · Προστατευτικά κιγκλιδώματα', status: 'Επείγον', level: 'high' },
      { title: 'Λήξη πιστοποιητικού ανυψωτικού', detail: 'Όχημα FL-04 · Λήγει σε 4 ημέρες', status: 'Εκκρεμεί', level: 'medium' },
      { title: 'Ατελής διερεύνηση συμβάντος', detail: 'Αποθήκη Β · Αναφορά INC-2026-007', status: 'Επείγον', level: 'high' },
    ],
    tasksTitle: 'Επερχόμενες εργασίες',
    tasksSubtitle: 'Πρόγραμμα των επόμενων ημερών',
    tasks: [
      { day: '28', month: 'ΙΟΥΝ', title: 'Μηνιαία επιθεώρηση εργοταξίου', detail: 'Έργο αναβάθμισης οδικού δικτύου', status: '09:00' },
      { day: '30', month: 'ΙΟΥΝ', title: 'Toolbox Talk: Εργασία σε ύψος', detail: 'Ομάδα τεχνικής συντήρησης', status: '07:30' },
      { day: '02', month: 'ΙΟΥΛ', title: 'Ανασκόπηση Εκτίμησης Κινδύνου', detail: 'Κεντρικά γραφεία · Αίθουσα συσκέψεων', status: '11:00' },
    ],
    activityTitle: 'Πρόσφατη δραστηριότητα',
    activitySubtitle: 'Τελευταίες ενημερώσεις συστήματος',
    activity: [
      { title: 'Ολοκληρώθηκε η επιθεώρηση INS-124', detail: 'Από Ανδρέα Γεωργίου', time: 'Πριν 18 λεπτά', icon: 'check' },
      { title: 'Καταχωρίστηκε νέο παρ’ ολίγον συμβάν', detail: 'Αποθήκη Α · Χωρίς τραυματισμό', time: 'Πριν 1 ώρα', icon: 'incidents' },
      { title: 'Εγκρίθηκε η Εκτίμηση Κινδύνου RA-058', detail: 'Εργασία σε περιορισμένο χώρο', time: 'Πριν 3 ώρες', icon: 'risk' },
      { title: 'Μεταφορτώθηκε νέο πιστοποιητικό', detail: 'Ανυψωτικός εξοπλισμός CR-02', time: 'Χθες, 16:42', icon: 'documents' },
    ],
    quickTitle: 'Γρήγορες ενέργειες',
    quickSubtitle: 'Συχνές εργασίες με ένα βήμα',
    quickActions: [
      { title: 'Αναφορά συμβάντος', detail: 'Καταχώριση συμβάντος ή παρ’ ολίγον', icon: 'incidents' },
      { title: 'Νέα επιθεώρηση', detail: 'Έναρξη ελέγχου χώρου ή εξοπλισμού', icon: 'inspections' },
      { title: 'Νέα διορθωτική ενέργεια', detail: 'Ανάθεση και παρακολούθηση ενέργειας', icon: 'actions' },
      { title: 'Ανέβασμα εγγράφου', detail: 'Πιστοποιητικό, έντυπο ή διαδικασία', icon: 'documents' },
    ],
    modulesTitle: 'Ενότητες συστήματος',
    modulesSubtitle: 'Γρήγορη πρόσβαση στις βασικές λειτουργίες',
    modulesStatus: 'Σε σχεδιασμό',
    footerLeft: 'Περιβάλλον ανάπτυξης · Τα δεδομένα είναι ενδεικτικά',
    footerRight: 'Τελευταία ενημέρωση: σήμερα, 11:30',
    closeMenu: 'Κλείσιμο μενού',
    openMenu: 'Άνοιγμα μενού',
    notifications: 'Ειδοποιήσεις',
    userMenu: 'Μενού χρήστη',
  },
  en: {
    appName: 'Health and Safety App',
    appTagline: 'Health & Safety Management',
    navigation: 'Navigation',
    nav: [
      ['dashboard', 'Dashboard'],
      ['risk', 'Risk Assessments'],
      ['inspections', 'Inspections'],
      ['incidents', 'Incidents & Near Misses'],
      ['actions', 'Corrective Actions'],
      ['training', 'Training & Toolbox Talks'],
      ['documents', 'Documents & Forms'],
      ['reports', 'Reports'],
      ['phone', 'Emergency Contacts'],
      ['settings', 'Settings'],
    ] as [IconName, string][],
    search: 'Search incidents, actions and documents…',
    profileRole: 'Health & Safety Officer',
    eyebrow: 'Executive overview',
    title: 'Good morning, Markellos',
    subtitle: 'Monitor the organisation’s key indicators, pending actions and immediate priorities.',
    demo: 'Demonstration data',
    newRecord: 'New record',
    metrics: [
      { label: 'Open actions', value: '18', trend: '3 overdue', note: '5 marked high priority', icon: 'actions', tone: 'warn' },
      { label: 'Inspections this month', value: '24', trend: '92% complete', note: '2 scheduled for today', icon: 'inspections', tone: 'good' },
      { label: 'Incidents this year', value: '7', trend: '↓ 22%', note: 'Compared with last year', icon: 'incidents', tone: 'good' },
      { label: 'Training compliance', value: '94%', trend: '6 expiries', note: 'Within the next 30 days', icon: 'training', tone: 'warn' },
    ],
    alertsTitle: 'Critical alerts',
    alertsSubtitle: 'Items requiring immediate attention',
    viewAll: 'View all',
    alerts: [
      { title: 'Corrective action overdue', detail: 'Nicosia site · Edge protection barriers', status: 'Urgent', level: 'high' },
      { title: 'Forklift certificate expiring', detail: 'Vehicle FL-04 · Expires in 4 days', status: 'Pending', level: 'medium' },
      { title: 'Incident investigation incomplete', detail: 'Warehouse B · Report INC-2026-007', status: 'Urgent', level: 'high' },
    ],
    tasksTitle: 'Upcoming tasks',
    tasksSubtitle: 'Schedule for the next few days',
    tasks: [
      { day: '28', month: 'JUN', title: 'Monthly site inspection', detail: 'Road network upgrade project', status: '09:00' },
      { day: '30', month: 'JUN', title: 'Toolbox Talk: Working at height', detail: 'Technical maintenance team', status: '07:30' },
      { day: '02', month: 'JUL', title: 'Risk Assessment review', detail: 'Head office · Meeting room', status: '11:00' },
    ],
    activityTitle: 'Recent activity',
    activitySubtitle: 'Latest system updates',
    activity: [
      { title: 'Inspection INS-124 completed', detail: 'By Andreas Georgiou', time: '18 minutes ago', icon: 'check' },
      { title: 'New near miss reported', detail: 'Warehouse A · No injury', time: '1 hour ago', icon: 'incidents' },
      { title: 'Risk Assessment RA-058 approved', detail: 'Confined-space work', time: '3 hours ago', icon: 'risk' },
      { title: 'New certificate uploaded', detail: 'Lifting equipment CR-02', time: 'Yesterday, 16:42', icon: 'documents' },
    ],
    quickTitle: 'Quick actions',
    quickSubtitle: 'Frequent tasks in one step',
    quickActions: [
      { title: 'Report an incident', detail: 'Record an incident or near miss', icon: 'incidents' },
      { title: 'Start an inspection', detail: 'Inspect a workplace or equipment', icon: 'inspections' },
      { title: 'Add corrective action', detail: 'Assign and monitor an action', icon: 'actions' },
      { title: 'Upload a document', detail: 'Certificate, form or procedure', icon: 'documents' },
    ],
    modulesTitle: 'System modules',
    modulesSubtitle: 'Quick access to core functions',
    modulesStatus: 'Planned',
    footerLeft: 'Development environment · Data shown is illustrative',
    footerRight: 'Last updated: today, 11:30',
    closeMenu: 'Close menu',
    openMenu: 'Open menu',
    notifications: 'Notifications',
    userMenu: 'User menu',
  },
}

export function DashboardPage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'el'
    return window.localStorage.getItem('hs-language') === 'en' ? 'en' : 'el'
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('hs-language', language)
  }, [language])

  const switchLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
  }

  return (
    <div className="dashboard-shell">
      <div className="dashboard-layout">
        {sidebarOpen && (
          <button
            aria-label={copy.closeMenu}
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
            type="button"
          />
        )}

        <aside className={`dashboard-sidebar${sidebarOpen ? ' is-open' : ''}`}>
          <button
            aria-label={copy.closeMenu}
            className="mobile-close-button"
            onClick={() => setSidebarOpen(false)}
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
                className={`sidebar-link${index === 0 ? ' is-active' : ''}`}
                key={label}
                onClick={() => setSidebarOpen(false)}
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
                className={language === 'el' ? 'is-active' : ''}
                onClick={() => switchLanguage('el')}
                type="button"
              >
                Ελληνικά
              </button>
              <button
                className={language === 'en' ? 'is-active' : ''}
                onClick={() => switchLanguage('en')}
                type="button"
              >
                English
              </button>
            </div>
            <p className="sidebar-version">v0.1 · Development</p>
          </div>
        </aside>

        <div className="dashboard-main">
          <header className="dashboard-topbar">
            <button
              aria-label={copy.openMenu}
              className="icon-button mobile-menu-button"
              onClick={() => setSidebarOpen(true)}
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
                <span className="profile-avatar">MM</span>
                <span className="profile-copy">
                  <strong>Markellos Markides</strong>
                  <span>{copy.profileRole}</span>
                </span>
              </button>
            </div>
          </header>

          <main className="dashboard-content">
            <section className="dashboard-heading-row" aria-labelledby="dashboard-title">
              <div>
                <p className="eyebrow">{copy.eyebrow}</p>
                <h1 className="dashboard-title" id="dashboard-title">{copy.title}</h1>
                <p className="dashboard-subtitle">{copy.subtitle}</p>
              </div>
              <div className="heading-actions">
                <span className="demo-chip"><Icon name="shield" />{copy.demo}</span>
                <button className="primary-button" type="button">
                  <Icon name="plus" />
                  {copy.newRecord}
                </button>
              </div>
            </section>

            <section className="metrics-grid" aria-label={copy.eyebrow}>
              {copy.metrics.map((metric, index) => {

                return (
                  <article
                    className={`metric-card metric-card-${index + 1}`}
                    key={metric.label}
                  >
                    <div className="metric-top">
                      <p className="metric-label">{metric.label}</p>
                      <span className="metric-icon"><Icon name={metric.icon as IconName} /></span>
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
                      <span className="activity-marker"><Icon name={activity.icon as IconName} /></span>
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
                    <span className="quick-icon"><Icon name={action.icon as IconName} /></span>
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
                {copy.nav.slice(1).map(([icon, label]) => (
                  <button className="module-card" key={label} type="button">
                    <span className="module-icon"><Icon name={icon} /></span>
                    <span>
                      <strong>{label}</strong>
                      <span>{copy.modulesStatus}</span>
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <footer className="dashboard-footer-note">
              <span>{copy.footerLeft}</span>
              <span>{copy.footerRight}</span>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
