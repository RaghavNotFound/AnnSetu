import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Farmers from './pages/Farmers'
import Inventory from './pages/Inventory'
import Loading from './pages/Loading'
import Dispatch from './pages/Dispatch'
import Billing from './pages/Billing'
import Reports from './pages/Reports'
import IoTMonitoring from './pages/IoTMonitoring'
import Settings from './pages/Settings'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/iot" element={<IoTMonitoring />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
