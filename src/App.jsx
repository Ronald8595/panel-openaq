import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { LocationsPage } from './pages/LocationsPage'
import { LocationSensorsPage } from './pages/LocationSensorsPage'
import { SensorMeasurementsPage } from './pages/SensorMeasurementsPage'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:locationId/sensors" element={<LocationSensorsPage />} />
            <Route path="/cards" element={<SensorMeasurementsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App