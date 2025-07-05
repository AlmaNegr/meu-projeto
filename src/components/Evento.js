import Button from './eventos/Button'


function Evento({numero}) {
    function meuEvento() {
        
    }

    function segundoEvento() {
        console.log(`${numero}`)
    }

    return(
        <div>
            <Button event={meuEvento} text="Meu primeiro evento."/>
            <Button event={segundoEvento} text="meu segundo evento."/>
            
        </div>
    )
}

export default Evento