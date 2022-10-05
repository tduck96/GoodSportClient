import {useState, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getClubs();
  }, []);

  const getClubs = async () => {
    try {
      let response = await axios.get('/club');
        console.log(response.data);
        setClubs(response.data)

        } catch (err) {
        console.error(err);
  }
}



  return (
    <div>      
      <div>
        <h1> By Sport:</h1> 
      </div>



      { clubs.map(club => (
        <ul key = {club.id}>
          <li key = {club.id}>
            <Link to = {`/clubs/${club.id}`}><div key = {club.id}>
              <h1> {club.name} </h1>
            </div>
            </Link>
          </li>
        </ul>
        ))
      }
   </div>
  )
  
}

export default Clubs
