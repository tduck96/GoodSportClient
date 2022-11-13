import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';
import UploadButton from './UploadButton';
import styles from './PostCreate.module.css'
import { Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap'


const PostCreate = ({getProfileData}) => {

    const [body, setBody] = useState('');
    const [file, setFile] = useState('');
    const [url, setUrl] = useState('');
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

   
useEffect(() => {
  setLoading(true);
  photoSubmit();
}, [file]);

    const photoSubmit = async (e) => {
      
         const data = new FormData();
         data.append("file", file);
      
         try {
            const response = await axios.post(`/profile/addprofilepic/`, 
             data
             );
            console.log(response.data)
            setUrl(response.data);
            setLoading(false);
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
        <form className = {styles.form}>
          <section className = {styles.inputSection}>
              <input type = "text" placeholder='Whats going on?' onChange= {(e) => setBody(e.target.value)} className = {styles.input}></input>
              <label className = {styles.customUpload}> +
              <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
                          e.target.files[0])
                      }  />
                      </label>
              <p className = {styles.fileName}>{file.name}</p>
             </section>

             {
              loading === true ? <Spinner /> : <p></p>
             }

             {
              url ? <img src = {url} alt = 'pic' className = {styles.uploaded}></img>
                   : <p></p>
             }
              
             
             <section className = {styles.buttonSection}>

             <Button variant="primary" type="submit" onClick = {postSubmit} className = {styles.submit}>
              Submit
            </Button>

             </section>
             
             
         </form>
    </section>
    </div>
  )
}

export default PostCreate
