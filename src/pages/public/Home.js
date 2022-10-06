import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout'


const Home = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

 
  return (
    <div>
      <p> Home</p>
    </div>
  )
}

export default Home
