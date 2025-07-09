import {useState} from 'react'

function Teste() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${nome} cadastrado.`)
        setNome(nome)
    }
    
    function limparNome(e) {
        e.preventDefault()
        setNome('')

    }

    function limparEmail(e) {
        e.preventDefault()
        setEmail('')
    }

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    return(
        <>
        <h2>Formulário</h2>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="texte" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} value={nome}></input>
            </div>
            <di>
                <label htmlFor="email">E-mail: </label>
                <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </di>
            <div>
                <button type="submit">Enviar</button>
            </div>
            {nome && (
                <div>
                    <p>O nome cadastrado foi {nome}.</p>
                    <button onClick={limparNome}>Limpar Nome</button>
                </div>
            )}
            {email && (
                <div>
                    <p>O email cadastrado foi {email}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}
            
        </form>
        </>
    )
}

export default Teste