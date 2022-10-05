import {useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Locations from '../Filters/Locations';
import axios from '../../../api/axios';

const Handler = () => {
  const { id } = useParams();
  const [handlerData, setHandlerData] = useState([]);
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    getHandlerData().then(getDogData());
  }, [])

  const getHandlerData = async () => {
    try {
      const response = await axios.get(`/handler/${id}`);
      setHandlerData([response.data]);
    } 
    catch (err) {
      console.error(err);
    }
  };


  const getDogData = async () => {
    try {
      const response = await axios.get(`/handler/dogs/${id}`);
      setDogData(response.data);
      console.log(response.data);
    }
    catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      
      {
        handlerData.map(handler => (
          <ul>
            <li key = {handler.id}>
              <div>
                 <h1> NAME : {handler.name}</h1>
              </div>
            </li>
          </ul>
        ))
      }

      {
        dogData.map(dog => (
          <ul>
            <li key = {dog.id}>
          <Link to = {`/dogs/${dog.id}`}>
            <div>
              <h1> {dog.name}</h1>
              <h1> {dog.breed.name}</h1>
            </div>
          </Link>
          </li>
          </ul>
        ))
      }
  
    </div>
  )
}

export default Handler
