import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../../common/TextField';
import Button from '@material-ui/core/Button';
import { reduxForm, Field } from 'redux-form'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 10,
        marginTop: 20
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const PedidoForm = (props) => {
    const classes = useStyles();
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <Field component={TextField} name='cliente' label='Nome do Cliente' />
            <Field component={TextField} name='cpf' label='CPF' />
            <Field component={TextField} name='descricao' label='Descrição do pedido' multiline rows={5} />

            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Registrar
            </Button>
        </form>
    );
}

export default reduxForm({ form: 'pedidoForm' })(PedidoForm)