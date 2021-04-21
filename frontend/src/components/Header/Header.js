import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import NavBar from '../NavBar/NavBar.js';
import Styles from './Header.module.css';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Logo />
                <NavBar />
            </div>
        );
    }
}

export default Header;