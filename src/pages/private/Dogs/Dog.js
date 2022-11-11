import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from '../../../api/axios';
import styles from './Dog.module.css'
import DogSport from './DogSport';
import DogSports from './DogSports';
const Dog = () => {
  const { id } = useParams();
  const [dogData, setDogData] = useState([]);
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    getDogData()
  }, []);

  const getDogData = async () => {
      try {
        const response = await axios.get(`/dog/${id}`);
        setDogData([response.data])
        console.log(response.data);

      } catch (err) {
        console.error(err);
  }
};


  return (
    <div className = {styles.dogProfileCard}>
      {
        dogData.map(dog => (
          <ul key = {dog.id} className = {styles.dogDetailsCard}>
            <img src = {dog.photoUrl} alt = {`${dog.name} thumbnail`} className={styles.dogThumbnail}></img>
            <h1> {dog.name} </h1>
            <p> {dog.titles}</p>
            <p>{dog.breedName}</p>
            <p>{dog.weight} (lbs)</p>
            <p>{dog.about}</p>
          </ul>
        ))
      }

      <DogSport />

     
    </div>
  )
}

export default Dog
