import { useState } from "react"


function Form({aleatorio}) {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(`Usuário cadastrado!`)
    }

    const [name, setName] = useState('Alisson')
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input  type="text" name="name" id="name" placeholder="Digite seu nome" onChange={(e) =>setName(e.target.value)} value={name}></input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="number" name="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </div>
                <div>
                    <button type="submit" value="Cadastrar">Cadastrar</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form