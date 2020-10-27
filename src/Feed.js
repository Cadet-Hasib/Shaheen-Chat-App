import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="Feed">
            <MessageSender />

            <Post
            profilePic="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            message="Hello World this is a test message"
            timestamp="Timestamp..."
            username="Username"
            image="https://miro.medium.com/max/1000/0*WFi0MgZVvesFN-jq" />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
