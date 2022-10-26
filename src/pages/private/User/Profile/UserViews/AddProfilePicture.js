import React, { useState, useRef } from 'react'
import axios from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';
import styles from './User.module.css';

const AddProfilePicture = () => {

    const [file, setFile] = useState('');
    const {auth} = useAuth();
    const [url, setUrl] = useState('');
    

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("file", file);

        try {
         const response = await axios.post(`/profile/addprofilepic/${auth.userId}`, data);
         console.log(response.data)
         setUrl(response.data);
        }
        catch (err) {
            console.error(err);
        }
        
    }
    
    


  return (
    <section>
        <form method="post" encType="multipart/form-data" >
            <div>
                <label for="file">Choose file to upload</label>
                <input type="file"  id="file" name="file" multiple onChange={(e) => setFile(
                    e.target.files[0])
                }  />
            </div>
            <div>
                <button onClick = {onSubmit}>Submit</button>
            </div>
        </form>
        <img src = {url} alt = 'uploaded img' className = {styles.uploadedThumb}></img>
</section>
  )
}

export default AddProfilePicture
