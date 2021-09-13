/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : header
 **/
import {
    AppBar, Button, makeStyles, Toolbar, IconButton, Typography
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const BaseHeader = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Easy Oops
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default BaseHeader;