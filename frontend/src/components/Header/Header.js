import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import NavBar from '../NavBar/NavBar.js';
import styles from './Header.module.css';

const links = [
    {
        link:"home",
        name:"home" 
    }, 
    {
        link:"about",
        name:"about me"
    }, 
    {
        link:"contact",
        name:"contact me"
    }
]

class Header extends Component {
    render() {
        return (
            <div className={ styles.header }>
                <Logo />
                <NavBar route={ links } />
            </div>
        );
    }
}

export default Header;