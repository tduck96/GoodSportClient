import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from '../../../api/axios'

const Sports = () => {

    const [sports, setSports] = useState([]);

    useEffect(() => {
        getSports();
    })

    const getSports = async () => {
        const response = await axios.get('/Sport');
        setSports(response.data);

    }

  return (
   <nav>
        {
            sports.map(sport => (
                <ul key = {sport.id}>
                    <li key = {sport.id}>
                        <Link to = {`./sports/${sport.id}`}>{sport.name}</Link>
                    </li>
                </ul>
            ))
        }
   </nav>
  )
}

export default Sports
