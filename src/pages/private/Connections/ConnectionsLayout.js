import React from 'react'
import Sports from '../Filters/Sports';
import Locations from '../Filters/Locations';
import { Outlet } from 'react-router-dom';
import styles from '../Handlers/Handler.module.css';

const ConnectionsLayout = () => {
  return (
    <main className = {styles.app}>
    <div className = {styles.handlerContainer}>
        {/* <input type = 'text'></input>
        <button type = 'submit'>Search</button> */}
      <section className = {styles.filtertitlecontainer}>
        <h3 className = {styles.details2}> View Connections</h3>
    </section>
    
      <Outlet />

      </div>
  </main>
  )
}

export default ConnectionsLayout
