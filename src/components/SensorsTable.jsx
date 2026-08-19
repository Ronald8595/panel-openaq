export function SensorsTable({ sensors = [] }) {
  return (
    <table className="stations-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre / Parámetro</th>
          <th>Unidad</th>
        </tr>
      </thead>
      <tbody>
        {sensors.map((sensor) => (
          <tr key={sensor.id}>
            <td>{sensor.id}</td>
            <td>{sensor.name || sensor.parameter?.name || 'Sensor'}</td>
            <td>{sensor.parameter?.units || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}