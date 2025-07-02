import Item from './Item'
import styles from './Frase.module.css'

function List() {
    
    return(
        <>
        <p className={styles.fraseContainer}>Minha lista de produtos</p>
        <ul>
            <Item marca="Chevrolet" ano_lancamento={1949}/>
            <Item marca="Fiat" ano_lancamento={1960}/>
            <Item marca="Gol" ano_lancamento={1913}/>
        </ul>
        </>
    )
}

export default List