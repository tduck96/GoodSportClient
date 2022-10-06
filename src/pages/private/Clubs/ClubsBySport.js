import {useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom';
import axios from '../../../api/axios';

const ClubsBySport = () => {
  const [clubs, setClubs] = useState([]);
  const {id} = useParams();

    useEffect(() => {
      getClubsByLocation();
    }, []);

  const getClubsByLocation = async () => {
    const response = await axios.get(`/sport/clubs/${id}`);
    setClubs(response.data);
  }
  return (
    <div>
      {
       clubs.map(club => (
        <ul key = {club.id}>
            <Link to = {`/clubs/${club.id}`}>
              <div key = {club.id}>
                <h1> {club.name} </h1>
              </div>
            </Link>
        </ul>
        ))
      }
    </div>
  )
  return (
    <div>
      
    </div>
  )
}

export default ClubsBySport
