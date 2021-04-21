import React from 'react';
import Styles from './NavBar.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function NavBar(props) {
    return (
        <Router>
            {props.route.map(route => {
                    return <Hyperlink route={route} />
                })
            }
        </Router>
    );
}

export default NavBar;