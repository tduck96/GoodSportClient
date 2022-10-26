import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from '../../../../../api/axios';
import styles from './User.module.css'
import profilePic from './profilepic.jpg'
import dogprofilePic from './millie1.jpeg';
import useAuth from '../../../../../hooks/useAuth';


const UserProfile = () => {

  const { setUserId, userId } = useAuth();

  const [profileInfo, setProfileInfo] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);
  const [wallPosts, setWallPosts] = useState([]);

  const { auth } = useAuth();

  const id = auth.id;

  useEffect(() => {
    getProfileData();
  },[]);

  const getProfileData = async () => {

    try {
      const response = await axios.get(`user/profile/${id}`);
      console.log(response.data);
      setProfileInfo([response.data]);
      setDogInfo(response.data.dogs);
      setWallPosts(response.data.wallPosts);
      setUserId(response.data.id);
      
      console.log(response.data.wallPosts);
  
    }
   catch (err) {
      console.error(err);
   }
   

  

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
              <Link to = '/user/updateprofile'>Update</Link>
            </div>
          </ul>
        ))
        } 
        
          <div className = {styles.dogsContainer}>
            <h3 className = {styles.subHeader}> Dogs</h3>
        {
        dogInfo.map(dog => (
          <ul key = {dog.id} className = {styles.dogContainer}>
            <Link to = {`/user/dog/${dog.id}`}>
            <div className = {styles.dogDetails}>
              <img src = {dogprofilePic} alt = '' className = {styles.dogPic}></img>
              <h3> {dog.name}</h3>
            </div>
            </Link>
            <Link to = {`/dog/editdog/${dog.id}`}> Edit Dog </Link>
          </ul>
        ))
      }  


      </div>

      <div className = {styles.wallContainer} >
      <h1> Wall Posts </h1>
{/*        
        {
          wallPosts.map(post => (
            <ul key = {post.id} className = {styles.wallPost}>
              <Link to = '/' >
              <p> {post.body} </p>
              </Link>
            </ul>
          ))
        } */}
    </div>


    </div>
  )
}

export default UserProfile
