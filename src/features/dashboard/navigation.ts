import type { DashboardContent, DashboardView, IconName, Language, NavigationCategory, NavigationItem } from './types/dashboard'

type NavigationDefinition = {
  id: DashboardView
  icon: IconName
  category: NavigationCategory
  path: string
}

export const navigationDefinitions = [
  { id: 'overview', icon: 'dashboard', category: 'primary', path: '/overview' },
  { id: 'coverage', icon: 'documents', category: 'primary', path: '/coverage' },
  { id: 'risks-and-measures', icon: 'risk', category: 'primary', path: '/risks-and-measures' },
  { id: 'training-and-preparedness', icon: 'training', category: 'primary', path: '/training-and-preparedness' },
  { id: 'compliance-and-governance', icon: 'shield', category: 'primary', path: '/compliance-and-governance' },
  { id: 'reports', icon: 'reports', category: 'primary', path: '/reports' },
  { id: 'about', icon: 'info', category: 'supporting', path: '/about' },
  { id: 'settings', icon: 'settings', category: 'supporting', path: '/settings' },
] as const satisfies readonly NavigationDefinition[]

export const routeViewMap: Readonly<Record<string, DashboardView>> = {
  '/': 'home',
  '/overview': 'overview',
  '/coverage': 'coverage',
  '/risks-and-measures': 'risks-and-measures',
  '/training-and-preparedness': 'training-and-preparedness',
  '/compliance-and-governance': 'compliance-and-governance',
  '/reports': 'reports',
  '/about': 'about',
  '/settings': 'settings',
}

export const primaryNavigationIds = navigationDefinitions
  .filter((item) => item.category === 'primary')
  .map((item) => item.id)

export function getNavigationItems(copy: DashboardContent): NavigationItem[] {
  return navigationDefinitions.map((definition) => ({
    ...definition,
    label: copy.nav[definition.id].label,
    description: copy.nav[definition.id].description,
  }))
}

export function getNavigationIdsForLanguage(language: Language, content: Record<Language, DashboardContent>) {
  return primaryNavigationIds.filter((id) => content[language].nav[id] !== undefined)
}
