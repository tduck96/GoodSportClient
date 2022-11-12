import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Navigate, NavLink } from 'react-router-dom';
import styles from './NavigatonBar.module.css';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';


const NavigationBar = () => {
  const { auth, setAuth } = useAuth();
  const logout = useLogout();

  const onLogout = async () => {

    setAuth({});
    try {
      await logout();
    }
    catch (err) {
      console.error(err);
    }
   
  }

  return (
    <nav className = {styles.container}>
      <div class = {styles.leftNavItems}>
        <NavLink to ='/' className = {styles.navLink}>Home</NavLink>
        <NavLink to ='/handlers' className = {styles.navLink}>Handlers</NavLink>
        <NavLink to ='/clubs' className = {styles.navLink}>Clubs</NavLink>
      </div>

      {
        !auth?.token ?  
        
        <div class = {styles.rightNavItems}>
        <NavLink to ='/login' className = {styles.navLink}>Log In</NavLink>
        </div>

        :

        <Dropdown>
          <Dropdown.Toggle variant="danger"  id="dropdown-basic" >
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item><NavLink to ='/user/viewprofile'>View profile</NavLink></Dropdown.Item>
            <Dropdown.Item onClick = {onLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
      }
    </nav>
  )
}

export default NavigationBar
