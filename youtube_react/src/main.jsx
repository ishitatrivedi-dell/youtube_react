import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Videosection from './components/Cards.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   
  
    <div className='main'>
    <App2 />
<div className='foralingment'>
<div>
<Navbar/>
<Videosection />
</div>


</div>
    </div>
  </StrictMode>,
)
