import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';
import styles from './Edit.module.css'

const EditPost = ({url, id, getProfileData}) => {
    const [show, setShow] = useState(false);
    const [body, setBody] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {auth} = useAuth();

    const editPostHandler = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.put(`/wallpost/${id}?userId=${auth.userId}`, {id: id, body: body, photoUrl: url});
      }
      catch(err) {
        console.error(err)
      }
      handleClose();
      getProfileData();
    }

return (

  <div
  onKeyDown={e => e.stopPropagation()}
  onClick={e => e.stopPropagation()}
  onFocus={e => e.stopPropagation()}
  onMouseOver={e => e.stopPropagation()} >

      <Button variant="primary" onClick={handleShow} className = {styles.edit}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Rewrite your post to your liking!</Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="What would you like to say?" onChange = {(e) => setBody(e.target.value)} />
      </Form.Group>
      </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editPostHandler} >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default EditPost
