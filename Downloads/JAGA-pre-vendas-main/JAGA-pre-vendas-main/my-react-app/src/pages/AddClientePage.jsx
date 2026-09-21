import { useState, useEffect } from 'react'
import { Form } from 'react-router-dom';

const AddClientePage = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const addCliente = (event) => {
        event.preventDefault(); 

        const formData = new FormData(event.target)
        const dadosCliente = Object.fromEntries(formData.entries())

        fetch("http://localhost:3000/cliente", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(dadosCliente),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div>
            <form onSubmit={addCliente}>
                <label for="cname">Nome:</label>
                <input type="text" id="cname" class="cname" name="nome"placeholder="Nome"></input>
                <label for="cemail">Email:</label>
                <input type="text" id="cemail" class="cemail" name="email" placeholder="Email"></input>
                <label for="ctelefone">Telefone:</label>
                <input type="text" id="ctelefone" class="ctelefone" name="telefone" placeholder="Telefone"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default AddClientePage;