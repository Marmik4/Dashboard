import React from 'react';

import classes from './Login.module.css';
import NavigationItem from '../../Navigation/NavigationItem/NavigationItem';

const login = () => (
    <div className = {classes.LoginContainer}>
        <div className = {classes.LoginWrapper}>
            <form className = {classes.Form}>
                <h1 style = {{color: "#E74444"}}>
                    Log In
                </h1>
                <input type="email" className = {classes.Textfields} placeholder="Email"/>
                <input type="password" className = {classes.Textfields} placeholder="Password" />
                <a href="/" style = {{fontSize : 12}}>Forgot Password?</a>
                {/*<button type="submit" className = {classes.Login}>Log In</button>*/}
                <NavigationItem link = "/dashboard">Log In</NavigationItem>
            </form>
        </div>
    </div>
);

export default login;