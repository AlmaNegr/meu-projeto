import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.nav_bar}>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/empresa">Empresa</Link>
        </nav>
    )
}

export default Navbar;