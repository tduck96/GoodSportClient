
import {useState, useEffect} from 'react'
import axios from '../../../api/axios';
import styles from './GetAllSports.module.css';
import { Form } from 'react-bootstrap';


const GetAllSports = ({dogid}) => {
    const [sports, setSports] = useState([]);
    const [sportsToAdd, setSportsToAdd] = useState([]);
    

    useEffect(() => {
        getAllSports();
    }, []);

    const getAllSports = async () => {
        
        try {
            const response = await axios.get(`/sport`);
            console.log(response.data);
            setSports(response.data);
            
        }
        catch(err) {
            console.error(err);
        }
    }

    const addSport = (e,sportsid) => {
        e.preventDefault();
       setSportsToAdd([...sportsToAdd, sportsid]);
       

        // try {
        //     const response = await axios.post(`/dog/${dogid}/addsport?sportsid=${sportsid}`);
        //     console.log(response.data);
        // }
        // catch(err) {
        //     console.error(err);
        // }
    }

  return (
    <Form.Select aria-label="Default select example">
    <option>Select Dog Breed:</option>
    
    {
      sports.map(sport => (
         
          <option value={sport.id}>{sport.name}</option>
         
      ))
    }
    
  </Form.Select>
  )
}

export default GetAllSports
