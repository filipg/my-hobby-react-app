import React from 'react';
import classes from './Auth.module.scss';

const auth = props => {
    if (props.displayLoginPage) {
        return (
            <form className={classes.Form}>
                <label>
                    E-mail:
                    <input type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <input className={classes.Button} type="submit" value="Submit" />
            </form>
        )
    } else {
        return (
            <form className={classes.Form}>
                <label>
                    E-mail:
                    <input type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <label>
                    Confirm password:
                    <input type="password" name="confirmPassword" />
                </label>
                <input className={classes.Button} type="submit" value="Submit" />
            </form>
        )
    }
}
export default auth;
