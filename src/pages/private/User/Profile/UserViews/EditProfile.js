import {useState} from 'react'
import {Form, Modal, Button} from 'react-bootstrap';
import axios from '../../../../../api/axios';
import styles from '../../../Dogs/Dog.module.css';
import PhotoUpload from './PhotoUpload';
import icon from './pencilicon.png'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import GetLocations from './GetLocations';

const EditProfile = ({url, getProfileData, profileInfo}) => {

  const data = profileInfo[0];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newurl, setUrl] = useState(data.url);
  const [name, setName] = useState(data.name);
  const [bio, setBio] = useState(data.bio);
  const [location, setLocation] = useState(data.location);
  const [loading, setLoading] = useState(false);

  const {auth} = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
     await axios.put(`/User`, 
      {
        Id: auth.userId, 
        Bio: bio,
        Name: name,
        LocationId: location,
        PhotoUrl: newurl,
        HandlerId: auth?.id

      });

    }
    catch(err) {
      console.error(err);
    }

    handleClose();
    getProfileData();
    navigate('/user/viewprofile');

   }

  

console.log()


  return (
    
      <div 

            onKeyDown={e => e.stopPropagation()}
            onClick={e => e.stopPropagation()}
            onFocus={e => e.stopPropagation()}
            onMouseOver={e => e.stopPropagation()}>


    <Button variant="secondary" onClick={handleShow} >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>All changes are final. </Modal.Body>

          
           <Form className = {styles.modalContainer}>

              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Name" value = {name} onChange = {(e) => setName(e.target.value)} />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="About" value = {bio} onChange = {(e) => setBio(e.target.value)} />
              </Form.Group>


              <GetLocations setLocation = {setLocation}/>


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

          <Button variant="primary" onClick = {submitHandler} >
            Save
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditProfile
