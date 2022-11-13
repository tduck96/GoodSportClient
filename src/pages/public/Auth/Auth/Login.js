import {useState} from 'react'
import {Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth';
import axios from '../../../../api/axios';
import styles from './Auth.module.css';

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState('')

  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const registerUser = async () => {

      try {
        const response = await axios.post('/AuthHandler/login', {
          Email: userName, 
          Password: password
        });

        console.log(response.data)
        console.log(response.data.success)
        setAuth(response.data);
        setResult(response.data.success);
        setErrorMsg(response.data.message)
        
        // console.log(response.data)
        // console.log(result);
        // if (result === true)  navigate('/');
        // else {
        //   alert("Invalid Combination Try Again")
        // }

      } catch (err) {
        
          
      }      
  }
    registerUser();
    // console.log(result)
    // console.log(errorMsg);

   

    

    setErrorMsg('');
}

  return (
    <div className = {styles.container}>
      <h1> LOG IN</h1>
    <Form className = {styles.formContainer}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className = {styles.inputs} onChange={(e) => setUserName(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className = {styles.inputs} onChange={(e) => setPassword(e.target.value)} />
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
