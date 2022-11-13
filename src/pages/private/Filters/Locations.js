import {useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from '../../../api/axios'
import styles from './Filters.module.css'

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
    <div className = {styles.LocationContainer}>

      <DropdownButton id="dropdown-basic-button" variant="danger"  title="Sort by Location" className = {styles.locationButton}>
        {
          locations.map(x => (
          <Dropdown.Item key = {x.id} as ={Link} to = {`./location/${x.id}`}> {x.name} </Dropdown.Item>
          ))
        }
      </DropdownButton>
    
    </div>
  )
}

export default Locations
