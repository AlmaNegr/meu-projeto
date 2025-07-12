import { Link } from "react-router-dom";
import styles from '../Design.module.css'

function Navbar() {
    return(
        <nav>
            <li>
                <Link to="/">Início</Link>
            </li>
            <li>
                <Link to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
        </nav>
    )
}

export default Navbar