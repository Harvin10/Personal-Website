import React from 'react';
import Styles from './NavBar.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function NavBar(props) {
    return (
        <Router>
            {props.links.forEach((link) => {
                (<Link to={link}>{link}</Link>)
            })}
        </Router>
    );
}

export default NavBar;