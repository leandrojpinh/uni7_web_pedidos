import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginBottom: 5
    }
}));

const DashboardListRow = props => {
    const classes = useStyles();
    const { dashboard } = props

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item xs={12} container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography>
                                {dashboard.status}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography>{dashboard.count}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DashboardListRow