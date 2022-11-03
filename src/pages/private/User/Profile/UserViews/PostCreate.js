import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';
import UploadButton from './UploadButton';
import styles from './PostCreate.module.css'


const PostCreate = ({getProfileData}) => {

    const [body, setBody] = useState('');
    const [file, setFile] = useState('');
    const [url, setUrl] = useState('');
    const { auth } = useAuth();
    const navigate = useNavigate();

    const photoSubmit = async (e) => {
      
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

        setUrl();
        setBody('');
        setFile('');
        getProfileData();

      }
  return (
    <div>
      <section className = {styles.container}>
        <form>
          <section className = {styles.inputSection}>
              <input type = "text" placeholder='Whats going on?' onChange= {(e) => setBody(e.target.value)} className = {styles.input}></input>
              <label className = {styles.customUpload}> +
              <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
                          e.target.files[0])
                      }  />
                      </label>
              <p>{file.name}</p>
             </section>
             <img src = {url} alt = '' className = {styles.uploaded}></img>
             <section className = {styles.buttonSection}>
            <UploadButton photoSubmit = {photoSubmit}/>
             <button onClick = {postSubmit} className = {styles.createButton}>Create Post</button>
             </section>
             
             
         </form>
    </section>
    </div>
  )
}

export default PostCreate
