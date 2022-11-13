import {useState} from 'react'
import PhotoUpload from '../User/Profile/UserViews/PhotoUpload'
import { Button } from 'react-bootstrap'
import styles from '../User/Profile/UserViews/SignUpInfo.module.css'
import GetBreeds from './GetBreeds'
import axios from '../../../api/axios'
import useAuth from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const CreateDog = () => {

  const [url, setUrl] = useState('');
  const [name ,setName] = useState('');
  const [about, setAbout] = useState('');
  const [titles, setTitles ] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState();

  const {auth} = useAuth();
  const navigate = useNavigate();

    const addDog = async () => {
      try {
        const response = await axios.post('/dog',
        {
          Name: name,
          Weight: weight,
          About: about,
          PhotoUrl: url,
          Titles: titles,
          userProfileId: auth.userId,
          locationId: 1,
          breedId: breed,
        })
        console.log(response.data);
        navigate('/user/viewProfile');
        
      }
      catch(err) {
        console.error(err);
      }
    }
    
  

  return (
    <div className = {styles.container}>
      <h1> Add some details! </h1>
      <div>
       <form>
       <div class="form-group">
         <label for="exampleFormControlInput1">Name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lucky" onChange={(e) => setName(e.target.value)}></input>
       </div>

        <label> Breed</label>
       <GetBreeds breedSetter = {setBreed}/>

       <div class="form-group">
         <label for="exampleFormControlInput1">Weight (lbs)</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Weight " onChange={(e) => setWeight(e.target.value)}></input>
       </div>

       <div class="form-group">
         <label for="exampleFormControlInput1">Titles</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="What titles have you earned? " onChange={(e) => setTitles(e.target.value)}></input>
       </div>
       
       <div class="form-group">
         <label for="exampleFormControlTextarea1">About</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setAbout(e.target.value)}></textarea>
       </div>
       
     </form>

    <PhotoUpload url = {url} setUrl = {setUrl}/>

    <Button variant="primary" type="submit" onClick = {addDog} className = {styles.submitButton}>
        Submit
      </Button>
    </div>
    </div>
  )
}

export default CreateDog

