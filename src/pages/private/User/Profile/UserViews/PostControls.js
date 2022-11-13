import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from '../../../../../api/axios'
import useAuth from '../../../../../hooks/useAuth'
import styles from './Post.module.css'

const PostControls = ({id, getPost}) => {

    const {auth} = useAuth();
    const [body, setBody] = useState('');

    const addComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/comment?userProfileId=${auth.userId}&wallPostID=${id}`, {
                body: body   
            })
            
            getPost();
            setBody('')
            

        }
        catch (err) {
            console.error(err)
        }

    }
  return (
    <form className = {styles.controlsContainer}>
      <input type = "text" placeholder='add a comment' className = {styles.commentInput} onChange={(e) => setBody(e.target.value)} value = {body}></input>
      <Button variant="primary" className = {styles.commentAddButton} onClick = {addComment}>Add</Button>{' '}
    </form>
  )
}

export default PostControls
