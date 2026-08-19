export function SummaryCards({ stats, loading }) {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon stat-icon--pin">📍</div>
        <div className="stat-body">
          <span className="stat-label">Total de estaciones</span>
          <span className="stat-value">{loading ? '…' : stats.totalStations}</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon stat-icon--sensor">🔬</div>
        <div className="stat-body">
          <span className="stat-label">Total de sensores</span>
          <span className="stat-value">{loading ? '…' : stats.totalSensors}</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon stat-icon--building">🏢</div>
        <div className="stat-body">
          <span className="stat-label">Estaciones fijas</span>
          <span className="stat-value">{loading ? '…' : stats.fixed}</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon stat-icon--car">🚗</div>
        <div className="stat-body">
          <span className="stat-label">Estaciones móviles</span>
          <span className="stat-value">{loading ? '…' : stats.mobile}</span>
        </div>
      </div>
    </section>
  )
}