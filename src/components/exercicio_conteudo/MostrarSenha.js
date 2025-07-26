import { useState } from "react";

function MostrarSenha(props) {

    const [senha, setSenha] = useState("")
    const [mostrarSenha, setMostrarSenha] = useState(false)

    function handleChange(e) {
        setSenha(e.target.value)
    }

    function alterarVisibilidade(e) {
        setMostrarSenha(!mostrarSenha)
    }

    return(
        <div>
            <input type={mostrarSenha ? "text": "password"} placeholder="Digite sua senha" onChange={handleChange} value={senha}></input>
           
           <button onClick={alterarVisibilidade}>{mostrarSenha ? "Ocultar": "Mostrar"}</button>
        </div>
    )
}

export default MostrarSenha