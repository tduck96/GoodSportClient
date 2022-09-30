import {useState} from 'react'
import {Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '/Users/thomasduckworth/Desktop/DogSports/client/src/hooks/useAuth.js'
import axios from '../../../../api/axios';

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { setAuth } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();

    const registerUser = async () => {
      const response = await axios.post('/AuthHandler/login', { userName, password});
        console.log(response.data);
          setAuth(response.data)
  }
  registerUser();
}

  return (
    <div>
      <h1> LOG IN</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserName(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group> 
        
      <Button variant="primary" type="submit" onClick = {submitHandler}>
        Submit
      </Button>
      <br/>
      <Link to ='/Register'> Register Today</Link>
    </Form>
    
    
    </div>
  )
}

export default Login
