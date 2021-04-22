import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import styles from './PopUpMenu.module.css';

function PopUpMenu(props) {
    return (
        <div className={styles.pop_up_menu}>
            <NavBar route={ props.route} />
        </div>
    );
}

export default PopUpMenu;