import React from 'react';
import styles from './Hyperlink.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Hyperlink(props) {
    return (
        <Router>
            <Link to={props.route.link} className={ styles.hyperlink }>{props.route.name}</Link>
        </Router>
    );
}

export default Hyperlink;