import React, { useEffect, useState } from 'react'
import axios from '../../../api/axios';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import PhotoUpload from '../User/Profile/UserViews/PhotoUpload';
import styles from './Dog.module.css'
import GetBreeds from './GetBreeds';
import AddDogSport from './AddDogSport';
import GetAllSports from './GetAllSports';

const EditDog = ({dogid, url, getProfileData, dog}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [name, setName] = useState();
  const [breed, setBreed] = useState();
  const [weight, setWeight] = useState();
  const [titles, setTitles] = useState();
  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(false);
  const [dogData, setDogData] = useState([]);
  const [data, setData] = useState()
  const [newurl, setUrl] = useState(url);


  const {auth} = useAuth();
  

useEffect(() => {
  getDogData();
},[]);


const handleShow = () => {
  setShow(true);
  getDogData();
}
const getDogData = async () => {
  try {
    const response = await axios.get(`/dog/${dogid}`);
    setDogData([response.data])
  } catch (err) {
    console.error(err);
}
setData(dogData[0]);
AddData(data);



};

const AddData = (info) => {
  setName(data.name);
  setBreed(data.breed);
  setWeight(data.weight);
  setTitles(data.titles);
  setAbout(data.about);
  setUrl(data.PhotoUrl);
}

  const submitHandler = async (e) => {
  e.preventDefault();
    try {
      const response = await axios.put(`/dog/${dogid}`,
      {
        Id: dogid,
        Name: name,
        About: about,
        PhotoUrl: newurl,
        Weight: weight,
        Titles: titles,
        BreedId: breed,
        userProfileId: auth.userId

      });

      
    }
    catch(err) {
      console.error(err);
    }
    handleClose();
    getProfileData();
    

  }


  return (

<div 
 onKeyDown={e => e.stopPropagation()}
 onClick={e => e.stopPropagation()}
 onFocus={e => e.stopPropagation()}
 onMouseOver={e => e.stopPropagation()}>

    <Button variant="primary" onClick={handleShow} >
        Edit Dog
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Edit Dog</Modal.Title>
        </Modal.Header>

        <Modal.Body>Edit Information </Modal.Body>

          
           <Form className = {styles.modalContainer}>

              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Name" value = {name}onChange = {(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Weight"  value = {weight}onChange = {(e) => setWeight(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Titles" value = {titles} onChange = {(e) => setTitles(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="textarea" placeholder="About" value = {about }onChange = {(e) => setAbout(e.target.value)} />
              </Form.Group>

              <GetBreeds breedSetter = {setBreed}/>


              <PhotoUpload 
              setUrl = {setUrl}
              loading = {loading}
              url = {newurl}
              setLoading = {setLoading} 
              />

             </Form>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={submitHandler} >
            Save
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditDog
