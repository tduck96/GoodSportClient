import { Outlet } from "react-router-dom"
import Locations from "../Filters/Locations"
import Sports from "../Filters/Sports"
import styles from './Clubs.module.css'
const ClubLayout = () => {
  return (
      <main className = {styles.app}>
          <Sports />
          <div className = {styles.handlerContainer}>
          <section className = {styles.filtertitlecontainer}>
            <h3 className = {styles.details}> Featured Clubs</h3>
          <Locations />
          </section>
          <Outlet />
          </div>
      </main>
    
  )
}

export default ClubLayout
