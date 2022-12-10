import React from 'react'
import {useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';
import styles from './ConnectionPosts.module.css'
import LikeButton from './LikeButton';

const ConnectionPosts = () => {
    const [posts, setPosts] = useState([]);
    const {auth} = useAuth();

    
    useEffect(() => {
        getPosts();
    }, []);

    const getFormattedDate = (datestr) => {
        const date = new Date(datestr)
       
         return date.toLocaleDateString();
    }

    const getPosts = async () => {
        try {
            const response = await axios.get(`/Wallpost/following/${auth?.userId}`);
            console.log(response.data);
            setPosts(response.data);
        }
        catch(err)
        {
            console.error(err);
        }
    }
  return (
    <div className = {styles.container}>
      {
        posts.map(post => (
            <ul key = {post.id} className = {styles.border}>
                <section className = {styles.postMinusPhoto}>
                <div className = {styles.profileInfo}>
                    <img src = {post.userPhotoUrl} alt = 'profilepicture' className = {styles.userPhoto}></img>
                        <section className = {styles.nameDate}>
                            <Link to = {`/handlers/${post.userId}`}><p className = {styles.name}>{post.name}</p> </Link>
                            <p className = {styles.date}> {getFormattedDate(post.date)}</p>
                        </section>
                </div>
                    <Link to = {`/post/${post.id}`}> <p className = {styles.postBody}> {post.body}</p> </Link>
                </section>
                    <img src = {post.photoUrl} alt = 'postimage' className = {styles.postPhoto}></img>      
            </ul>
        ))
      }
    </div>
  )
}

export default ConnectionPosts
