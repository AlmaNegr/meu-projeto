import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <Link to="/">Início</Link>
            <Link to="/Sobre">Sobre</Link>
        </nav>
    )
}

export default Navbar