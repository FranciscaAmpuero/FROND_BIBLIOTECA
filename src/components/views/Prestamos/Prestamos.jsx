import React, { Fragment, useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaPrestamos from '../../ListaPrestamos';
import FormPrestamo from '../../FormPrestamo';

function Prestamos () {

    const [prestamo, setPrestamo] = useState({
        "id_libro": "",
        "id_usuario": "",
        "id_login": ""  
    })

    const [prestamos, setPrestamos] = useState ([])

    const [listUpdate, setListUpdate] = useState (false)


    useEffect(() => {
        const getPrestamos = () => {
            fetch('http://localhost:8000/api')
            .then(res => res.json())
            .then(res => setPrestamos(res))
        }
        getPrestamos()
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
                    <Typography variant='h5' style={{textAlign: 'center'}}> Listado de libros prestados</Typography>
                    <ListaPrestamos prestamo={prestamo} setPrestamo={setPrestamo} prestamos={prestamos} setListUpdate={setListUpdate} />
                    </div>
                    <div className='col-5'>
                    <Typography variant='h5' style={{textAlign: 'center'}}>Formulario para agregar o editar prestamos</Typography>
                    <FormPrestamo prestamo={prestamo} setPrestamo={setPrestamo} />
                    </div>
                </div>
            </div>
            </div>
            </div>
            </Fragment> 
    
    )}
    
    
    export default Prestamos
    