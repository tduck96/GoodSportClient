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
            <Link to = {`/clubs/${club.id}`}><div key = {club.id}>
              <h1> {club.name} </h1>
            </div>
            </Link>
        </ul>
        ))
      }
   </div>
  )
  
}

export default Clubs
