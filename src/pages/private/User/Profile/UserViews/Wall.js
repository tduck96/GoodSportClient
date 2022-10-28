import { useState, useEffect } from 'react'
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';

const Wall = () => {
    const [wallPosts, setWallPosts] = useState([]);
    const { auth } = useAuth(); 

    useEffect(() => {

    })
  
  return (
    <section>
       <form>
          <input type = "text" placeholder='Whats going on?'></input>
          <label>
            Upload
           <input type = "file" ></input>
           </label>
          <button type = 'submit' >Submit</button>
        </form>
    </section>
  )
}

export default Wall
