import { useState } from "react"
import styles from "./Cadastro.module.css"

function Cadastro() {

    const [dados, setDados] = useState({nome: "", email: "", cidade: "" })

    function handleChange(e) {
        setDados({...dados, [e.target.name]: e.target.value})
    }

    return(
        <div className={styles.cadastro}>
            <input type="text" name="nome" placeholder="Nome" onChange={handleChange}></input>
            <input type="email" name="email" placeholder="Email" onChange={handleChange}></input>
            <input type="text" name="cidade" placeholder="Cidade" onChange={handleChange}></input>
            <p>Nome: {dados.nome}</p>
            <p>Email: {dados.email}</p>
            <p>Cidade: {dados.cidade}</p>
            
        </div>
    )
}

export default Cadastro