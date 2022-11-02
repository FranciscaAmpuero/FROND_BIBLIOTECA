import React from 'react'
import { AppBar, IconButton, Typography, Button, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router'
import { Menu as MenuIcon } from '@material-ui/icons'

const Header = ({ setOpen }) => {
    const history = useHistory()
    
    return (
        <AppBar color='secondary'>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography style={{ flexGrow: 1 }}>Biblioteca Ciisa </Typography>
                <Button variant='text' color='inherit' onClick={() => {
                    history.push('/app')
                }}>Listado libros</Button>
                <Button variant='text' color='inherit' onClick={() => {
                    history.push('/prestamos')
                }}>Prestamo de Libros</Button>
                <Button variant='text' color='inherit' onClick={() => {
                    localStorage.clear()
                    history.push('/login')
                }}>Log out</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
