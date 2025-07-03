import styles from './Frase.module.css'
import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1 className={styles.fraseContainer}>Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input type="text" placeholder="Digite seu nome" id='name' name='name' onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <div>
                    <label htmlFor='password'>Senha:</label>
                    <input type='number' id='password' placeholder='Digite sua senha' name='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </div>
                <div>
                    
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form