import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate()

    function irPraProduto()  {
        navigate("/produto/4")
    }

    return(
        <div>
            <h1>Bem-vindo á Home</h1>
            <button onClick={irPraProduto}>Ver produto 4</button>
        
        </div>
    )
}

export default Home