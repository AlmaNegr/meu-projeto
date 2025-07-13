function Saudacao(props) {

    return (
        <p>Olá, {props.nome ? props.nome : "Visitante"}</p>
    )
}

export default Saudacao