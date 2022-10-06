import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from '../../../../../api/axios';

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
    <div>
      {
        profileInfo.map(info => (
          <ul key = {info.id}>
            <div>
              <img src = {info.photoUrl} alt = ''></img>
              <h1>Name : {info.name} </h1>
              <p> {info.bio} </p>
              
              <h1>Location : {info.location.name}</h1>
            </div>
          </ul>
        ))
      }

       {
        dogInfo.map(dog => (
          <ul key = {dog.id}>
            <Link to = {`/dog/${dog.id}`}>
            <div>
              <h2> Name : {dog.name}</h2>
            </div>
            </Link>
          </ul>
        ))
      } 
      
    </div>
  )
}

export default UserProfile
