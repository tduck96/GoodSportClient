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
              <h2 className = {styles.profileName}> {info.name} </h2>
              <p className = {styles.info}> {info.bio} </p>
              <p className = {styles.location}>{info.location.name}</p> 
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
      

      {
          wallPosts.map(post => (
            <ul key = {post.id} className = {styles.wallPost}>
               { profileInfo.map(info => (
               <section className = {styles.headerInfo}>
                <img src = {info.photoUrl} alt = '' className = {styles.postPhoto}></img>
                <p><strong>{info.name}</strong></p>
                </section>
               ))}
              <Link to = {`/post/${post.id}`} ><p className = {styles.body}> {post.body} </p></Link>
                  <img src = {post.photoUrl} alt = '' className = {styles.postImg}></img>
            </ul>
          ))
        } 
        </div>



    </div>
  )
}

export default Handler
