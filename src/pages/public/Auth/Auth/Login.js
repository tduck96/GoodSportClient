import {useState} from 'react'
import {Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth';
import axios from '../../../../api/axios';
import styles from './Auth.module.css';
import SpinnerForUpload from '../../../../components/SpinnerForUpload';


const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState('')
  const [submitValue, setValue] = useState('Submit')

  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    console.log('clicked')
    e.preventDefault();
    setValue(<SpinnerForUpload />)

    const registerUser = async () => {

      try {
        const response = await axios.post('/AuthHandler/login', {
          Email: userName, 
          Password: password
        });
       console.log(response.data)

        if (response.data.success === true)  {
          navigate('posts/viewall')  
          setValue('Submit')
         }
        else {
        alert(response.data.message) 
        setValue('Submit')
        }

        setResult(response.data.success);
        setAuth(response.data);

       

      } catch (err) {
          setErrorMsg(err.response.data);
          alert(err.response.data);
          setValue('Submit')
      }      
  
    
   
  }
  setErrorMsg('');
    
    registerUser();
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
        
      <Button variant="primary" type="submit" onClick = {submitHandler} className = {styles.but}>
       {submitValue}
      </Button>
      <br/>
      <Link to ='/Register' className = {styles.register}> Register Today</Link>
    </Form>
    
    
    </div>
  )
}


export default Login
