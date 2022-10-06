import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from '../../../api/axios'
import styles from './Filters.module.css'

const Sports = () => {

    const [sports, setSports] = useState([]);

    useEffect(() => {
        getSports();
    })

    const getSports = async () => {
        try {
         const response = await axios.get('/Sport');
        setSports(response.data);
        }
        catch (err)
        {
            console.error(err)
        }
        

    }

  return (
   <nav className = {styles.sportsContainer}>
        {
            sports.map(sport => (
                <ul key = {sport.id}>
                        <Link to = {`./sports/${sport.id}`} className = {styles.sportLink}>{sport.name}</Link>
                </ul>
            ))
        }
   </nav>
  )
}

export default Sports
