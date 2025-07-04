import { useState } from "react"

function Form({aleatorio}) {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)

    }

    const [name, setName] = useState('Fulano')
    const [password, setPassword] = useState()

    return(
        <>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text"
                 placeholder="Digite seu nome"
                  name="name" id="name" 
                  onChange={(e) => setName(e.target.value)} value={name}></input>
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="Digite sua senha"  onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>
        </form>
        </>
    )
}

export default Form