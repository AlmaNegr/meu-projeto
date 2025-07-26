import { useState } from "react"
import styles from "./Contador.module.css"

function Contador() {

    const [numero, setNumero] = useState(0)

    return(
        <div className={styles.container}>
          <h2>Contador: {numero}</h2>
          <button onClick={() => setNumero(numero +1)}>+1</button>
          <button onClick={() => setNumero(numero -1)}>-1</button>
        </div>
    )
}

export default Contador