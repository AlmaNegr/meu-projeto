import { useState } from "react"

function Idade() {

    const [idade, setIdade] = useState("")

    return(
        <div>
            <input type="number" placeholder="Idade" name="idade" value={idade} onChange={(e) => setIdade(e.target.value)}></input>
            {idade && idade < 18 && <p>Você é menor de idade.</p>}
        </div>
    )
}

export default Idade