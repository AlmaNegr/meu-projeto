function Frase() {

    function meuEvento() {
        console.log("Evento do componente Frase");
        
    }
    return(
        <div>
            <h2>Frase</h2>
            <p>Essa é uma frase de exemplo</p>
            <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Frase