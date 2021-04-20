import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button(props) {
    const [isClick, setClick] = useState(false);
    let style = [styles.button];

    if(isClick) {
        style.push(styles.button_click);
    }

    return (
        <Router>
            <Link to={ props.redirect } className={ style.join(' ') } onClick={() => {
                setClick(true);
                setTimeout(() => {
                    setClick(false);
                }, 200) ;
            }}>
                { props.name }
            </Link>

            <Switch>
                <Route path={ props.redirect }>
                    <Test />
                </Route>
            </Switch>
        </Router>
    )
}

function Test() {
    return <h1>test</h1>;
}

export default Button;