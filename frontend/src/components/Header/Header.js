import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import NavBar from '../NavBar/NavBar.js';
import NavBar from '../PopUpMenu/PopUpMenu.js';
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
    constructor(props) {
        super(props);
        this.state = {
            mobile:false
        }
    }
    render() {
        return (
            <div className={ styles.header }>
                <Logo />
                {this.mobile ? <PopUpMenu /> : <NavBar route={ links } />}
                
            </div>
        );
    }
}

export default Header;