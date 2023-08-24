import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Sidebar.css";
import Sidebaroptions from './Sidebaroptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
function Sidebar() {
  return (
    <div className='sidebar'>
       {/* twitter-icon */}
        <TwitterIcon className='sidebar-tweeter-icon' />
       {/* sidebar-options */}
<Sidebaroptions active Icon = {HomeIcon} text = "Home"/>
<Sidebaroptions  Icon = {SearchIcon} text = "Explore"/>
<Sidebaroptions  Icon = {NotificationsNoneIcon} text = "Notifications"/>
<Sidebaroptions  Icon = {MailOutlineIcon} text = "Messages"/>
<Sidebaroptions  Icon = {BookmarkBorderIcon} text = "Bookmarks"/>
<Sidebaroptions  Icon = {ListAltIcon} text = "List"/>
<Sidebaroptions  Icon = {PermIdentityIcon} text = "Profile"/>
<Sidebaroptions  Icon = {MoreHorizIcon} text = "More"/>

       {/* tweet->button */}

       <Button variant='outlined' className='sidebar-tweeet-btn' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar
