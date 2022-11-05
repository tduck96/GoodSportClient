import {useState} from 'react'
import { Form } from 'react-bootstrap';
import GetBreeds from './GetBreeds';
import styles from './Dog.module.css'

const EditForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState();
  const [about, setAbout] = useState('');
 
  return (
    <Form className = {styles.modalContainer}>
     <Form.Group className="mb-3" >
      <Form.Control type="text" placeholder="Name" onChange = {(e) => setName(e.target.value)} />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="Number" placeholder="Weight" onChange = {(e) => setWeight(e.target.value)} />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="textarea" placeholder="About" onChange = {(e) => setAbout(e.target.value)} />
     </Form.Group>
     <GetBreeds breedSetter = {setBreed}/>
    </Form>

    
  )
}

export default EditForm
