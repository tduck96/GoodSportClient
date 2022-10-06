import React from 'react'
import axios from '../../../api/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HandlersBySport = () => {

  const [handlers, setHandlers] = useState([]);
  const {id} = useParams();

    useEffect(() => {
      getHandlersBySport();
    }, []);

  const getHandlersBySport = async () => {
    const response = await axios.get(`/sport/handlers/${id}`);
    setHandlers(response.data);
  }

  return (
    <div>
      {
        handlers.map(handler => (
            <ul key = {handler.id}>
              <Link to = {`/handlers/${handler.id}`}>
                  <h1> {handler.name} </h1>
              </Link>
            </ul>
        ))
      }
    </div>
  )
}

export default HandlersBySport
