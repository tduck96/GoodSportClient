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
import EditForm from './EditForm';

const EditDog = ({dogid, photoUrl}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState('');
  const [about, setAbout] = useState('');


  const {auth} = useAuth();
  

useEffect(() => {
  console.log(breed);
},[breed])

  const submitHandler = async (e) => {
  e.preventDefault();
    try {
      const response = await axios.put(`/dog/${dogid}`,
      {

        Id: dogid,
        Name: name,
        About: about,
        PhotoUrl: photoUrl,
        // Weight: weight,
        BreedId: breed,
        userProfileId: auth.userId

      });
      console.log(response.data);
    }
    catch(err) {
      console.error(err);
    }
  }


  return (

<div onKeyDown={e => e.stopPropagation()}>

    <Button variant="primary" onClick={handleShow} >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Dog</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit Information </Modal.Body>

          
           <Form className = {styles.modalContainer}>
              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Name" onChange = {(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Weight" onChange = {(e) => setWeight(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="textarea" placeholder="About" onChange = {(e) => setAbout(e.target.value)} />
              </Form.Group>
              <GetBreeds breedSetter = {setBreed}/>
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
