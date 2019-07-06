import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginBottom: 5
    }
}));


export default props => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            { props.children }
        </Paper>
    )
}