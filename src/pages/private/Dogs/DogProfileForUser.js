import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from '../../../api/axios';
import styles from './Dog.module.css';

const DogProfileForUser = () => {
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
              <img src = {dog.photoUrl} alt = ''></img>
              <h1> {dog.name} </h1>
              <p>{dog.weight} (lbs)</p>
              <p>{dog.about}</p>
              <Link to = {`/dog/editdog/${dog.id}`}> Edit </Link>
              <Link to ={`/dog/uploadphoto/${dog.id}`}> Add Photo</Link>
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

export default DogProfileForUser
