import React from 'react'

const ListaLibros = ({libro, setLibro, libros, setListUpdate}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            setListUpdate(true)

    }

    const handleUpdate = id => {
        let{ nombre, autor, editorial, categoria, cantidad, estado } = libro
        cantidad = parseInt(cantidad, 10)
        //Validacion de los datos para que no sean nulos, negativos, ni ceros
        if (nombre === '' || autor === '' || editorial === '' || categoria === '' || cantidad <= 0 || estado ==='') {
            alert('Todos los campos son obligatorios')
            return            
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(libro)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            setLibro({
                nombre: '',
                autor: '',
                editorial: '',
                categoria: '',
                cantidad: '0',
                estado: ''
            })

            setListUpdate(true)

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Editorial</th>
                    <th>Categoria</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {libros.map( libro => (
                    <tr key={libro.id}>
                        <td>{libro.id}</td>
                        <td>{libro.nombre}</td>
                        <td>{libro.autor}</td>
                        <td>{libro.editorial}</td>
                        <td>{libro.categoria}</td>
                        <td>{libro.cantidad}</td>
                        <td>{libro.estado}</td>   
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(libro.id)} className='btn btn-danger' >Eliminar</button>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(libro.id)} className='btn btn-dark'>Actualizar</button>
                            </div>

                        </td>                  
                    </tr>
                ))}                
            </tbody>

        </table>

    );


}
export default ListaLibros;