import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../api/axios';

const Club = () => {

  const { id } = useParams();
  const [clubData, setClubData] = useState([]);
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    getClubData()
    .then(getSportData());
  }, []);

  const getClubData = async () => {
      try {
        const response = await axios.get(`/club/${id}`);
        setClubData([response.data])
      } catch (err) {
        console.error(err);
  }
};

const getSportData = async () => {
  try {
    const response = await axios.get(`/club/sports/${id}`);
    setSportData(response.data);
    

  }
  catch (err) {
    console.error(err);
  }
};

console.log(clubData);

  return (
    <div>
    {
      clubData.map(club => (
        <div key = {club.id}>
          <h1> ClubName:{club.name} </h1>
          <p> {club.location}</p>
          <h2> About Us!</h2>
          <p> {club.about}</p>
          <p> Founded: {club.founded}</p>
          </div>
      ))
    }
      <h1> Sports Available:</h1>
    {
      sportData.map(sport => (
        <ul>
          <li key = {sport.id}>
            <h1> {sport.name} </h1>
          </li>
        </ul>
      ))
    }
    
    </div>
  )
}

export default Club
