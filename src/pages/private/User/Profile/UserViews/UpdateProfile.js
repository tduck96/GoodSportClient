import React, {useEffect, useState} from 'react'
import { MDBFile } from 'mdb-react-ui-kit';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';

const UpdateProfile = () => {

  const [file, setFile] = useState('');
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const[name, setName ] = useState('');
  const[sports, setSports] = useState([]);
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
      const response = await axios.put(`/User`, 
      {
        Id: auth.userId, 
        Bio: bio,
        Name: name,
        locationId: 1,
        HandlerId: auth.id

      });

      console.log(response.data);


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
       {/* <div class="form-group">
         <label for="exampleFormControlSelect2">Sports</label>
         <select multiple class="form-control" id="exampleFormControlSelect2">
           
         </select>
       </div> */}
       <div class="form-group">
         <label for="exampleFormControlTextarea1">Bio</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setBio(e.target.value)}></textarea>
       </div>
       <button type = "submit" onClick = {submitHandler}>Update</button>
     </form>

     {/* <form>
      <MDBFile label='Default file input example' id='customFile' onChange={changeHandler} />
      <button type = 'submit'>Submit</button>
        </form> */}

    </div>
    </div>
  )
}

export default UpdateProfile
