import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import axios from '../../../api/axios'

const DeleteDog = ({id, getProfileData}) => {

 const [show, setShow] = useState(false);
 const handleShow = () => setShow(true);

  const handleClose = async () => {
    try {
        const response = await axios.delete(`/dog/${id}`);
        console.log(response.data);
        
    }
    catch (err) {
        console.error(err);
    }
    getProfileData();
    setShow(false);
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Dog</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this dog? All changes will be final. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteDog
