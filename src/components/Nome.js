import styles from './Frase.module.css'

function Nome(props) {

    return(
        <div>
            <h1 className={styles.fraseContainer}>Vamos pra revisão</h1>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
        </div>
    )
}

export default Nome