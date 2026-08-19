export function LocationsTable({ stations, loading, error, onSelectStation }) {
  if (loading) {
    return (
      <tr className="empty-row">
        <td colSpan="7" className="empty-cell">
          <div className="empty-state">
            <span className="empty-icon">⏳</span>
            <p>Cargando estaciones...</p>
          </div>
        </td>
      </tr>
    )
  }

  if (error) {
    return (
      <tr className="empty-row">
        <td colSpan="7" className="empty-cell">
          <div className="empty-state">
            <span className="empty-icon">❌</span>
            <p>Error al cargar: {error}</p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Verifica tu API Key o conexión.</p>
          </div>
        </td>
      </tr>
    )
  }

  if (stations.length === 0) {
    return (
      <tr className="empty-row">
        <td colSpan="7" className="empty-cell">
          <div className="empty-state">
            <span className="empty-icon">📡</span>
            <p>No se encontraron estaciones.</p>
          </div>
        </td>
      </tr>
    )
  }

  return stations.map((station) => {
    const sensorCount = station.sensors ? station.sensors.length : 0
    const isMobile = station.isMobile === true || station.locationType === 'mobile'
    const typeLabel = isMobile ? 'Móvil' : 'Fija'
    const badgeClass = isMobile ? 'badge--movil' : 'badge--fija'
    const countryName = typeof station.country === 'object' ? station.country?.name || 'United States' : station.country || 'United States'
    const coords = station.coordinates
      ? `${station.coordinates.latitude?.toFixed(4) || '?'}, ${station.coordinates.longitude?.toFixed(4) || '?'}`
      : '—'

    return (
      <tr key={station.id}>
        <td>{station.id}</td>
        <td className="col-name">
          <a href="#" onClick={(e) => { e.preventDefault(); onSelectStation(station) }}>
            {station.name || 'Sin nombre'}
          </a>
        </td>
        <td>{countryName}</td>
        <td className="col-muted">{station.locality || 'No disponible'}</td>
        <td>{sensorCount}</td>
        <td className="col-coords">{coords}</td>
        <td>
          <span className={`badge ${badgeClass}`}>{typeLabel}</span>
        </td>
      </tr>
    )
  })
}