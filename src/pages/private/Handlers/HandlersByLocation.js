import React, { useEffect, useState } from 'react'
import axios from '../../../api/axios';
import { Link, useParams } from 'react-router-dom';

const HandlersByLocation = () => {
const [handlers, setHandlers] = useState([]);
const {id} = useParams();

  useEffect(() => {
    getHandlersByLocation();
  }, []);

const getHandlersByLocation = async () => {
  const response = await axios.get(`/location/handlers/${id}`);
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

export default HandlersByLocation
