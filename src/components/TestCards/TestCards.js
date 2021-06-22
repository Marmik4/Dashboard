import React from 'react';

import { Card, CardContent, Grid, Paper, Box } from '@material-ui/core';
import classes from './TestCards.module.css';

const testCards = (props) => (
        <Grid container spacing = {4} className = {classes.GridWrapper}>
            <Grid item xs = {1}  className = {classes.GridContent}>
                <Paper className = {classes.CardWrapper}>
                    <Box p ={1}>
                    {props.children}
                    </Box>
                </Paper>
            </Grid>
        </Grid>
);

export default testCards;

