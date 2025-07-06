import { useState } from "react";

function Pessoa() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Usuario cadastrado.')
        setNome('')
    }

    const [nome, setNome] = useState('')

    return(
        <div>
            <h2>useState</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" placeholder="Digite seu nome" id="name" name="name" onChange={(e) => setNome(e.target.value)} value={nome}></input>
                </div>
                <button type="submit">Enviar</button>

            </form>
        </div>

    )
}

export default Pessoa