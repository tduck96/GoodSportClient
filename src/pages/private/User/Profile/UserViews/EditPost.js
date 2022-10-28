import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';

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
    <>
      <Button variant="primary" onClick={handleShow}>
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
    </>
  )
}

export default EditPost
