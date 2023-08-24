import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import { Search } from '@mui/icons-material';

function Widgets() {
  return (
    <div className='widgets'>
     <div className="widgets_input">
        <Search className='widgets_searchicon' />
        <input placeholder='Search Twitter' type="text" />
     </div>

     <div className="widget_widgetContainer">
        <h2>what's happening</h2>
        <TwitterTweetEmbed tweetId={"1693961578947743933"} />

        <TwitterTimelineEmbed
        sourceType ="profile"
        screenName ="Haqiqatjou"
        options ={{height: 400}} />

        <TwitterShareButton 
        url={"https://www.linkedin.com/in/yasir-shah-96419a230/"}

        options = {{text: "#reactjs is awesome", via: "yasir-shah"}}

        />

        
     </div>

    </div>
  )
}

export default Widgets
