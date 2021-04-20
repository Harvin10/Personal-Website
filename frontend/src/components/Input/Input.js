import React from 'react';
import Styles from './Input.module.css';

function Input(props) {
    return (
        <input type={ props.type } className={ Styles.input }/>
    );
}

export default Input;