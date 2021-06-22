import React from 'react';
import classes from './Register.module.css'

const register = () => (
    <div className = {classes.LoginContainer}>
        <div className = {classes.LoginWrapper}>
            <form className = {classes.Form}>
                <h1 style = {{color: "#E74444"}}>
                    Sign Up
                </h1>
                <input type="email" className = {classes.Textfields} placeholder="Email"/>
                <input type="text" className = {classes.Textfields} placeholder="First Name"/>
                <input type="text" className = {classes.Textfields} placeholder="Last Name"/>
                <input type="password" className = {classes.Textfields} placeholder="Password" />
                <input type="password" className = {classes.Textfields} placeholder="Confirm Password" />
                <a href="/register" style = {{fontSize : 12}}>Login?</a>
                <button type="submit" className = {classes.Login}>Sign Up</button>
            </form>
        </div>
    </div>
);

export default register;