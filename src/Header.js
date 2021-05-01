import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Unico_Anello.png" alt="The One Ring"/>
                <div className='header__input'>
                <SearchIcon/>
                <input placeholder='Buscar' type="text"/>
                </div>
            </div>
            
            
            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <HomeIcon fontSize='large'/>
                </div>
            </div>


            <div className='header__right'>
                <div className='header__info'>
                    <Avatar
                    src={user.photoURL}
                    />
                    <h4>{user.displayName}</h4>
                </div>
                <div className='header__option'>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton><IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default Header
