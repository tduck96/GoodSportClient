import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './PhotoUpload.module.css';
import axios from '../../../../../api/axios';
import Spin from '../../../../../components/layout/Spin';
import SpinnerForUpload from '../../../../../components/SpinnerForUpload';
import UploadIcon from '../../../../../components/UploadIcon';
import uploadicon from './upload.png';

const PhotoUpload = ({setUrl, loading, setLoading, url}) => {

    const [file, setFile] = useState('')
    const isMounted = useRef(false);
    const [changer, setChanger] = useState(<UploadIcon />);
    const [imgLoad, setImgLoad] = useState(false);

    useEffect(() => {
      photoSubmit();
      setChanger(<SpinnerForUpload />)
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
          setImgLoad(true);
         
         }
         
      catch (err) {
         console.error(err);
     }
     setChanger(<UploadIcon />);
   }

  return (
    <section>
    <form>
    <section className = {styles.uploadContainer}>
      <p>Upload:</p>
        <label className = {styles.customUpload}> {changer}
              <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
                          e.target.files[0])} 
               />
          </label>   
    </section>
       <p className = {styles.fileName}>{file.name}</p>
       
       { !imgLoad ? <p></p> :
       <img src = {url} alt = '' className = {styles.uploadedImg}></img>
       }
       </form>
       
  </section>
    )
}

export default PhotoUpload
