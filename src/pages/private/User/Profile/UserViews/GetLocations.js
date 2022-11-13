import React, { useEffect, useState } from 'react'
import {Form} from 'react-bootstrap'
import axios from '../../../../../api/axios';

const GetLocations = ({setLocation}) => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = async () => {
        try {
            const response = await axios.get('/location')
            setLocations(response.data)
        }
        catch(err)
        {
            console.error(err);
        }
    }

  return (
    <div>
      <Form.Select aria-label="Default select example" onChange = {(e) => setLocation(e.target.value)}>
      <option>Select Current State:</option>
      
       {
        locations.map(item => (
           
            <option value={item.id}>{item.name}</option>
           
        ))
      }
      
    </Form.Select>
    </div>
  )
}

export default GetLocations
