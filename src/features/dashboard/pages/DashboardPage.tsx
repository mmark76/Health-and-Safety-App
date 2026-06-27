import { useEffect, useRef, useState } from 'react'
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
    appTagline: 'Ασφάλεια και Υγεία στην Εργασία',
    navigation: 'Πλοήγηση',
    nav: [
      ['dashboard', 'Επισκόπηση'],
      ['documents', 'Κάλυψη', 'Άνθρωποι, χώροι, δραστηριότητες και κενά κάλυψης'],
      ['risk', 'Κίνδυνοι και Μέτρα', 'ΓΕΚ, κίνδυνοι, μέτρα και επανεκτιμήσεις'],
      ['training', 'Εκπαίδευση και Ετοιμότητα', 'Εκπαιδεύσεις, πιστοποιήσεις και επιχειρησιακή ετοιμότητα'],
      ['shield', 'Συμμόρφωση και Διακυβέρνηση', 'Απαιτήσεις, ευθύνες και διοικητική εποπτεία'],
      ['reports', 'Αναφορές', 'Συγκεντρωτική πληροφόρηση από τα αρχεία προέλευσης'],
      ['settings', 'Ρυθμίσεις'],
    ] as [IconName, string, string?][],
    search: 'Αναζήτηση σε κάλυψη, εκτιμήσεις, μέτρα, εκπαίδευση και απαιτήσεις…',
    profileName: 'Δοκιμαστικός Χρήστης',
    profileInitials: 'ΔΧ',
    profileRole: 'Λειτουργός Ασφάλειας και Υγείας',
    eyebrow: 'Επισκόπηση Ασφάλειας και Υγείας στην Εργασία',
    title: 'Καλημέρα',
    subtitle: 'Παρακολούθησε κενά κάλυψης, ενεργές εκτιμήσεις, υψηλούς κινδύνους, εκπρόθεσμα μέτρα και θέματα που απαιτούν απόφαση Διεύθυνσης.',
    demo: 'Ενδεικτικά δεδομένα',
    newRecord: 'Νέα ενέργεια',
    metrics: [
      { label: 'Κενά κάλυψης', value: '6', trend: '2 κρίσιμα', note: 'Άτομα, χώροι ή δραστηριότητες χωρίς πλήρη συσχέτιση', icon: 'documents', tone: 'warn' },
      { label: 'Ενεργές εκτιμήσεις', value: '12', trend: '4 προς ανασκόπηση', note: 'Γραπτές εκτιμήσεις σε εξέλιξη ή αναθεώρηση', icon: 'risk', tone: 'warn' },
      { label: 'Εκπρόθεσμα μέτρα', value: '3', trend: '18 ανοικτά', note: 'Μέτρα με ανάθεση, τεκμήρια και επαλήθευση', icon: 'actions', tone: 'warn' },
      { label: 'Θέματα Διεύθυνσης', value: '5', trend: '2 σήμερα', note: 'Υψηλοί κίνδυνοι, απαιτήσεις ή αποφάσεις σε εκκρεμότητα', icon: 'shield', tone: 'good' },
    ],
    alertsTitle: 'Σημαντικές ειδοποιήσεις',
    alertsSubtitle: 'Σύνδεση από την επισκόπηση προς τα αρχεία προέλευσης',
    viewAll: 'Προβολή όλων',
    alerts: [
      { title: 'Κενό κάλυψης σε γραφειακό χώρο', detail: 'Κάλυψη · Αίθουσα συσκέψεων χωρίς συνδεδεμένη δραστηριότητα', status: 'Επείγον', level: 'high' },
      { title: 'Υψηλός κίνδυνος προς απόφαση', detail: 'Κίνδυνοι και Μέτρα · Φραγμένη έξοδος κινδύνου', status: 'Διεύθυνση', level: 'high' },
      { title: 'Εκπρόθεσμη απαίτηση επανεξέτασης', detail: 'Συμμόρφωση και Διακυβέρνηση · Εφαρμογή οδηγίας πυρασφάλειας', status: 'Εκκρεμεί', level: 'medium' },
    ],
    tasksTitle: 'Επανεξετάσεις και προθεσμίες',
    tasksSubtitle: 'Επόμενα σημεία ελέγχου από τα αρχεία των ενοτήτων',
    tasks: [
      { day: '28', month: 'ΙΟΥΝ', title: 'Ανασκόπηση γραπτής εκτίμησης κινδύνου', detail: 'Κίνδυνοι και Μέτρα · Χώρος εξυπηρέτησης κοινού', status: '09:00' },
      { day: '30', month: 'ΙΟΥΝ', title: 'Έλεγχος ετοιμότητας εκκένωσης', detail: 'Εκπαίδευση και Ετοιμότητα · Κεντρική είσοδος', status: '10:30' },
      { day: '02', month: 'ΙΟΥΛ', title: 'Περιοδική αναφορά Διεύθυνσης', detail: 'Αναφορές · Κενά κάλυψης και εκπρόθεσμα μέτρα', status: '11:00' },
    ],
    activityTitle: 'Πρόσφατη δραστηριότητα',
    activitySubtitle: 'Ενημερώσεις από τα αρχεία προέλευσης',
    activity: [
      { title: 'Ενημερώθηκε σχέση κάλυψης', detail: 'Κάλυψη · Ομάδα επισκεπτών συνδέθηκε με χώρο υποδοχής', time: 'Πριν 18 λεπτά', icon: 'documents' },
      { title: 'Ανατέθηκε πρόσθετο μέτρο', detail: 'Κίνδυνοι και Μέτρα · Διατήρηση ελεύθερης εξόδου κινδύνου', time: 'Πριν 1 ώρα', icon: 'actions' },
      { title: 'Καταγράφηκε συμμετοχή εκπαίδευσης', detail: 'Εκπαίδευση και Ετοιμότητα · Ενημέρωση εκκένωσης', time: 'Πριν 3 ώρες', icon: 'training' },
      { title: 'Καταχωρίστηκε απόφαση Διεύθυνσης', detail: 'Συμμόρφωση και Διακυβέρνηση · Προτεραιοποίηση μέτρων', time: 'Χθες, 16:42', icon: 'shield' },
    ],
    quickTitle: 'Γρήγορες ενέργειες',
    quickSubtitle: 'Ενέργειες εμφανίζονται ενδεικτικά και θα ενεργοποιούνται όπου επιτρέπεται',
    quickActions: [
      { title: 'Προσθήκη κάλυψης', detail: 'Σύνδεση ατόμου ή ομάδας με χώρο, δραστηριότητα και συνθήκη', icon: 'documents' },
      { title: 'Έναρξη εκτίμησης κινδύνου', detail: 'Άνοιγμα γραπτής εκτίμησης από εξουσιοδοτημένη εγγραφή', icon: 'risk' },
      { title: 'Αναφορά κενού ή κινδύνου', detail: 'Καταχώριση κινδύνου ή κενού κάλυψης για αξιολόγηση', icon: 'alert' },
      { title: 'Δημιουργία μέτρου', detail: 'Ανάθεση πρόσθετου ή διορθωτικού μέτρου με τεκμήρια', icon: 'actions' },
    ],
    modulesTitle: 'Κύριες ενότητες',
    modulesSubtitle: 'Πρόσβαση στις βασικές λειτουργίες του συστήματος',
    modulesStatus: 'Πηγή αρμοδιότητας',
    footerLeft: 'Περιβάλλον ανάπτυξης · Τα δεδομένα είναι ενδεικτικά',
    footerRight: 'Τελευταία ενημέρωση: σήμερα, 11:30',
    closeMenu: 'Κλείσιμο μενού',
    openMenu: 'Άνοιγμα μενού',
    notifications: 'Ειδοποιήσεις',
    userMenu: 'Μενού χρήστη',
  },
  en: {
    appName: 'Health and Safety App',
    appTagline: 'Safety and Health at Work',
    navigation: 'Navigation',
    nav: [
      ['dashboard', 'Overview'],
      ['documents', 'Coverage', 'People, locations, activities and coverage gaps'],
      ['risk', 'Risks and Measures', 'Risk assessments, risks, measures and reassessments'],
      ['training', 'Training and Preparedness', 'Training, certifications and operational preparedness'],
      ['shield', 'Compliance and Governance', 'Requirements, responsibilities and Management oversight'],
      ['reports', 'Reports', 'Aggregated information from authoritative source records'],
      ['settings', 'Settings'],
    ] as [IconName, string, string?][],
    search: 'Search coverage, assessments, measures, training and requirements…',
    profileName: 'Demo User',
    profileInitials: 'DU',
    profileRole: 'Safety and Health Officer',
    eyebrow: 'Safety and Health at Work overview',
    title: 'Good morning',
    subtitle: 'Monitor coverage gaps, active assessments, high risks, overdue measures and matters requiring Management decision.',
    demo: 'Demonstration data',
    newRecord: 'New action',
    metrics: [
      { label: 'Coverage gaps', value: '6', trend: '2 critical', note: 'People, locations or activities without full linkage', icon: 'documents', tone: 'warn' },
      { label: 'Active assessments', value: '12', trend: '4 due review', note: 'Written assessments in progress or reassessment', icon: 'risk', tone: 'warn' },
      { label: 'Overdue measures', value: '3', trend: '18 open', note: 'Measures with assignment, evidence and verification', icon: 'actions', tone: 'warn' },
      { label: 'Management matters', value: '5', trend: '2 today', note: 'High risks, requirements or decisions pending', icon: 'shield', tone: 'good' },
    ],
    alertsTitle: 'Important alerts',
    alertsSubtitle: 'Overview links to authoritative source records',
    viewAll: 'View all',
    alerts: [
      { title: 'Coverage gap in office area', detail: 'Coverage · Meeting room has no linked work activity', status: 'Urgent', level: 'high' },
      { title: 'High risk awaiting decision', detail: 'Risks and Measures · Obstructed emergency exit', status: 'Management', level: 'high' },
      { title: 'Requirement review overdue', detail: 'Compliance and Governance · Fire-safety guidance applicability', status: 'Pending', level: 'medium' },
    ],
    tasksTitle: 'Reviews and deadlines',
    tasksSubtitle: 'Next checkpoints from authoritative module records',
    tasks: [
      { day: '28', month: 'JUN', title: 'Written risk-assessment review', detail: 'Risks and Measures · Public service counter area', status: '09:00' },
      { day: '30', month: 'JUN', title: 'Evacuation preparedness check', detail: 'Training and Preparedness · Main entrance', status: '10:30' },
      { day: '02', month: 'JUL', title: 'Periodic Management report', detail: 'Reports · Coverage gaps and overdue measures', status: '11:00' },
    ],
    activityTitle: 'Recent activity',
    activitySubtitle: 'Updates from authoritative source records',
    activity: [
      { title: 'Coverage relationship updated', detail: 'Coverage · Visitor group linked to reception area', time: '18 minutes ago', icon: 'documents' },
      { title: 'Additional measure assigned', detail: 'Risks and Measures · Keep emergency exit clear', time: '1 hour ago', icon: 'actions' },
      { title: 'Training participation recorded', detail: 'Training and Preparedness · Evacuation briefing', time: '3 hours ago', icon: 'training' },
      { title: 'Management decision recorded', detail: 'Compliance and Governance · Measure prioritization', time: 'Yesterday, 16:42', icon: 'shield' },
    ],
    quickTitle: 'Quick actions',
    quickSubtitle: 'Actions are illustrative and will appear only where permitted',
    quickActions: [
      { title: 'Add coverage record', detail: 'Link a person or group to location, activity and condition', icon: 'documents' },
      { title: 'Start risk assessment', detail: 'Open a written assessment from an authorized record', icon: 'risk' },
      { title: 'Report a gap or hazard', detail: 'Record a hazard or coverage gap for assessment', icon: 'alert' },
      { title: 'Create measure', detail: 'Assign an additional or corrective measure with evidence', icon: 'actions' },
    ],
    modulesTitle: 'Main areas',
    modulesSubtitle: 'Access the system’s main functions',
    modulesStatus: 'Authoritative area',
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
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('hs-language', language)
  }, [language])

  useEffect(() => {
    if (!sidebarOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      setSidebarOpen(false)
      mobileMenuButtonRef.current?.focus()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [sidebarOpen])

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

        <aside className={`dashboard-sidebar${sidebarOpen ? ' is-open' : ''}`} id="dashboard-sidebar">
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
                aria-current={index === 0 ? 'page' : undefined}
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
                aria-pressed={language === 'el'}
                className={language === 'el' ? 'is-active' : ''}
                onClick={() => switchLanguage('el')}
                type="button"
              >
                Ελληνικά
              </button>
              <button
                aria-pressed={language === 'en'}
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
              aria-controls="dashboard-sidebar"
              aria-expanded={sidebarOpen}
              aria-label={copy.openMenu}
              className="icon-button mobile-menu-button"
              onClick={() => setSidebarOpen(true)}
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
