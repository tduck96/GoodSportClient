import {useState, useRef, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../../api/axios';
import Login from './Login';
import useAuth from '../../../../hooks/useAuth';
import SignUpInfo from '../../../private/User/Profile/UserViews/SignUpInfo';
import styles from './Auth.module.css';
import SpinnerForUpload from '../../../../components/SpinnerForUpload';



const Register = () => {

  const navigate = useNavigate();
  const {setRegisterInfo, registerInfo} = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState('false');
  const [submitValue, setValue] = useState('Submit')

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      navigate(`/createprofile/${registerInfo}`);
    } 
    
  }, [registerInfo])

  const submitHandler = (e) => {
    e.preventDefault();

    const registerUser = async () => {

      setValue(<SpinnerForUpload /> )

      try {
      const response = await axios.post('/AuthHandler', { 
        Email: userName, 
        Password: password
      });

         if (response.data.success === true) {
         setRegisterInfo(response.data.id)
         isMounted.current = true;
         }
         else {
          alert(response.data.message)

        } 
      }
      catch(err) {
          console.error(err)
        }
        
      }
      registerUser();
      setValue('Submit');

  }

  return (
    <Form className = {styles.container}>
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
    <Button variant="primary" type="submit" onClick={submitHandler} className = {styles.but}>
      {submitValue}
    </Button>
    <br />
    <p>Already a Member?</p>
    <Link to = '/login'>Sign In</Link>
  </Form>
  )
}

export default Register
