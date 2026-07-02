import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const distDir = fileURLToPath(new URL('../dist/', import.meta.url))
const indexPath = join(distDir, 'index.html')
const fallbackPath = join(distDir, '404.html')

if (!existsSync(indexPath)) {
  throw new Error('Cannot create GitHub Pages SPA fallback because dist/index.html does not exist.')
}

copyFileSync(indexPath, fallbackPath)
