import {useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios'

const Locations = () => {

    const [locations, setLocations] = useState([]);
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const isMounted = useRef(false);

    useEffect(() => {
        getLocations();
    }, []);

    useEffect(() => {
      if (isMounted.current) {
        navigate(`./location/${id}`);
      } 
      
    }, [id])
    
    
    const getLocations = async () => {
     try {
        const response = await axios.get('Location');
        console.log(response.data);
        setLocations(response.data);

     } 
     catch (err) {
        console.error(err);
     }

    }

    const changeHandler = (e) => { 
        e.preventDefault();
        if (e.target.value !== '0')
        setId(e.target.value);

        isMounted.current = true;
    };
  return (
    <div>
        <form>
        <label for = "locations"> Choose Location : </label>
        <select name="locations" id="locations" onChange={changeHandler}>
          <option value = "0">Select:</option>

      {
        locations.map(x => (
          <option value = {x.id} key = {x.id}>{x.name}</option>
         
        ))
      }
     </select>
     </form>
    </div>
  )
}

export default Locations
