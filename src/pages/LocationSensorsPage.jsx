import { useLocation, useParams, Link } from 'react'
import { SensorsTable } from '../components/SensorsTable'

export function LocationSensorsPage() {
  const { locationId } = useParams()
  const locationState = useLocation().state
  const station = locationState?.station

  return (
    <section className="stations-section" style={{ marginTop: '20px' }}>
      <div className="section-header">
        <div>
          <Link to="/locations" style={{ color: '#0ea5e9', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Volver a estaciones
          </Link>
          <h2 className="section-title" style={{ marginTop: '10px' }}>
            Sensores de: {station?.name || `Estación #${locationId}`}
          </h2>
          <p className="section-sub">Parámetros ambientales registrados por esta estación.</p>
        </div>
      </div>

      <div className="table-wrapper" style={{ marginTop: '15px' }}>
        {station?.sensors && station.sensors.length > 0 ? (
          <SensorsTable sensors={station.sensors} />
        ) : (
          <p style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>
            No hay información detallada de sensores para esta estación.
          </p>
        )}
      </div>
    </section>
  )
}