import React, { useState } from 'react'
import axios from '../../../api/axios';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import GetBreeds from './GetBreeds';

const EditDog = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState();
  const [about, setAbout] = useState('');

  const [file, setFile] = useState('');
  const [url, setUrl] = useState('');
  const {id} = useParams();
  const {auth} = useAuth();
  



  const submitHandler = async (e) => {
  e.preventDefault();
    try {
      const response = await axios.put(`/dog/${id}`,
      {

        Id: id,
        Name: name,
        Weight: weight,
        About: about,
        PhotoUrl: url,
        userProfileId: auth.userId

      });
      console.log(response.data);
    }
    catch(err) {
      console.error(err);
    }
  }

  const photoSubmit = async (e) => {
    e.preventDefault();

     const data = new FormData();
     data.append("file", file);

     try {
        const response = await axios.post(`/dog/addphoto/`, 
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
<>
    <Button variant="primary" onClick={handleShow} >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Dog</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit Information</Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Name" onChange = {(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Weight" onChange = {(e) => setWeight(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="About" onChange = {(e) => setAbout(e.target.value)} />
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

    
    </>
  //   <div>
  //   <div>
  //    <form>
  //    <div class="form-group">
  //      <label for="exampleFormControlInput1">Name</label>
  //      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lucky Boy!" onChange={(e) => setName(e.target.value)} ></input>
  //    </div>

  //    <div class="form-group">
  //        <label for="exampleFormControlSelect1">Location</label>
  //        <select class="form-control" id="exampleFormControlSelect1" >
  //         <option>
  //           ALL AMERICAN  
  //         </option>
  //        </select>
  //      </div>

  //    <div class="form-group">
  //      <label for="exampleFormControlSelect1">Weight (lbs)</label>
  //      <input type="text" class ="form-control" id="exampleFormControlInput1" placeholder="" onChange={(e) => setWeight(e.target.value)} ></input>
  //    </div>

  //    <div class="form-group">
  //      <label for="exampleFormControlTextarea1">About</label>
  //      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setAbout(e.target.value)} ></textarea>
  //    </div>
  //    <button type = "submit" onClick= {submitHandler}>Update</button>
  //    </form>

     
  //       <img src = {url} alt = 'uploaded img' ></img>



  

  // </div>
  // <section>
  // <form method="post" encType="multipart/form-data" >
     
  //         <label for="file">Choose file to upload</label>
  //         <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
  //             e.target.files[0])
  //         }
  //          />
     
  //         <button onClick = {photoSubmit}>Upload</button>
  // </form>
  // </section>
  // </div>
  )
}

export default EditDog
