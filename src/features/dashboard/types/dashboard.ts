export type Language = 'el' | 'en'

export type DashboardView =
  | 'home'
  | 'overview'
  | 'coverage'
  | 'risks-and-measures'
  | 'training-and-preparedness'
  | 'compliance-and-governance'
  | 'reports'
  | 'about'
  | 'settings'

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

export type NavigationCategory = 'primary' | 'supporting'

export type NavigationItem = {
  id: DashboardView
  icon: IconName
  category: NavigationCategory
  label: string
  description?: string
  path: string
}

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
}

export type DashboardContent = {
  appName: string
  appTagline: string
  navigation: string
  nav: Record<DashboardView, Omit<NavigationItem, 'id' | 'category' | 'path'>>
  aboutApp: string
  search: string
  searchUnavailable: string
  profileName: string
  profileInitials: string
  profileRole: string
  profileUnavailable: string
  eyebrow: string
  title: string
  subtitle: string
  demo: string
  newRecord: string
  unavailableAction: string
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
  notificationsUnavailable: string
  userMenu: string
  underDevelopment: string
  footerUnavailable: string
}
