export type Language = 'el' | 'en'

export type DashboardView = 'home' | 'overview' | 'legislation' | 'safety-file' | 'news' | 'settings' | 'about' | 'contact'

export type IconName =
  | 'actions'
  | 'alert'
  | 'bell'
  | 'calendar'
  | 'check'
  | 'close'
  | 'dashboard'
  | 'documents'
  | 'incidents'
  | 'info'
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

export type DashboardNavItem = [IconName, string, string?]

export type DashboardMetric = {
  label: string
  value: string
  trend: string
  note: string
  icon: IconName
  tone: 'good' | 'warn'
}

export type DashboardAlert = {
  title: string
  detail: string
  status: string
  level: 'high' | 'medium'
}

export type DashboardTask = {
  day: string
  month: string
  title: string
  detail: string
  status: string
}

export type DashboardActivity = {
  title: string
  detail: string
  time: string
  icon: IconName
}

export type DashboardQuickAction = {
  title: string
  detail: string
  icon: IconName
}

export type DashboardFooterLink = {
  label: string
  href: string
}

export type DashboardContent = {
  appName: string
  appTagline: string
  navigation: string
  nav: DashboardNavItem[]
  aboutApp: string
  search: string
  profileName: string
  profileInitials: string
  profileRole: string
  eyebrow: string
  title: string
  subtitle: string
  demo: string
  newRecord: string
  metrics: DashboardMetric[]
  alertsTitle: string
  alertsSubtitle: string
  viewAll: string
  alerts: DashboardAlert[]
  tasksTitle: string
  tasksSubtitle: string
  tasks: DashboardTask[]
  activityTitle: string
  activitySubtitle: string
  activity: DashboardActivity[]
  quickTitle: string
  quickSubtitle: string
  quickActions: DashboardQuickAction[]
  modulesTitle: string
  modulesSubtitle: string
  modulesStatus: string
  footerCredit: string
  footerLinksLabel: string
  footerLinks: DashboardFooterLink[]
  closeMenu: string
  openMenu: string
  notifications: string
  userMenu: string
}