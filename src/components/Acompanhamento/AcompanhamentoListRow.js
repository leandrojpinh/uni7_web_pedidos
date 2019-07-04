import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import {
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Button
} from '@material-ui/core';
import { SkipNext, Clear } from '@material-ui/icons';

import { updateStatus, remove } from '../../actions/pedidoActions'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 5,
    },
    actions: {
        margin: 5,
    },
    details: {
        flexDirection: "row"
    }
}))

const AcompanhamentoListRow = props => {
    const { pedido, color } = props
    const [expanded, setExpanded] = React.useState('');

    const classes = useStyles()

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const fontColor = color !== '' ? 'white' : ''

    return (
        <ExpansionPanel className={classes.root} expanded={expanded === pedido.id} onChange={handleChange(pedido.id)} >
            <ExpansionPanelSummary style={{ backgroundColor: `${color}`, color: `${fontColor}` }}>
                <Typography>{pedido.cliente}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
                <Typography>{pedido.descricao}</Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelDetails>
                <Button fullWidth={true} variant="contained" color='primary' className={classes.actions} onClick={() => props.updateStatus(pedido)}>
                    <SkipNext />
                </Button>
                <Button fullWidth={true} variant="contained" color='secondary' className={classes.actions} onClick={() => props.remove(pedido)}>
                    <Clear />
                </Button>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateStatus, remove }, dispatch);

export default connect(null, mapDispatchToProps)(AcompanhamentoListRow)