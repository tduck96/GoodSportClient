import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';
import GetAllSports from '../../../Dogs/GetAllSports';
import styles from './AddSport.module.css'

const AddSport = ({getSports}) => {
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
      const response = await axios.post(`/user/${auth.userId}/addsport?sportsId=${sport}`);
      console.log(response.data);
    }
    catch (err) {
      console.error(err);
    }
    handleClose();
    getSports();
  }

  return (
    <div>
       <>
      <Button variant="secondary" onClick={handleShow} className = {styles.addButton} >
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sport</Modal.Title>
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

export default AddSport
