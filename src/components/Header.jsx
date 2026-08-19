export function Header() {
  return (
    <header className="topbar">
      <div>
        <h1 className="topbar-title">Panel de calidad del aire</h1>
        <p className="topbar-sub">Información obtenida desde la API OpenAQ v3</p>
      </div>
      <div className="topbar-user">
        <div className="user-avatar">CZ</div>
        <div className="user-info">
          <span className="user-name">Administrador</span>
          <span className="user-role">Docente</span>
        </div>
      </div>
    </header>
  )
}