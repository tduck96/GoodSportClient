import {useState, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';
import styles from './Clubs.module.css'

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getClubs();
  }, []);

  const getClubs = async () => {
    try {
      let response = await axios.get('/club');
      setClubs(response.data)
        } 
    catch (err) {
       console.error(err);
  }
}



  return (
    <div className = {styles.clubsContainer}>      
      { clubs.map(club => (
        <ul key = {club.id} className = {styles.clubList}>
            <Link to = {`/clubs/${club.id}`} className = {styles.navLink}>
              <img src = {club.photoUrl} className = {styles.photo}></img>
              <div key = {club.id} className = {styles.details}>
              <h3> {club.name} </h3>
              <p> {club.location} </p>
              <p> Founded {club.founded} </p>
            </div>
            </Link>
        </ul>
        ))
      }

   </div>
  )
  
}

export default Clubs
