import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import styles from './HandlerSport.module.css';

const HandlerSports = () => {
    const [sports, setSports] = useState([]);
    const {auth} = useAuth();
    const {id} = useParams();

    useEffect(() => {
        getSports();
    }, []);

    const getSports = async () => { 
        try {
            const response = await axios.get(`/user/${id}/sports`);
            console.log(response.data);
            setSports(response.data)
        }
        catch(err) {
            console.error(err);
        }
    }
  return (
    <div>
      <div className = {styles.sportsContainer}>
        <section className = {styles.sportHeader} >
             <h3 className = {styles.subHeader}> Sports </h3>
         </section>

         {
        sports.map(sport => (
          <ul key = {sport.id} className = {styles.sportContainer} >
            <div className = {styles.sportDetails}>
              <img src = {sport.photoUrl} alt = '' className = {styles.sportPic}></img>
              <h3> {sport.name}</h3>
            </div>
            </ul>
        ))}

    </div>
  </div>
    


  )
}

export default HandlerSports
