import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import GetAllSports from './GetAllSports';

const AddSport = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
       <>
      <Button variant="success" onClick={handleShow} >
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sport</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add Sport</Modal.Body>
        <GetAllSports />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default AddSport
