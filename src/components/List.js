import { useState } from "react"
import Button from "./eventos/Button"

function List() {
    function clicar() {
        alert('cliquei')
    }

    function handleCadastro(e) {
        e.preventDefault()
        console.log(`Você cadastrou ${nome} e senha foi ${senha}`)
    }

    function eraser(e) {
        e.preventDefault()
        setNome('')
        setSenha('')
    }

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <div>
            <form onSubmit={handleCadastro}>
                <div>
                    <input type="text" placeholder="seu nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                    <button type="submit">Enviar</button>
                </div>
                <div>
                    <input type="password" placeholder="Sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                </div>
                {nome ? (
                    <div>
                        <p>Seu nome é : {nome}</p>
                        <p>Sua senha é : {senha}</p>
                        <button onClick={eraser}>Apagar</button>
                    </div>
                ) : null}

            </form>
            <Button evento={clicar} texto="clique"/>
        </div>
    )
}

export default List