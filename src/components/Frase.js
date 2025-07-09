import styles from './Frase.module.css'

function Frase({itens}) {
    return (
        <div>
            <h3 className={styles.fraseContainer}>Renderizando listas</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => <p key={index}>{item}</p>)
            )
             : (
                <p>Não há itens na lista.</p>
            )}
        </div>
    );
}

export default Frase;
