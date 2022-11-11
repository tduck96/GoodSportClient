import React from 'react'
import { useParams } from 'react-router-dom'
import DogSports from './DogSports';

const AddDogSport = () => {
    const {id} = useParams();

  return (
    <div>
      <label>Sports</label>
      

    </div>
  )
}

export default AddDogSport
