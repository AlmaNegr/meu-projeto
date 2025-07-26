import { useState } from "react"
import styles from "./Idade.module.css"

function Idade() {

    const [idade, setIdade] = useState("")

    return(
        <div className={styles.box}>
            <h2>Maior Idade</h2>
            <input type="number" placeholder="Idade" name="idade" value={idade} onChange={(e) => setIdade(e.target.value)}></input>
            {idade && idade < 18 && <p>Você é menor de idade.</p>}
        </div>
    )
}

export default Idade