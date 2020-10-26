import React from 'react';
import './Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="Header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5a/Shaheen_College_Logo_Dhaka.png" alt="Logo" />
                <h3>BAF Shaheen College</h3>
            </div>

            <div className="header__input">
                <SearchIcon />
                <input spellCheck="false" placeholder="Search" type="text" />
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar
                    className="header__avatar"
                    src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
                    <h4>Username</h4>
                </div>
                
                <div className="header__icons">

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                </div>
                
            </div>
        </div>
    )
}

export default Header
