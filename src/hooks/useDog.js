import React, { useContext } from 'react'
import DogContext from '../context/DogContext'

const useDog = () => {

  return useContext(DogContext)
    
}

export default useDog
