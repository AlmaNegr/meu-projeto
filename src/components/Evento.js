

function Evento({numero}) {
    function meuEvento() {
        
        console.log(`Você chamou o número ${numero}`)
    }

    return(
        <>
        <h1>Testando Evento</h1>
        <p>Clique para disparar um evento</p>
        <button onClick={meuEvento}>Cique aqui</button>
        </>
    )
}

export default Evento