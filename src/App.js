import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Nav from './Components/Navbar/Navbar.jsx'
import Shops from './Components/Shops/Shops.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <header className="app-header">
          <Nav />
        </header>
        <Shops />
      </div>
    </BrowserRouter>
  )
}

export default App
