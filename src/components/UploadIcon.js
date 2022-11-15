import React from 'react'
import uploadicon from '../pages/private/User/Profile/UserViews/upload.png'
import styles from './UploadIcon.module.css'
const UploadIcon = () => {
  return (
    <img src = {uploadicon} alt = 'uploadIcon' size ='sm' className = {styles.icon}></img>
  )
}

export default UploadIcon
