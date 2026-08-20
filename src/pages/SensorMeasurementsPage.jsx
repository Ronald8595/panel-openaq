import { MeasurementsTable } from '../components/MeasuremntsTable.jsx'

export function SensorMeasurementsPage() {
  // Datos de ejemplo para prueba
  const sampleMeasurements = [
    { period: { datetimeFrom: { utc: '2026-08-19 18:00' } }, value: 12.5, parameter: { units: 'µg/m³' } },
    { period: { datetimeFrom: { utc: '2026-08-19 19:00' } }, value: 14.1, parameter: { units: 'µg/m³' } },
  ]

  return (
    <section className="stations-section" style={{ marginTop: '20px' }}>
      <div className="section-header">
        <div>
          <h2 className="section-title">Mediciones de Sensores (Cards/Histórico)</h2>
          <p className="section-sub">Lecturas de parámetros ambientales de la red de sensores.</p>
        </div>
      </div>

      <div className="table-wrapper" style={{ marginTop: '15px' }}>
        <MeasurementsTable measurements={sampleMeasurements} />
      </div>
    </section>
  )
}