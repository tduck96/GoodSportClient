import React from 'react'
import {useState, useEffect} from 'react';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import styles from '../Handlers/Handler.module.css';
import {Button} from 'react-bootstrap'
import message from './email.png'

const Connections = () => {
    const [connections, setConnections] = useState([]);
    const {auth} = useAuth();

    useEffect(() => {
        getConnections();
    }, []);

    useEffect(() => {
        console.log(connections);
    }, [connections]);

    const getConnections = async () => {

        try {
            const response = await axios.get(`/user/following/${auth?.id}`);
            setConnections(response.data);
            

        }
        catch (err) {
            console.error(err);
        }

    }
  return (
    <div className = {styles.handlersContainer}>
    {
      connections.map(handler => (
        <ul key = {handler.id} className = {styles.handlerLists}>
            <Link to = {`/handlers/${handler.id}`} className = {styles.navLink}>
              <img src = {handler.photoUrl} alt = '' className = {styles.photo}></img>
                <div key = {handler.id} className = {styles.details}>
                  <h3 className = {styles.details}>{handler.name} </h3>
                  <p className = {styles.details2}> {handler.location}</p>
                  <p>{handler.bio}</p>
                </div>
            </Link>
            <Button href = '/404NotFound' variant = 'primary' size = 'sm'>Message</Button>
        </ul>
      ))
    }
    
    
  </div>
  )
}

export default Connections
