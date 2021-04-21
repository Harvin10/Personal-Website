import React from 'react';
import Styles from './NavBar.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function NavBar(props) {
    return (
        <Router>
                <Link to={props.link}>{props.name}</Link>
        </Router>
    );
}

export default NavBar;