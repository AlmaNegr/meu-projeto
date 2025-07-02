import styles from './Frase.module.css'

function Item({marca, ano_lancamento}) {

    return(
        <>
        <li className={styles.fraseContainer}>{marca} - {ano_lancamento}</li>
        </>
    )
}

export default Item