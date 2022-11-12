import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout'
import logo from './dogsportlogored.png'
import styles from './Home.module.css'
import Buttons from './Buttons';


const Home = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

 
  return (
    
    <div className = {styles.container}>
      <img src = {logo} alt = 'logothumbnail' className = {styles.logo}></img>
    </div>
  
  )
}

export default Home
