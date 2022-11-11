import {useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom';
import axios from '../../../api/axios';
import styles from './Clubs.module.css'

const ClubsBySport = () => {
  const [clubs, setClubs] = useState([]);
  const {id} = useParams();

    useEffect(() => {
      getClubsBySports();
    }, []);

  const getClubsBySports = async () => {
    const response = await axios.get(`/sport/clubs/${id}`);
    setClubs(response.data);
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
  return (
    <div>
      
    </div>
  )
}

export default ClubsBySport
