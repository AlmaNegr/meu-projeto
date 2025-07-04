
function Evento() {
    function meuEvento() {
        console.log('Meu evento.')
    }

    return(
        <div>
            <h1>Testando eventos</h1>
            <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Evento