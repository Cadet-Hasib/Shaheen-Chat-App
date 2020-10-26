import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GroupIcon from '@material-ui/icons/Group';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';

function Sidebar() {
    return (
        <div className="Sidebar">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/5a/Shaheen_College_Logo_Dhaka.png" alt="Logo" />

            <SidebarOption Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={LocalHospitalIcon} text="Covid 19 Info" />
            <SidebarOption Icon={SupervisedUserCircleIcon} text="Freinds" />
            <SidebarOption Icon={GroupIcon} text="Groups" />
            <SidebarOption Icon={EmojiEmotionsIcon} text="Memes" />
            <SidebarOption Icon={FlagIcon} text="Alerts" />
            <SidebarOption Icon={StorefrontIcon} text="Trending" />
        </div>
    )
}

export default Sidebar
