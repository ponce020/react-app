import {ExpandMoreOutlined} from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://upload.wikimedia.org/wikipedia/commons/6/66/J._R._R._Tolkien%2C_1940s.jpg' title='J.R.R. Tolkien'  />
            <SidebarRow Icon={LocalHospitalIcon} title='Healt'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Personal'/>
            <SidebarRow Icon={ChatIcon} title='Recursos'/>
            <SidebarRow Icon={StorefrontIcon} title='Contabilidad'/>
            <SidebarRow Icon={PeopleIcon} title='Healt'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Personal'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='Recursos'/>

        </div>
    )
}

export default Sidebar
