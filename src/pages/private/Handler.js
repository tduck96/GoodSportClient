import {useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const Handler = () => {
  const { id } = useParams();
  const [handlerData, setHandlerData] = useState([]);

  useEffect(() => {
    getHandlerData();
  }, [])

  const getHandlerData = async () => {
    try {
      const response = await axios.get(`/handler/${id}`);
      console.log(response.data);
      setHandlerData([response.data]);
    } 
    catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      {
        handlerData.map(handler => (
          <div key = {handler.id}>
            <h1> NAME : {handler.name}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default Handler
