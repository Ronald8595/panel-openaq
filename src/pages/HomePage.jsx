import { useState, useEffect } from 'react'
import { fetchLocations } from '../services/openaqApi'
import { SummaryCards } from '../components/SummaryCards'
import { LocationsTable } from '../components/LocationsTable'

export function HomePage() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [stations, setStations] = useState([])
  const [stats, setStats] = useState({
    totalStations: 0,
    totalSensors: 0,
    fixed: 0,
    mobile: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)
        const locations = await fetchLocations(15)

        let totalSensors = 0
        let fixed = 0
        let mobile = 0

        locations.forEach((loc) => {
          totalSensors += loc.sensors ? loc.sensors.length : 0
          if (loc.isMobile === true || loc.locationType === 'mobile') {
            mobile++
          } else {
            fixed++
          }
        })

        setStats({
          totalStations: locations.length,
          totalSensors,
          fixed,
          mobile,
        })
        setStations(locations)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <>
      <section className="hero-banner">
        <div>
          <span className="hero-eyebrow">Panel principal</span>
          <h2 className="hero-heading">Monitoreo ambiental en tiempo real</h2>
          <p className="hero-desc">
            Explora el estado general de las estaciones registradas y revisa los indicadores clave del sistema OpenAQ.
          </p>
        </div>
        <div className="hero-badge-wrap">
          <span className="hero-badge">
            {loading ? 'Cargando...' : `${stats.totalStations} estaciones activas`}
          </span>
        </div>
      </section>

      <SummaryCards stats={stats} loading={loading} />

      <section className="stations-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Resumen de estaciones</h2>
            <p className="section-sub">Vista rápida de las estaciones más relevantes registradas.</p>
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
                onSelectStation={() => setModalAbierto(true)}
              />
            </tbody>
          </table>
        </div>
      </section>

      {modalAbierto && (
        <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalAbierto(false)}>✕</button>
            <div className="modal-body">
              <p>Aquí verás el detalle de la estación seleccionada.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}