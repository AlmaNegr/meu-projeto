import { useState } from "react";

function Formulario() {

    const [project, setProject] = useState({nome: "nome", email: "email"});

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    return(
        <div>
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