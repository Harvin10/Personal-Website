import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import styles from './PopUpMenu.module.css';

function PopUpMenu(props) {
    return (
        <div className={styles.nav_bar}>
            <NavBar route={ props.route} />
        </div>
    );
}

export default PopUpMenu;