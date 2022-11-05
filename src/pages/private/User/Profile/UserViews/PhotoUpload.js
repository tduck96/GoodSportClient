import React from 'react'
import { useState, useEffect, useRef } from 'react'
import styles from './PhotoUpload.module.css'
import axios from '../../../../../api/axios'
import { Spinner } from 'react-bootstrap'

const PhotoUpload = ({setUrl, loading, setLoading, url}) => {

    const [file, setFile] = useState('')
    const isMounted = useRef(false);

    useEffect(() => {
      setLoading(true);
      photoSubmit();
    }, [file]);

    const photoSubmit = async (e) => {

      isMounted.current = true;

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
     isMounted.current = false;
   }

  return (
    <section>
    <form>
    <section className = {styles.uploadContainer}>
      <p>Upload:</p>
        <label className = {styles.customUpload}> +
              <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
                          e.target.files[0])} 
               />
          </label>   
    </section>
       <p className = {styles.fileName}>{file.name}</p>
      
       </form>
       
  </section>
    )
}

export default PhotoUpload
