import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../api/axios';

const Club = () => {

  const { id } = useParams();
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    getClubData();
  }, []);

  const getClubData = async () => {
      try {
        const response = await axios.get(`/club/${id}`);
        setClubData([response.data])
      } catch (err) {
        console.error(err);
  }
}

console.log(clubData);

  return (
    <div>
    {
      clubData.map(club => (
        <div key = {club.id}>
          <h1> {club.name} </h1>
          </div>
      ))
    }
    <h1> CLUB INFO</h1>
    </div>
  )
}

export default Club
