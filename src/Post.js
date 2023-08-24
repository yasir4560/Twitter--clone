import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUserRounded } from '@mui/icons-material';
function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_head">
            <div className="post_header_text">
                <h3>{displayName}{" "} <span className='post_header_special'>
                    {verified && <VerifiedUserRounded className='post_badge'/>} @{username} </span>  <span></span>
                   </h3>
            </div>
            <div className="post_header_description">
                <p>{text}</p>
            </div>
        </div>
        <img src={image} alt="" />
        <div className="post_footer">
            <ChatBubbleOutline fontSize='small'/>
            <Repeat fontSize='small' />
            <FavoriteBorder fontSize='small' />
            <Publish fontSize='small' />

        </div>
      </div>
    </div>
  )
}

export default Post
