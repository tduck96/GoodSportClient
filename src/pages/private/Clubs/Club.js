import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../api/axios';
import styles from './Clubs.module.css'

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
        setSportData(response.data.sports)
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
            <h1> {club.name} </h1>
            <p> {club.location}</p>
            <p> {club.founded} </p>
          </section>
          <section className = {styles.headerDetailContainer}>
          <h2> About Us!</h2>
          <p> {club.about}</p>
          <p> Founded: {club.founded}</p>
          </section>
          </ul>
      ))
    }
    <section className = {styles.headerDetailContainer}>
      <h1> Sports Available:</h1>
    
    </section>
    </div>
  )
}

export default Club
