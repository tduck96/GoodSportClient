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
      {
       clubs.map(club => (
        <ul key = {club.id} className = {styles.clubList}>
            <Link to = {`/clubs/${club.id}`}>
              <div key = {club.id}>
                <h1> {club.name} </h1>
              </div>
            </Link>
        </ul>
        ))
      }
    </div>
  )
}

export default ClubsByLocation
