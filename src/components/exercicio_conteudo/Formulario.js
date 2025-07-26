import { useState } from "react";
import styles from "./Formulario.module.css"

function Formulario() {

    const [project, setProject] = useState({nome: "nome", email: "email"});

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    return(
        <div className={styles.form}>
            <h2>Formulário</h2>
         <input type="text"
            name="nome"
            placeholder="nome"
            onChange={handleChange}>
         </input>
         <input type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}>
            </input>

        </div>
    )
}

export default Formulario