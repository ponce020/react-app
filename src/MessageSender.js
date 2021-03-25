import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';
import VideoLibraryIcon from '@material-ui/icons/Videocam'
import { InsertEmoticon, PhotoLibrary } from '@material-ui/icons';


function MessageSender() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar/>
                <form>
                    <input placeholder={`Whats in your mind?`}/>
                    <input placeholder='Image url (optional)'/>
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className='messageSender__botton'>
                <div className='messageSender__option'>
                <VideoLibraryIcon style={{color:'red'}}/>
                <h3>Live Video</h3>
                </div>
                
                <PhotoLibrary></PhotoLibrary>
                <InsertEmoticon></InsertEmoticon>
            </div>
        </div>
    )
}

export default MessageSender
