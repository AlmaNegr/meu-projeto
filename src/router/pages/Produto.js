import { useParams } from "react-router-dom"


function Produto() {
    const { id } = useParams();
    return(
        <div>
            <h1>Detalhes do Produto</h1>
            <p>Você está vendo o produto ID: {id}</p>
        </div>
    )
}

export default Produto