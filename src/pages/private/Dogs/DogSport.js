import React, {useState, useEffect} from 'react'
import styles from './DogSport.module.css';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import { useParams } from 'react-router-dom';

const DogSport = () => {
    const [sports, setSports] = useState([]);
    const {auth} = useAuth();
    const {id} = useParams();

    useEffect(() => {
        getSports();
    }, []);

    const getSports = async () => { 
        try {
            const response = await axios.get(`/dog/sports/${id}`);
            console.log(response.data);
            setSports(response.data)
        }
        catch(err) {
            console.error(err);
        }
    }


  return (
    <div className = {styles.sportsContainer}>
        {
      sports.map(sport => (
          <ul key = {sport.id} className = {styles.sportContainer} >
            <div className = {styles.sportDetails}>
              <img src = {sport.photoUrl} alt = '' className = {styles.sportPic}></img>
              <h3> {sport.name}</h3>
            </div>
            </ul>
      ))
        }
    </div>
  )
}

export default DogSport
