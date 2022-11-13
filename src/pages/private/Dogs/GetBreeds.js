import React, {useState, useEffect} from 'react'
import { Form } from 'react-bootstrap'
import axios from '../../../api/axios'

const GetBreeds = ({breedSetter}) => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        getBreeds();
    },[]);

  
    const getBreeds = async () => {
        try {
            const response = await axios.get(`/breed`);
            setBreeds(response.data);

        }
        catch (err) {
            console.error(err);
        }
    }
  return (
    <Form.Select aria-label="Default select example" onChange = {(e) => breedSetter(e.target.value)}>
      <option>Select Dog Breed:</option>
      
      {
        breeds.map(breed => (
           
            <option value={breed.id}>{breed.name}</option>
           
        ))
      }
      
    </Form.Select>
  )
}

export default GetBreeds
