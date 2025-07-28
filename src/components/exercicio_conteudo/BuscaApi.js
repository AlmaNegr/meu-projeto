 import { useEffect, useState } from "react"


function BuscarApi() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsuarios(data));
    }, [])

    return(
        <div>
            <h2>Lista de usuários</h2>
            <ul>
                <li key={usuarios.id}>{usuarios.name}</li>
            </ul>
        </div>
    )
}

export default BuscarApi
