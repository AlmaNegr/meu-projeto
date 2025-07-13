import styles from './Design.module.css'

function StatusProduto({emEstoque}) {

    return(
       <div className={styles.espaco}>
        {emEstoque ? "Em estoque" : "Fora de estoque"}
       </div>
    )
}

export default StatusProduto