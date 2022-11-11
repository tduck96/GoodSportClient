import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../api/axios';
import styles from './Clubs.module.css'
import ClubSports from './ClubSports';

const Club = () => {

  const { id } = useParams();
  const [clubData, setClubData] = useState([]);
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    getClubData()
  }, []);

  const getClubData = async () => {
      try {
        const response = await axios.get(`/club/${id}`);
        setClubData([response.data])
      } catch (err) {
        console.error(err);
  }
};



console.log(clubData);
console.log(sportData)

  return (
    <div className = {styles.container}>
    {
      clubData.map(club => (
        <ul key = {club.id} className = {styles.headerContainer} >
          <section className = {styles.headerDetailContainer}>
            <img src = {club.photoUrl} alt = 'clubThumbnail' className = {styles.clubPhoto}></img>
            <h2 className = {styles.details}> {club.name} </h2>
            <p className = {styles.details}> {club.location}</p>
            
          </section>
          <section className = {styles.headerDetailContainer}>
          <h2 className = {styles.details}> About Us!</h2>
          <p className = {styles.details}> {club.about}</p>
          <p className = {styles.details}> Founded: {club.founded}</p>
          </section>
          </ul>
      ))
    }
    <section className = {styles.headerDetailContainer}>
      <h1 className = {styles.details}> Sports Available:</h1>

    <ClubSports />
    
    </section>
    </div>
  )
}

export default Club
