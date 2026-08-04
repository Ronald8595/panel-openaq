import { useState } from 'react'

function App() {
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-badge">AQ</div>
          <div className="logo-text">
            <span className="logo-title">OpenAQ</span>
            <span className="logo-sub">Panel ambiental</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#" className="nav-link active">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Estaciones</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Cards</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <span className="footer-line footer-inst">Aplicaciones Telemáticas</span>
          <span className="footer-line">UTEQ</span>
        </div>
      </aside>

      <div className="main-wrapper">
        <header className="topbar">
          <div>
            <h1 className="topbar-title">Panel de calidad del aire</h1>
            <p className="topbar-sub">Información obtenida desde la API OpenAQ v3</p>
          </div>
          <div className="topbar-user">
            <div className="user-avatar">RA</div>
            <div className="user-info">
              <span className="user-name">Administrador</span>
              <span className="user-role">Estudiante</span>
            </div>
          </div>
        </header>

        <main className="content">
          <section className="hero-banner">
            <div>
              <span className="hero-eyebrow">Panel principal</span>
              <h2 className="hero-heading">Monitoreo ambiental en tiempo real</h2>
              <p className="hero-desc">
                Explora el estado general de las estaciones registradas y revisa los
                indicadores clave del sistema OpenAQ.
              </p>
            </div>
            <div className="hero-badge-wrap">
              <span className="hero-badge">— estaciones activas</span>
            </div>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon stat-icon--pin">📍</div>
              <div className="stat-body">
                <span className="stat-label">Total de estaciones</span>
                <span className="stat-value">—</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon--sensor">🔬</div>
              <div className="stat-body">
                <span className="stat-label">Total de sensores</span>
                <span className="stat-value">—</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon--building">🏢</div>
              <div className="stat-body">
                <span className="stat-label">Estaciones fijas</span>
                <span className="stat-value">—</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon--car">🚗</div>
              <div className="stat-body">
                <span className="stat-label">Estaciones móviles</span>
                <span className="stat-value">—</span>
              </div>
            </div>
          </section>

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
                  <tr className="empty-row">
                    <td colSpan="7" className="empty-cell">
                      <div className="empty-state">
                        <span className="empty-icon">📡</span>
                        <p>Conecta la API para ver las estaciones</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

      {modalAbierto && (
        <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalAbierto(false)}>✕</button>
            <div className="modal-body">
              <p>Aquí verás el detalle de la estación cuando conectes la API.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App