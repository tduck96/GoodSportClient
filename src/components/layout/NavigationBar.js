import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.modules.css'

const NavigationBar = () => {
  return (
    <nav>
      <div>
        <NavLink to ='/'>Home</NavLink>
        <NavLink to ='/handlers'>Handler Directory</NavLink>
        <NavLink to ='/clubs'>Club Directory</NavLink>
      </div>

      <div>
        <NavLink to ='/login'>Log In</NavLink>
      </div>
    </nav>
  )
}

export default NavigationBar
