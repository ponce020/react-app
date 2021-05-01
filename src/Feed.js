import React from 'react';
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            {/* StoryReel */}
            <StoryReel/>
            {/* MessegerSender */}
            <MessageSender/>
            {/* Post */}
            <Post
             profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYk75issln6GadG-O5v0mokSlJm2ictam8mM3QetpZkHddtho58jAzmFyenNiZ9SMND0&usqp=CAU'
             message='Saruman the Sith xd'
             timestamp='This is a timestamp'
             username='Ian McKellen'
             image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f460f8fd-883e-4c3a-9749-e87728b5ae0d/d5j174x-b3f77b76-5924-426f-a781-f9fc54bd7bb3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjQ2MGY4ZmQtODgzZS00YzNhLTk3NDktZTg3NzI4YjVhZTBkXC9kNWoxNzR4LWIzZjc3Yjc2LTU5MjQtNDI2Zi1hNzgxLWY5ZmM1NGJkN2JiMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2m1epp6XaLF6bfJjU4TMOiL0FMtSD1MGUYqhL9rkWwg'
            />
            <Post 
                profilePic='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/01/christopher-tolkien-1844797.jpg?itok=6wlX_RDf'
                message='Luhtien'
                timestamp='This is a timestamp'
                username='Christopher Tolkien'
                image='https://upload.wikimedia.org/wikipedia/commons/f/fb/Edith_Bratt%2C_The_Victoria_Studio%2C_201_Broad_Street%2C_Birmingham%2C_aged_17%2C_1906%2C_Tolkien_Trust.jpg'/>
            <Post
                profilePic='https://www.biografiasyvidas.com/biografia/m/fotos/mortensen.jpg'
                message='The grand grand father'
                timestamp='This is a timestamp'
                username='Viggo Mortensen'
                image='https://pbs.twimg.com/media/EA02VckX4AAYSDj.jpg'
            />
            
        </div>
    )
}

export default Feed
