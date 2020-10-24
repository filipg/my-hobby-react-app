import React from 'react';
import classes from './Header.module.scss';

const header = (props) => {
    return (
        <nav className={classes.Nav}>
            <ul>
                <li><a>Calendar</a></li>
                <li><a>Friends</a></li>
                <li><a>Hobby</a></li>
                <li><a>Profile</a></li>
            </ul>
        </nav>
    )
}
export default header;
