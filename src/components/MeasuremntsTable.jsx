export function MeasurementsTable({ measurements = [] }) {
  return (
    <table className="stations-table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Valor</th>
          <th>Unidad</th>
        </tr>
      </thead>
      <tbody>
        {measurements.map((m, idx) => (
          <tr key={idx}>
            <td>{m.period?.datetimeFrom?.utc || '—'}</td>
            <td>{m.value}</td>
            <td>{m.parameter?.units || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}