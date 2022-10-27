import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../../../../api/axios';
import useAuth from '../../../../hooks/useAuth';

const PostCreate = ({getProfileData}) => {

    const [body, setBody] = useState('');
    const [file, setFile] = useState('');
    const [url, setUrl] = useState('');
    const { auth } = useAuth();
    const navigate = useNavigate();

    const photoSubmit = async (e) => {
        e.preventDefault();
      
         const data = new FormData();
         data.append("file", file);
      
         try {
            const response = await axios.post(`/profile/addprofilepic/`, 
             data
             );
            console.log(response.data)
            setUrl(response.data);
            }
         catch (err) {
            console.error(err);
        }
      }

      const postSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`/wallpost/${auth.userId}`,
            {
                Body: body,
                photoUrl: url
            })
            console.log(response.data);
        } 
        catch(err) {
            console.error(err);
        }

        setUrl('');
        setBody('');
        setFile('');
        getProfileData();

      }
  return (
    <div>
      <section>
        <form>
            <input type = "text" placeholder='Whats going on?' onChange= {(e) => setBody(e.target.value)}></input>
            <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
                        e.target.files[0])
                    }  />
            <button onClick = {photoSubmit} >Upload Image</button>
            <img src = {url} alt = ''></img>
             <button onClick = {postSubmit}>Create Post</button>
         </form>
    </section>
    </div>
  )
}

export default PostCreate
