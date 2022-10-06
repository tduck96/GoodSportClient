import { Outlet } from 'react-router-dom'
import Locations from '../Filters/Locations'
import Sports from '../Filters/Sports'

const HandlerLayout = () => {
    return (
      <main className = "App">
        <Sports />
        <Locations />
        
          <Outlet />
      </main>
    )
  }
  
  export default HandlerLayout
  