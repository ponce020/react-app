import { Avatar, Button } from '@material-ui/core';
import React, {useState} from 'react';
import './MessageSender.css';
import VideoLibraryIcon from '@material-ui/icons/Videocam'
import { InsertEmoticon, PhotoLibrary } from '@material-ui/icons';


function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //some clever db stuff

        setInput('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar/>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input' 
                        placeholder={`Whats in your mind?`}/>

                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)} 
                        placeholder='Image url (optional)'/>
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideoLibraryIcon style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender__option'>
                    <PhotoLibrary style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className='messageSender__option'>
                    <InsertEmoticon style={{color:'blue'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
