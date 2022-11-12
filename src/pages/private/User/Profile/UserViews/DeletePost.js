import React, { useState } from 'react'
import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/Modal'
import axios from '../../../../../api/axios';
import styles from './Delete.module.css'

const DeletePost = ({id, getProfileData}) => {

 const [show, setShow] = useState(false);
 const handleShow = () => setShow(true);

  const handleClose = async () => {
    try {
        const response = await axios.delete(`/wallpost/${id}`);
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
      <Button variant="secondary" onClick={handleShow} className = {styles.delete}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post? All changes will be final. </Modal.Body>
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

export default DeletePost
