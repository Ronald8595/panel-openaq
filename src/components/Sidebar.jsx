export function Sidebar() {
  return (
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
  )
}