import {useState} from 'react'

function Teste() {
    function enviarFormulario(e) {
        e.preventDefault()
        console.log(`Usuário cadastrado.`)
        console.log(nome)
    }

    function limparEmail(e) {
        e.preventDefault()
        setNome('')
    }

    const [nome, setNome] = useState('')
    
    return(
        <div>
            <h2>Meu Formulário</h2>
            <form>
                <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}></input>
                <button type="submit" onClick={enviarFormulario} value={nome}>Enviar Formulário</button>
                {nome && (
                    <div>
                        <p>O nome do usuário é : {nome}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                ) }

            </form>
        </div>
    )
}

export default Teste