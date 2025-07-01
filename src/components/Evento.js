function Evento({numero}) {

    function meuEvento() {
        console.log(`Opa, você clicou ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Clique</button>
        </div>
    )
}

export default Evento