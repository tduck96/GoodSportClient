import React, {useEffect, useState} from 'react'
import { MDBFile } from 'mdb-react-ui-kit';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';
import PhotoUpload from './PhotoUpload';
import { Button } from 'react-bootstrap'
import styles from './SignUpInfo.module.css'
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

  const [file, setFile] = useState('');
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const[name, setName ] = useState('');
  const[bio, setBio] = useState('');
  const [url, setUrl] = useState('');
  
  const navigate = useNavigate();

  const { auth} = useAuth();

  
  
useEffect(() => {
  getLocations();
},[]);

  const changeHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files);
  }

  const getLocations = async () => {
    try {
       const response = await axios.get('Location');
       console.log(response.data);
        setLocations(response.data);

    } 
    catch (err) {
       console.error(err);
    }

    
   }

   const submitHandler = async (e) => {
    e.preventDefault();

    try {
     await axios.put(`/User`, 
      {
        Id: auth.userId, 
        Bio: bio,
        Name: name,
        locationId: location,
        HandlerId: auth.id,
        PhotoUrl: url

      });

    }
    catch(err) {
      console.error(err);
    }
    navigate('/user/viewprofile');
   }


  return (
   <>
      <div className = {styles.container}>
      <h1> Edit Profile </h1>
      <div>
       <form>
       <div class="form-group">
         <label for="exampleFormControlInput1">Name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Smith" onChange={(e) => setName(e.target.value)}></input>
       </div>
       <div class="form-group">
         <label for="exampleFormControlSelect1">Location</label>
         <select class="form-control" id="exampleFormControlSelect1" onChange= {(e) => setLocation(e.target.value)}>
          <option></option>
         {
            locations.map(spot => (
              <option value = {spot.id}>{spot.name}</option>
            ))
         }  
          
         </select>
       </div>
       <div class="form-group">
         <label for="exampleFormControlTextarea1">Bio</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setBio(e.target.value)}></textarea>
       </div>
       
     </form>

    <PhotoUpload url = {url} setUrl = {setUrl}/>

    <Button variant="primary" type="submit" onClick = {submitHandler} className = {styles.submitButton}>
        Submit
      </Button>
    </div>
    </div>
   
   </>
  )
}

export default UpdateProfile
