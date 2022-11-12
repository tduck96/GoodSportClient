import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from '../../../../../api/axios';
import styles from './User.module.css'
import profilePic from './profilepic.jpg'
import dogprofilePic from './millie1.jpeg';
import useAuth from '../../../../../hooks/useAuth';
import PostCreate from './PostCreate';
import DeletePost from './DeletePost';
import DeleteDog from '../../../Dogs/DeleteDog';
import EditPost from './EditPost';
import EditDog from '../../../Dogs/EditDog';
import { Dropdown } from 'react-bootstrap';
import { DropdownItem }from 'react-bootstrap/esm/DropdownItem'
import DogSports from '../../../Dogs/DogSports';
import AddDogSport from '../../../Dogs/AddDogSport';


const UserProfile = () => {

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
              <img src = {info.photoUrl} alt = '' className = {styles.profilepic}></img>
              <h2 className = {styles.profileName}> {info.name} </h2>
              <p className = {styles.info}> {info.bio} </p>
              <p className = {styles.location}>{info.location.name}</p>
              <Link to = '/user/updateprofile'>Update</Link>
            </div>
          </ul>
        ))
        } 


          <div className = {styles.dogsContainer}>
            <section className = {styles.dogHeader}>
            <h3 className = {styles.subHeader}> Dogs</h3>
            <Link to = '/dog/createdog' className = {styles.addDog}>+</Link>
            </section>

            
        {
        dogInfo.map(dog => (
          <ul key = {dog.id} className = {styles.dogContainer}>
            <Link to = {`/user/dog/${dog.id}`}>
            <div className = {styles.dogDetails}>
              <img src = {dog.photoUrl} alt = '' className = {styles.dogPic}></img>
              <h3> {dog.name}</h3>
            </div>
            </Link>
            <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className = {styles.dropdown}>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>

                         <DropdownItem>
                         <EditDog dogid = {dog.id} url = {dog.photoUrl} getProfileData = {getProfileData}/> 
                         </DropdownItem>

                          <DropdownItem>
                            <DeleteDog id = {dog.id} getProfileData = {getProfileData}/>
                           </DropdownItem>

                           <DropdownItem>
                            <AddDogSport id = {dog.id} getProfileData = {getProfileData}/>
                           </DropdownItem>
                          
                        </Dropdown.Menu>
                     </Dropdown>
          
          </ul>
        ))
      }  
     
      


      </div>

      <DogSports />

      <PostCreate getProfileData = {getProfileData} />
      <div className = {styles.wallContainer} >
      
      
        {
          wallPosts.map(post => (
             <ul key = {post.id} className = {styles.wallPost}>
              <section className = {styles.postTop}>

               { profileInfo.map(info => (
               <section className = {styles.headerInfo}>
                <img src = {info.photoUrl} alt = '' className = {styles.postPhoto}></img>
                <p><strong>{info.name}</strong></p>
                </section>
               ))}
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className = {styles.dropdown}>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                       <DropdownItem>
                         <EditPost id = {post.id} url = {post.photoUrl} getProfileData = {getProfileData}/> 
                         </DropdownItem>
                          <DropdownItem>
                            <DeletePost id = {post.id} getProfileData = {getProfileData}/>
                           </DropdownItem>
                           <DropdownItem><Link to = {`/post/${post.id}`}>Comment</Link></DropdownItem>
                        </Dropdown.Menu>
                     </Dropdown>
                     </section>

                     <Link to = {`/post/${post.id}`} ><p className = {styles.body}> {post.body} </p></Link>
                     
                     <img src = {post.photoUrl} alt = '' className = {styles.postImg}></img>
              
            </ul>
         ))
        }
    </div>


    </div>
  )
}

export default UserProfile
