import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from '../../../api/axios';
import styles from './Dog.module.css'
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
        setSportData(response.data.sports);

      } catch (err) {
        console.error(err);
  }
};


  return (
    <div className = {styles.dogProfileCard}>
      {
        dogData.map(dog => (
          <ul key = {dog.id} className = {styles.dogDetailsCard}>
            <h1> {dog.name} </h1>
            <p>{dog.weight} (lbs)</p>
            <p>{dog.about}</p>
          </ul>
        ))
      }

      {
        sportData.map(sport => (
          <ul key = {sport.id}>
            <li>{sport.name}</li>

          </ul>
        ))
      }
    </div>
  )
}

export default Dog
