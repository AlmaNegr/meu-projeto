import styles from './Frase.module.css'

function Evento({numero}) {

    function meuEvento() {
        console.log(`Opa, você clicou ${numero}`)
    }

    return(
        <div>
            <p className={styles.fraseContainer}>Clique para disparar um evento!</p>
            <input type="button" onClick={meuEvento} value="Disparar"></input>
        </div>
    )
}

export default Evento