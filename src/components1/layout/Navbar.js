import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar() {
    return(
    
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.link} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/company">Company</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/contato">Contato</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/novoprojeto">Novo Projeto</Link>
                </li>
            </ul>
        </nav>
    
    )
}

export default Navbar