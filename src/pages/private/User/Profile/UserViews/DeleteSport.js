import React from 'react'
import { useState } from 'react';
import axios from '../../../../../api/axios';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const DeleteSport = ({getSports, id}) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
   
     const handleClose = async () => {
       try {
          const response = await axios.delete(`/dog/${id}`);
           console.log(2);
           
       }
       catch (err) {
           console.error(err);
       }
       setShow(false);
       getSports();
     }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Sport</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Sport? All changes will be final. </Modal.Body>
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

export default DeleteSport
