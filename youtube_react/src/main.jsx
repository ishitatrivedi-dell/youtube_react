import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Side from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Cards.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='navbar1' style={{display : "flex" , flexDirection : "row" }}>
      <Side />
      <div style={{backgroundColor: "black"}}>
        <Navbar />
        <Cards />
      </div>
    </div>
   
   
  </StrictMode>,
)
