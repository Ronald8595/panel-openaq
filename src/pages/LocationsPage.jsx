import { useState, useEffect } from 'react'
import { fetchLocations } from '../services/openaqApi'
import { LocationsTable } from '../components/LocationsTable'
import { useNavigate } from 'react-router-dom'

export function LocationsPage() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loadLocations = async () => {
      try {
        setLoading(true)
        const data = await fetchLocations(30)
        setStations(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadLocations()
  }, [])

  const handleSelectStation = (station) => {
    // Redirige a la página de sensores de la estación seleccionada
    navigate(`/locations/${station.id}/sensors`, { state: { station } })
  }

  return (
    <section className="stations-section" style={{ marginTop: '20px' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">Listado de Estaciones de Monitoreo</h2>
          <p className="section-sub">Selecciona una estación para ver sus sensores detallados.</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="stations-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Estación</th>
              <th>País</th>
              <th>Localidad</th>
              <th>Sensores</th>
              <th>Coordenadas</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            <LocationsTable
              stations={stations}
              loading={loading}
              error={error}
              onSelectStation={handleSelectStation}
            />
          </tbody>
        </table>
      </div>
    </section>
  )
}