import { useEffect } from "react"

function Efeito({nome}) {
    useEffect(() => {
        alert(`Meu nome é ${nome}`)
    }, [nome])

    return(
        <div>
            Chamando pelo nome
        </div>
    )
}

export default Efeito