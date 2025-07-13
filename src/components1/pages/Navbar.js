import { Link } from "react-router-dom";
import styles from '../Design.module.css'

function Navbar() {
    return(
        <nav>
            <Link className={styles.espaco} to="/">Home</Link>
            <Link className={styles.espaco} to="/contato">Contato</Link>
            <Link className={styles.espaco} to="/sobre">Sobre</Link>
        </nav>
    )
}

export default Navbar