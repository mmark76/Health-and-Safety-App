import { BrowserRouter } from 'react-router-dom'
import { DashboardPage } from '../features/dashboard/pages/DashboardPage'

function App() {
  return (
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  )
}

export default App
