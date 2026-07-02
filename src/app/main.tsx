import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/styles/global.css'
import App from './App.tsx'

const root = document.getElementById('root')

if (root === null) {
  throw new Error('Health and Safety App root element #root was not found.')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

