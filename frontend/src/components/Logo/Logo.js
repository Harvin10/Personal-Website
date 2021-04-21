import React from 'react';
import Styles from './Logo.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Logo() {
    return (
        <Router>
            <Link to='/'>
                <img src="" alt="Harvin Pratama Putra"/>
            </Link>
        </Router>
    );
}

export default Logo;