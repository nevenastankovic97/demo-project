import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Contacts',
        path: '/contacts',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <AiIcons.AiFillPicture />,
        cName: 'nav-text'
    }
]


