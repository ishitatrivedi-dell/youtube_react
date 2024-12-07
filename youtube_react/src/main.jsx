import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'

import Cards from './components/Cards.jsx'
import Sidebar from './components/Sidebar.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   
  
    <div className='main'>
    <Sidebar/>
<div className='foralingment'>
<div>
<Navbar/>
<Cards/>
</div>


</div>
    </div>
  </StrictMode>,
)
