import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import GetAllSports from './GetAllSports';
import styles from './AddDogSport.module.css'


const AddDogSport = ({getProfileData, id}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [sport, setSport] = useState('');
    const handleClose = () => setShow(false);

    const {auth} = useAuth();

    const handleClick =  (e) =>
    {
      e.preventDefault();
      postSport();
      
    }

const postSport = async () => {
    try {
      const response = await axios.post(`/dog/${id}/addsport?sportsId=${sport}`);
    }
    catch (err) {
      console.error(err);
    }
    handleClose();
    getProfileData();
  }

  return (
    <div>
       <>
      <Button variant="success" onClick={handleShow} className = {styles.addButton} >
        Add Sports
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sports</Modal.Title>
        </Modal.Header>

        <GetAllSports setSport = {setSport} />
        
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddDogSport