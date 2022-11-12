import { Outlet } from 'react-router-dom'
import Locations from '../Filters/Locations'
import Sports from '../Filters/Sports'
import styles from './Handler.module.css'

const HandlerLayout = () => {
    return (
      <main className = "App">
        <Sports />
        <div className = {styles.handlerContainer}>
          <section className = {styles.filtertitlecontainer}>
            <h3 className = {styles.details2}> Featured Handlers</h3>
        <Locations />
        </section>
        
          <Outlet />
          </div>
      </main>
    )
  }
  
  export default HandlerLayout
  