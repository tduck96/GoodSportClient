import React, { useEffect } from 'react'
import styles from './Comments.module.css'

const Comments = ({comments}) => {
   
  return (
    <div >
      {
      comments.map(note => (
         <ul key = {note.id} className = {styles.container}>
            <img src = {note.writerPhotoUrl} alt = 'commentthumbail' className = {styles.commentPhoto}></img>
                <section className = {styles.commentContainer}>
                    <p className = {styles.info}><strong>{note.writerName} </strong> </p>
                    <p className = {styles.info}><i>{note.body}</i></p>
                </section>

         </ul>
      )) 
      }
    </div>
  )
}

export default Comments
