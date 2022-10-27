import React, { useEffect, useState, useRef } from 'react'
import axios from '../../../api/axios';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const SignUpInfo = () => {

 const {id} = useParams();
 const [location, setLocation] = useState('')
 const [name, setName] = useState('');
 const [bio, setBio] = useState('');
 const [locations, setLocations] = useState([]);
 const [url, setUrl] = useState('')
 const [file, setFile] = useState('')
 const navigate = useNavigate();

useEffect(() => {
  getLocations();
 })

 const getLocations = async () => {
  try {
     const response = await axios.get('Location');
     setLocations(response.data);

  } 
  catch (err) {
     console.error(err);
  }
 }

 const submitHandler = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`/user/${id}`,
    {
      Name: name,
      Bio: bio,
      locationId: location,
      photoUrl: url
    }
    );

    console.log(response.data);
    navigate('/login')
  } 
  catch (err) {
    console.error(err);
  }
 }

 const photoSubmit = async (e) => {
  e.preventDefault();

   const data = new FormData();
   data.append("file", file);

   try {
      const response = await axios.post(`/profile/addprofilepic/`, 
       data
       );
      console.log(response.data)
      setUrl(response.data);
      }
   catch (err) {
      console.error(err);
  }
  
}


 


  return (
    <div>
      <h1> Add some details! </h1>
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

     <section>
        <form method="post" encType="multipart/form-data" >
          
            <label for="file">Choose file to upload</label>
            <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
              e.target.files[0])
                }
               />
          
             <button onClick = {photoSubmit}>Upload</button>
              <img src = {url} alt = 'uploaded img'></img> 
        </form>
  </section>
  <button type = "submit" onClick = {submitHandler}>Save</button>
    </div>
    </div>
   
  )
}

export default SignUpInfo
