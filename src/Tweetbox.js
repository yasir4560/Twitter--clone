import React, { useState } from 'react'
import "./Tweetbox.css";
import { Avatar, Button } from '@mui/material';
import dataBase from './firebase';

function Tweetbox() {
  const[tweetMessage, setTweetMessage] = useState('');
  const[tweetImage, setTweetImage] = useState('');


 


  const sendTweet = e => {
       e.preventDefault();
       if (tweetMessage.trim() === '') {
        alert('Tweet content cannot be empty.');
        return;
       }
    dataBase.collection('posts').add({
      displayName: "Yasir",
      userName: "syedyasir",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "profile.jpg"
    })
    setTweetMessage("");
    setTweetImage("");

  }
  return (
    <div className='tweetBox'>
        <form>
         <div className="tweetBox_input">
          <Avatar src='profile.jpg' />
          <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />
         </div>
         <input onChange={e => setTweetImage(e.target.value)}
         value={tweetImage}
         className='tweetbox_post_image' placeholder="Post image" type="text" />
       <Button 
       type='submit'
       onClick={sendTweet}
       className='feed_tweet_btn'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default Tweetbox
