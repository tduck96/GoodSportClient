import React from 'react'
import { useState } from 'react'
import styles from './PhotoUpload.module.css'
const PhotoUpload = () => {
    const [file, setFile] = useState('')

  return (
    
    <form>
    <section>
    
        <label> +
        <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"></input>
        
        
                </label>
        
       </section>
       </form>

    )
}

export default PhotoUpload
