import Button from "./eventos/Button"

function Evento() {
    function primeiroEvento() {
        console.log("Ativando primeiro evento!")
    }

    function segundoEvento() {
        console.log("Ativando segundo evento!")
    }
    return(
        <div>
            <h2>Evento</h2>
            <Button event={primeiroEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
            <Bu
        </div>
    )
}

export default Evento