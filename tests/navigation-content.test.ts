import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const sidebarSource = readFileSync('src/features/dashboard/components/DashboardSidebar.tsx', 'utf8')
const appSectionSource = readFileSync('src/features/dashboard/pages/AppSectionPage.tsx', 'utf8')
const dashboardContentSource = readFileSync('src/features/dashboard/data/dashboardContent.ts', 'utf8')

test('sidebar preserves approved supporting navigation order and labels', () => {
  const usefulPhones = sidebarSource.indexOf("selectView('contact')")
  const about = sidebarSource.indexOf("selectView('about')")
  const settings = sidebarSource.indexOf("selectView('settings')")

  assert.ok(usefulPhones > -1)
  assert.ok(about > usefulPhones)
  assert.ok(settings > about)
  assert.equal(sidebarSource.includes('Contact'), false)
  assert.equal(sidebarSource.includes('Language /'), true)
})

test('landing card hierarchy follows ADR-005 labels', () => {
  assert.match(appSectionSource, /European Union/)
  assert.match(appSectionSource, /Cyprus legislation/)
  assert.match(appSectionSource, /Organisation and responsibilities/)
  assert.match(appSectionSource, /General Risk Assessment/)
  assert.match(appSectionSource, /Legislation, Compliance and Governance/)
  assert.match(appSectionSource, /Useful telephone numbers/)
  assert.equal(appSectionSource.includes('Thematic search'), false)
  assert.equal(appSectionSource.includes('Θεματική αναζήτηση'), false)
})

test('global search remains a top-bar label and not a legislation card', () => {
  assert.match(dashboardContentSource, /Search across the application/)
  assert.match(dashboardContentSource, /Αναζήτηση σε όλη την εφαρμογή/)
  assert.equal(appSectionSource.includes("icon: 'search'"), false)
})
