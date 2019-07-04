import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Menu from '@material-ui/icons/Menu';
import Equalizer from '@material-ui/icons/Equalizer';
import Add from '@material-ui/icons/Add';



const useStyles = makeStyles({
    root: {
        backgroundColor: 'dodgerblue',
        bottom: 0,
        position: 'fixed',
        width: '100%'
    },
});

function NavigationBottomBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <BottomNavigation value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className={classes.root} >
                <BottomNavigationAction component={Link} to='/' style={{ color: 'white' }} label='Acompanhar' icon={<Menu />} />
                <BottomNavigationAction component={Link} to='/pedido' style={{ color: 'white' }} label='Pedidos' icon={<Equalizer style={{ color: 'white' }} />} />
                <BottomNavigationAction component={Link} to='/pedido/novo' style={{ color: 'white' }} label='Novo' icon={<Add style={{ color: 'white' }} />} />
            </BottomNavigation>
        </div>
    );
}

export default NavigationBottomBar;
