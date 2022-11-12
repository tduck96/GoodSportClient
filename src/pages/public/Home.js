import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout'
import logo from './dogsportlogored.png'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

 
  return (
    
    <div  >
      <div className = {styles.container}>
      <img src = {logo} alt = 'logothumbnail' className = {styles.logo}></img>
      
      <Link to ='/handlers' className = {styles.links}> View Handlers</Link>
      <Link to ='/clubs' className = {styles.links}>View  Clubs</Link>
     
      </div>
    </div>
  
  )
}

export default Home
