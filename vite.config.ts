import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

type PackageJson = {
  version: string
}

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as PackageJson
const APP_VERSION = packageJson.version

function getCommitRef() {
  const githubSha = process.env.GITHUB_SHA?.trim()
  if (githubSha) return githubSha.slice(0, 7)

  try {
    return execSync('git rev-parse --short=7 HEAD', { encoding: 'utf8' }).trim()
  } catch {
    return 'local'
  }
}

const buildLabel = `v${APP_VERSION}_${getCommitRef()}`

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_BUILD_LABEL__: JSON.stringify(buildLabel),
  },
})
