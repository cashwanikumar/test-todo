import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import InputWrapper from './InputWrapper';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Header(props) {
    return (
        <header>
            <Menu menuButton={<MenuButton>Open menu</MenuButton>} transition>
                <MenuItem>New File</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Close Window</MenuItem>
            </Menu>
            <h1>Things To Do</h1>
            <h3>Subtitle note</h3>
            <InputWrapper {...props}/>
        </header>
    );
}
