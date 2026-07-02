import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axe from 'axe-core'
import { afterEach, describe, expect, it, beforeEach } from 'vitest'
import App from './App'
import { dashboardTranslations } from '../features/dashboard/data/dashboardContent'
import { getNavigationIdsForLanguage, getNavigationItems, primaryNavigationIds } from '../features/dashboard/navigation'

function renderApp(route = '/') {
  window.history.pushState({}, '', route)
  return render(<App />)
}

function useMobileViewport() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: query.includes('max-width'),
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => false,
    }),
  })
}

function useDesktopViewport() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: !query.includes('max-width'),
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => false,
    }),
  })
}

describe('App', () => {
  beforeEach(() => {
    useDesktopViewport()
    window.localStorage.clear()
    document.documentElement.lang = ''
  })

  afterEach(() => {
    cleanup()
  })

  it('renders without error and starts in Greek', () => {
    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Καλώς ήρθατε' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('el')
  })

  it('changes language, document lang and localStorage', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: 'English' }))

    expect(screen.getByRole('heading', { level: 1, name: 'Welcome' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
    expect(window.localStorage.getItem('hs-language')).toBe('en')
  })

  it('restores saved language on startup', () => {
    window.localStorage.setItem('hs-language', 'en')

    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Welcome' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })

  it('routes primary navigation items and marks the active page', async () => {
    const user = userEvent.setup()
    renderApp('/')

    await user.click(screen.getByRole('link', { name: 'Κάλυψη' }))

    expect(window.location.pathname).toBe('/coverage')
    expect(screen.getByRole('heading', { level: 1, name: 'Κάλυψη' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Κάλυψη' })).toHaveAttribute('aria-current', 'page')
  })

  it('supports Back and Forward navigation', async () => {
    const user = userEvent.setup()
    renderApp('/')

    await user.click(screen.getByRole('link', { name: 'Κάλυψη' }))
    await user.click(screen.getByRole('link', { name: 'Αναφορές' }))
    window.history.back()

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: 'Κάλυψη' })).toBeInTheDocument()
    })

    window.history.forward()

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: 'Αναφορές' })).toBeInTheDocument()
    })
  })

  it('opens and closes the mobile sidebar with focus restoration', async () => {
    const user = userEvent.setup()
    useMobileViewport()
    renderApp('/')

    const menuButton = screen.getByRole('button', { name: 'Άνοιγμα μενού' })
    await user.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Επισκόπηση' })).toHaveFocus()

    await user.keyboard('{Escape}')

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveFocus()
  })

  it('closes the mobile sidebar from overlay and restores focus', async () => {
    const user = userEvent.setup()
    useMobileViewport()
    renderApp('/')

    const menuButton = screen.getByRole('button', { name: 'Άνοιγμα μενού' })
    await user.click(menuButton)
    await user.click(screen.getAllByRole('button', { name: 'Κλείσιμο μενού' })[0] ?? document.body)

    expect(menuButton).toHaveFocus()
  })

  it('does not present placeholder controls as functional', () => {
    renderApp('/overview')

    expect(screen.getByRole('searchbox', { name: 'Αναζήτηση στην εφαρμογή' })).toBeDisabled()
    expect(screen.getByRole('button', { name: /Ειδοποιήσεις/ })).toBeDisabled()
    expect(screen.getByRole('button', { name: /Νέα ενέργεια/ })).toBeDisabled()
    expect(screen.getAllByRole('button', { name: /Υπό ανάπτυξη/ }).length).toBeGreaterThan(0)
  })

  it('keeps navigation stable by ID, not array position', () => {
    const greekIds = getNavigationIdsForLanguage('el', dashboardTranslations)
    const englishIds = getNavigationIdsForLanguage('en', dashboardTranslations)

    expect(greekIds).toEqual(primaryNavigationIds)
    expect(englishIds).toEqual(primaryNavigationIds)
    expect(getNavigationItems(dashboardTranslations.en).map((item) => item.id)).toEqual([
      'overview',
      'coverage',
      'risks-and-measures',
      'training-and-preparedness',
      'compliance-and-governance',
      'reports',
      'about',
      'settings',
    ])
  })

  it('has no automated accessibility smoke-test violations on the home route', async () => {
    renderApp('/')

    const results = await axe.run(document.body, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })

    expect(results.violations).toEqual([])
  }, 10_000)
})
