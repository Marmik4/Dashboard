import React from 'react';

import classes from './TabPanel.module.css';

const tabPanel = (props, value, index) => (
    <div className = {classes.TabPanel}>
        {props.value === props.index ? <h1 className = {classes.TabComponents}>{props.children}</h1> : null}
    </div>
);

export default tabPanel;