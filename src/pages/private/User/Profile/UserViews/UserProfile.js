import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from '../../../../../api/axios';
import styles from './User.module.css'
import profilePic from './profilepic.jpg'
import dogprofilePic from './millie1.jpeg';

const UserProfile = () => {

  const [profileInfo, setProfileInfo] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getProfileData();
  },[]);

  const getProfileData = async () => {

    try {
      const response = await axios.get(`/profile/${id}`);
      console.log(response.data);
      setProfileInfo([response.data]);
      setDogInfo(response.data.dogs);
  
    }
   catch (err) {
      console.error(err);
   }
   console.log(dogInfo);

  }
  return (
    <div className = {styles.container}>
      {
        profileInfo.map(info => (
          <ul key = {info.id} className = {styles.headerContainer}>
            <div className = {styles.headerDetailContainer}>
              <img src = {profilePic} alt = '' className = {styles.profilepic}></img>
              <h2> {info.name} </h2>
              <p> {info.bio} </p>
              <p>{info.location.name}</p>
            </div>
          </ul>
        ))
      }
          <div className = {styles.dogsContainer}>
            <h3 className = {styles.subHeader}> Dogs</h3>
       {
        dogInfo.map(dog => (
          <ul key = {dog.id} className = {styles.dogContainer}>
            <Link to = {`/dog/${dog.id}`}>
            <div className = {styles.dogDetails}>
              <img src = {dogprofilePic} alt = '' className = {styles.dogPic}></img>
              <h3> {dog.name}</h3>
            </div>
            </Link>
          </ul>
        ))
      } 
      </div>
    </div>
  )
}

export default UserProfile
