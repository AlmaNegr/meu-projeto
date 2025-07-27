import { useState, useEffect } from "react"

function EfeitoState() {

    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Contador: ${contador}`
    }, [contador])




    return(
        <div>
         
            <h1>State com Effect</h1>
            <p>Você clicou {contador} vezes.</p>
            <button onClick={() => setContador(contador +1)}>+1</button>
            <button onClick={() => setContador(contador -1)}>-1</button>
        </div>
    )
}

export default EfeitoState