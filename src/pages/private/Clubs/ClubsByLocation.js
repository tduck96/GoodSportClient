import {useState, useEffect} from 'react'
import axios from '../../../api/axios';
import { Link, useParams } from 'react-router-dom';
import styles from './Clubs.module.css'

const ClubsByLocation = () => {
  const [clubs, setClubs] = useState([]);
  const {id} = useParams();

    useEffect(() => {
      getClubsByLocation();
    }, []);

  const getClubsByLocation = async () => {
    const response = await axios.get(`/location/clubs/${id}`);
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
}

export default ClubsByLocation
