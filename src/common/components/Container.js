import React from 'react'
import { Container } from '@material-ui/core'

export default props => {
    return (
        <Container maxWidth="md" style={{ marginTop: 20, marginBottom: 65 }}>
            {props.children}
        </Container>
    )
}