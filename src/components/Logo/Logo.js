import React from 'react';

import AcciojobLogo from '../../assets/Images/Acciojob_Logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <a className={classes.Logo} href="/">
    <img className={classes.Logo} src={AcciojobLogo} alt='Acciojob Logo'/>
    </a>
);

export default logo;