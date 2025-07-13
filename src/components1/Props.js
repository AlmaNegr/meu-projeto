function Producards(props) {
    return(
        <div>
            <h2>{props.nome}</h2>
            <p><strong>Preço:</strong> R${props.preco}</p>
            <p>{props.descricao}</p>
        </div>
    )
}

export default Producards