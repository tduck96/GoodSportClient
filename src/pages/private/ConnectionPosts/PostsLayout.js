import React from 'react'
import styles from '../Handlers/Handler.module.css';
import { Outlet } from 'react-router-dom';

const PostsLayout = () => {
  return (
    <main className = {styles.app}>
    <div className = {styles.handlerContainer}>
      <section className = {styles.filtertitlecontainer}>
        <h3 className = {styles.details2}> View Connection Posts</h3>
    </section>
    
      <Outlet />

      </div>
  </main>
  )
  
}

export default PostsLayout
