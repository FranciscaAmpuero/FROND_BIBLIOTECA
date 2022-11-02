import React from "react";

const Form = ({libro, setLibro}) => {

    const handleChange = e => {
        setLibro({
            ...libro,
            [e.target.name]: e.target.value
        })
    }

    let{ nombre, autor, editorial, categoria, cantidad, estado } = libro

    
    const handleSubmit = () => {
        cantidad = parseInt(cantidad, 10)
        //Validacion de los datos para que no sean nulos, negativos, ni ceros
        if (nombre === '' || autor === '' || editorial === '' || categoria === '' || cantidad <= 0 || estado ==='') {
            alert('Todos los campos son obligatorios')
            return            
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(libro)

        }
        fetch('http://localhost:9000/api', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

            //reiniciamos el state del libro
            setLibro({
                nombre: '',
                autor: '',
                editorial: '',
                categoria: '',
                cantidad: '0',
                estado: ''
            })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Titulo</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="autor" className="form-label">Autor</label>
                <input value={autor} name="autor" onChange={handleChange} type="text" id="autor" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="editorial" className="form-label">Editorial</label>
                <input value={editorial} name="editorial" onChange={handleChange} type="text" id="editorial" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="categoria" className="form-label">Categoria</label>
                <input value={categoria} name="categoria" onChange={handleChange} type="text" id="categoria" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">cantidad</label>
                <input value={cantidad} name="cantidad" onChange={handleChange} type="number" id="cantidad" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input value={estado} name="estado" onChange={handleChange} type="estado" id="nombre" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            <br>
            </br>
            <br>
            </br>

        </form>

    );
}

export default Form;