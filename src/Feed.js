import React from 'react'
import "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';
// import db from './firebase';
import dataBase from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dataBase.collection('posts').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => doc.data())) 
    ))
  }, []);
  return (
    
       
      <div className="feed">
         {/* header */}
         <div className="feed_header">
         <h2>Home</h2>
      
         </div>
      

      {/* Tweetbox */}
      <Tweetbox />


      {/* post */}
      {posts.map(post => 
         <Post 
         displayName={post.displayName}
         username={post.username} 
         verified={post.verified}
         text={post.text}
         image={post.image}
         avatar={post.avatar}
   
         />
        )}
     
     
      </div>
    
  )
}

export default Feed
