import {useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Locations from '../Filters/Locations';
import axios from '../../../api/axios';

import styles from '/Users/thomasduckworth/Desktop/DogSports/client/src/pages/private/User/Profile/UserViews/User.module.css'
const Handler = () => {
  const { id } = useParams();
  const [profileInfo, setProfileInfo] = useState([]);
  const [dogInfo, setDogInfo] = useState([]);
  const [wallPosts, setWallPosts] = useState([]);

  useEffect(() => {
    getHandlerData()
  }, [])

  const getHandlerData = async () => {
    try {
      const response = await axios.get(`/user/${id}`);
      console.log(response.data)

      setProfileInfo([response.data]);
      setDogInfo(response.data.dogs);
      setWallPosts(response.data.wallPosts);

    } 
    catch (err) {
      console.error(err);
    }
  };


  


  return (
   
     <div className = {styles.container}>
      {
        profileInfo.map(info => (
          <ul key = {info.id} className = {styles.headerContainer}>
            <div className = {styles.headerDetailContainer}>
              <img src = {info.photoUrl} alt = '' className = {styles.profilepic}></img>
              <h2> {info.name} </h2>
              <p> {info.bio} </p>
              {/* <p>{info.location.name}</p> */}
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
              <img src = {dog.photoUrl} alt = '' className = {styles.dogPic}></img>
              <h3> {dog.name}</h3>
            </div>
            </Link>
          </ul>
        ))
      }  
       </div>

       <div className = {styles.wallContainer} >
      <h1> Wall Posts </h1>

      {
          wallPosts.map(post => (
            <ul key = {post.id} className = {styles.wallPost}>
              <Link to = {`/post/${post.id}`} >
              <p> {post.body} </p>
              </Link>
            </ul>
          ))
        } 
        </div>



    </div>
  )
}

export default Handler
