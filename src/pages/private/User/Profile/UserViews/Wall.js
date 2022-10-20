import { useState, useEffect } from 'react'
import axios from '../../../../../api/axios';
import { MDBFile } from 'mdb-react-ui-kit';
import useAuth from '../../../../../hooks/useAuth';

const Wall = () => {
    const [wallPosts, setWallPosts] = useState([]);
    
    const submitHandler = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`/wallpost/${auth?.id}`,
         {
          body: "Hey"
         }
        );
        console.log(response.data);
      }
      catch (err) {
        console.error(err);
      }
      getProfileData();
    }
  
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
