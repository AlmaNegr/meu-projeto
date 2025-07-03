import { useState } from "react"

function Nome() {
    const [nome, setNome] = useState("Visitante")


    function mudaNome() {
        setNome("Alisson")
    }

    return(
        <div>
            <h2>Olá, {nome}!</h2>
            <button onClick={mudaNome}>Disparar</button>
        </div>
    )
}

export default Nome