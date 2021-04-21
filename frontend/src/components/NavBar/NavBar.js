import React from 'react';
import Hyperlink from '../Hyperlink/Hyperlink.js';
import Styles from './NavBar.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function NavBar(props) {
    return (
        <Router>
            <div className="nav_bar">
                {props.route.map(route => {
                        return <Hyperlink route={route} />
                    })
                }
            </div>
        </Router>
    );
}

export default NavBar;