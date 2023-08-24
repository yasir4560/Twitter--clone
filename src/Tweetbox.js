import React from 'react'
import "./Tweetbox.css";
import { Avatar, Button } from '@mui/material';

function Tweetbox() {
  return (
    <div className='tweetBox'>
        <form>
         <div className="tweetBox_input">
          <Avatar src='profile.jpg' />
          <input placeholder="What's happening?" type="text" />
         </div>
         <input className='tweetbox_post_image' placeholder="Post image" type="text" />
       <Button className='feed_tweet_btn'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default Tweetbox
