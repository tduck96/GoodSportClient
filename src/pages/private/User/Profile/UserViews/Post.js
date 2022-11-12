import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../../../api/axios'
import styles from './Post.module.css';
import PostControls from './PostControls'
import Comments from './Comments';

const Post = () => {

    const [postDetails, setPostDetails] = useState([]);
    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getPostDetails();
    },[]);

    const getPostDetails = async () => {
        try { 
            const response = await axios.get(`/wallpost/${id}`);
            console.log(response.data)
            setPostDetails([response.data])
            setComments(response.data.comments)
         } 
         catch(err) {
            console.error(err);
         }
    }
  return (
    <div className = {styles.postContainer}>
      {postDetails.map(post => (
        <ul key = {post.id} className = {styles.container}>
          <section className = {styles.section}>
            <img src = {post.userPhoto} alt = 'userThumbnail' className = {styles.postThumbnail}></img>
            <p className = {styles.name}><strong>{post.name}</strong></p>
          </section>
          <p className = {styles.postBody}> {post.body} </p>
          <img src = {post.photoUrl} alt = 'postthumbnail' className = {styles.postPhoto}></img>
        </ul>
      ))}
      <PostControls id = {id} getPost = {getPostDetails}/>
      <Comments comments = {comments} />
    </div>
  )
}

export default Post
