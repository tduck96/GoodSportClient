import React from 'react'
import axios from '../../../api/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Handler.module.css'

const HandlersBySport = () => {

  const [handlers, setHandlers] = useState([]);
  const {id} = useParams();

    useEffect(() => {
      getHandlersBySport();
    }, []);

  const getHandlersBySport = async () => {
    const response = await axios.get(`/sport/user/${id}`);
    setHandlers(response.data);
  }

  return (
    <div className = {styles.handlersContainer}>
      {
        handlers.map(handler => (
          <ul key = {handler.id} className = {styles.handlerLists}>
              <Link to = {`/handlers/${handler.id}`} className = {styles.navLink}>
                <img src = {handler.photoUrl} alt = '' className = {styles.photo}></img>
                  <div key = {handler.id} className = {styles.details}>
                  <h3 className = {styles.details}> {handler.name} </h3>
                  <p> {handler.location}</p>
                  </div>
              </Link>
          </ul>
        ))
      }
      
    </div>
  )
}

export default HandlersBySport
