import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

export default ({
    input,
    label,
    ...custom
}) => {
    const classes = useStyles()
    return (
        <TextField
            className={classes.textField}
            label={label}
            margin="normal"
            fullWidth
            {...input}
            {...custom}
        />
    )
}