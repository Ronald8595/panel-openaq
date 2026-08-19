import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="content">
          <HomePage />
        </main>
      </div>
    </>
  )
}

export default App