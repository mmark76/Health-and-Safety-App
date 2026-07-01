import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const APP_VERSION = '0.1.0'

function getCommitRef() {
  const githubSha = process.env.GITHUB_SHA?.trim()
  if (githubSha) return githubSha.slice(0, 7)

  try {
    return execSync('git rev-parse --short=7 HEAD', { encoding: 'utf8' }).trim()
  } catch {
    return 'local'
  }
}

function getCyprusBuildTimestamp() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Nicosia',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? '00'

  return `${value('day')}${value('month')}${value('year')}_${value('hour')}${value('minute')}`
}

const buildLabel = `v${APP_VERSION}_${getCyprusBuildTimestamp()}_${getCommitRef()}`

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_BUILD_LABEL__: JSON.stringify(buildLabel),
  },
})