import React from "react";

const FormPrestamo = ({prestamo, setPrestamo}) => {

    const handleChange = e => {
        setPrestamo({
            ...prestamo,
            [e.target.name]: e.target.value
        })
    }

    let{ id_libro, id_usuario, id_login} = prestamo

    
    const handleSubmit = () => {
        //cantidad = parseInt(cantidad, 10)
        //Validacion de los datos para que no sean nulos, negativos, ni ceros
        if (id_libro === '' || id_usuario === '' || id_login === '') {
            alert('Todos los campos son obligatorios')
            return            
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prestamo)

        }
        fetch('http://localhost:8000/api', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            //reiniciamos el state del libro
            setPrestamo({
                id_libro: '',
                id_usuario: '',
                id_login: ''
            })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="id_libro" className="form-label">id Libro:</label>
                <input value={id_libro} name="id_libro" onChange={handleChange} type="number" id="id_libro" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="id_usuario" className="form-label">id Usuario</label>
                <input value={id_usuario} name="id_usuario" onChange={handleChange} type="number" id="id_usuario" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="id_login" className="form-label">id Bibliotecario</label>
                <input value={id_login} name="id_login" onChange={handleChange} type="number" id="id_login" className="form-control" />
            </div>            
            <button type="submit" className="btn btn-primary">Enviar</button>
            <br>
            </br>
            <br>
            </br>

        </form>

    );
}

export default FormPrestamo;