import React from 'react';
import classes from './Header.module.scss';

const header = (props) => {
    let headerContent;
    if (props.isAuthenticated) {
        headerContent = (
            <ul>
                <li><a>Calendar</a></li>
                <li><a>Friends</a></li>
                <li><a>Hobby</a></li>
                <li><a>Profile</a></li>
            </ul>
        )
    } else {
        headerContent = (
            <ul>
                <li><a onClick={() => props.displayLogin(true)}>Login</a></li>
                <li><a onClick={() => props.displayLogin(false)}>Register</a></li>
            </ul>
        )
    }

    return (
        <nav className={classes.Nav}>
            <span>myHobby</span>
            <ul>
                {headerContent}
            </ul>
        </nav>
    )
}
export default header;
