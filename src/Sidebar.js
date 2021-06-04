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
import { useStateValue } from './StateProvider';


function Sidebar() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow
            src={user.photoURL}
            title={user.displayName}  />
            <SidebarRow Icon={LocalHospitalIcon} title='Salud'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Bandera'/>
            <SidebarRow Icon={ChatIcon} title='Mensaje'/>
            <SidebarRow Icon={StorefrontIcon} title='Tienda'/>
            <SidebarRow Icon={PeopleIcon} title='Persona'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Video'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='Flechita'/>

        </div>
    )
}

export default Sidebar
