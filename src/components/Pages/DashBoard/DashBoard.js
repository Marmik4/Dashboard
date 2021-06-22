import React, { useState } from 'react';

import { Tabs, Paper, Tab } from '@material-ui/core';
import TabPanel from '../../TabPanel/TabPanel';
import classes from './DashBoard.module.css';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import TestCards from '../../TestCards/TestCards';

const DashBoard = () => {
    const [value,setValue] = useState(1);

    const handleTabs = (event,val) => {
        setValue(val);
    }

    return(
        <div className = {classes.Wrapper}>
            <header className = {classes.Header}>
                <Toolbar/>
            </header>
            <main className = {classes.Container}>
                <div className = {classes.Content}>          
                    <h1>Hi, Marmik</h1>
                    <div className = {classes.TabBar}>
                        <Tabs value = {value} onChange = {handleTabs} varient = "fullWidth" centered>
                        <Tab label = "Active" />
                        <Tab label = "Upcoming" />
                        <Tab label = "Past" />
                    </Tabs>
                    </div>
                    <div className = {classes.PaperContent}>
                        <TabPanel value = {value} index = {0}>
                            <TestCards>Active</TestCards>
                        </TabPanel>
                        <TabPanel value = {value} index = {1}>
                            <TestCards>Test1</TestCards>
                            <TestCards>Test2</TestCards>
                            <TestCards>Test3</TestCards>
                            <TestCards>Test4</TestCards>
                            <TestCards>Test5</TestCards>
                            <TestCards>Test6</TestCards>
                        </TabPanel>
                        <TabPanel value = {value} index = {2}>
                            <TestCards>Past</TestCards>
                        </TabPanel>
                    </div>
                </div>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default DashBoard;