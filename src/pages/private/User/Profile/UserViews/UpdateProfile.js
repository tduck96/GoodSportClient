import React, {useEffect, useState} from 'react'
import { MDBFile } from 'mdb-react-ui-kit';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';

const UpdateProfile = () => {

  const [file, setFile] = useState('');
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const[name, setName ] = useState('');
  const[bio, setBio] = useState('');

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
        HandlerId: auth.id

      });

    }
    catch(err) {
      console.error(err);
    }
   }


  return (
    <div>
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
       <button type = "submit" onClick = {submitHandler}>Update</button>
     </form>
    </div>
    </div>
  )
}

export default UpdateProfile
