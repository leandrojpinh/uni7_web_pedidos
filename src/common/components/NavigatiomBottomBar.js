import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Menu from '@material-ui/icons/Menu';
import Equalizer from '@material-ui/icons/Equalizer';
import Add from '@material-ui/icons/Add';

import { updateTitle } from '../../actions/aplicacaoActions'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'dodgerblue',
        bottom: 0,
        position: 'fixed',
        width: '100%'
    },
});

const NavigationBottomBar = props => {
    const classes = useStyles();

    return (
        <div>
            <BottomNavigation value={props.item}
                className={classes.root} >
                <BottomNavigationAction component={Link} to='/' style={{ color: 'white' }} label='Acompanhar' icon={<Menu />}
                    onClick={() => props.updateTitle('Acompanhar')} />
                <BottomNavigationAction component={Link} to='/pedido' style={{ color: 'white' }} label='Pedidos' icon={<Equalizer />}
                    onClick={() => props.updateTitle('Todos os Pedidos')} />
                <BottomNavigationAction component={Link} to='/pedido/novo' style={{ color: 'white' }} label='Novo' icon={<Add />}
                    onClick={() => props.updateTitle('Novo Pedido')} />
            </BottomNavigation>
        </div>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateTitle }, dispatch)
export default connect(null, mapDispatchToProps)(NavigationBottomBar);
