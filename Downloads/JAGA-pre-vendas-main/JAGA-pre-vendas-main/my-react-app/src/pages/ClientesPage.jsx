import { useState, useEffect } from 'react'

const ClientesPage = () => {
    const [clientes, setClientes] = useState("Oiiiiiiiiiiiiiiiiiiiiii")

    const getClientes = () => {
        console.log("Buscando lista de clientes...");

        try {
            fetch("http://localhost:3000/clientes")
            .then((res) => res.json())
            .then((data) => setClientes(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClientes();
    }, [])

    return (
        <div>
            <h1>Clientes que dizem oi:</h1>
            <p>{clientes.name}</p>
        </div>
    )
}

export default ClientesPage;