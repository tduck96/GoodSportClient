import {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import axios from '/Users/thomasduckworth/Desktop/DogSports/client/src/api/axios.js'
import Login from './Login';
import { Next } from 'react-bootstrap/esm/PageItem';

const Register = () => {

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState('false');

  const submitHandler = (e) => {
    e.preventDefault();

    const registerUser = async () => {
      const response = await axios.post('/AuthHandler', { userName, password});
      console.log(response.data);

        setRegisterStatus(response.data.success);

        (registerStatus === 'false') ? alert(response.data.message) : navigate('/login');
        
        }
        registerUser().then(setRegisterStatus(''));
      }

  return (
    <Form>
      <h1> REGISTER </h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange = {(e) => setUserName(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={submitHandler}>
      Submit
    </Button>
    <br />
    <p>Already a Member?</p>
    <Link to = '/login'>Sign In</Link>
  </Form>
  )
}

export default Register
