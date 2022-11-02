import React from 'react'

const ListaPrestamos = ({prestamo, setPrestamo, prestamos, setListUpdate}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:8000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            setListUpdate(true)

    }

    const handleUpdate = id => {
        let{ id_libro, id_usuario, id_login} = prestamo
        //cantidad = parseInt(cantidad, 10)
        //Validacion de los datos para que no sean nulos, negativos, ni ceros
        if (id_libro === '' || id_usuario === '' || id_login === '') {
            alert('Todos los campos son obligatorios')
            return            
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prestamo)
        }
        fetch('http://localhost:8000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            setPrestamo({
                id_libro: '',
                id_usuario: '',
                id_login: ''
            })

            setListUpdate(true)

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>id Libro</th>
                    <th>id Usuario</th>
                    <th>id Funcionario</th>
                    <th>Fecha y Hora prestamo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {prestamos.map( prestamo => (
                    <tr key={prestamo.id}>
                        <td>{prestamo.id}</td>
                        <td>{prestamo.id_libro}</td>
                        <td>{prestamo.id_usuario}</td>
                        <td>{prestamo.id_login}</td>
                        <td>{prestamo.fecha_prestamo}</td>
                         <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(prestamo.id)} className='btn btn-danger' >Eliminar</button>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(prestamo.id)} className='btn btn-dark'>Actualizar</button>
                            </div>

                        </td>                  
                    </tr>
                ))}                
            </tbody>

        </table>

    );


}
export default ListaPrestamos;