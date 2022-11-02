import React, { Fragment, useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaLibros from '../../ListaLibros';
import Form from '../../Form';


function Dashboard () {

    const [libro, setLibro] = useState({
        nombre: '',
        autor: '',
        editorial: '',
        categoria: '',
        cantidad: '0',
        estado: ''
    })

    const [libros, setLibros] = useState ([])

    const [listUpdate, setListUpdate] = useState (false)


    useEffect(() => {
        const getLibros = () => {
            fetch('http://localhost:9000/api')
            .then(res => res.json())
            .then(res => setLibros(res))
        }
        getLibros()
        setListUpdate(false)
        }, [listUpdate])

    

    return (        
        <Fragment>
        <div class="container  align-items-center">
            <div class="card bg-ligth textw-white">
        <div>
            <Typography variant='h3' className='text-center'>Bienvenid@ a la biblioteca Ciisa</Typography>
        </div>
        <br></br>
        <br></br>
        <div>
            
            <br></br>
            <div className='row'>
                <div className='col-7'>
                <Typography variant='h5' style={{textAlign: 'center'}}> Listado de libros disponibles en biblioteca Ciisa</Typography>
                <ListaLibros libro={libro} setLibro={setLibro} libros={libros} setListUpdate={setListUpdate} />
                </div>
                <div className='col-5'>
                <Typography variant='h5' style={{textAlign: 'center'}}>Formulario para agregar o editar libros</Typography>
                <Form libro={libro} setLibro={setLibro} />
                </div>
            </div>
        </div>
        </div>
        </div>
        </Fragment> 

)}


export default Dashboard
