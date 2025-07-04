import Frase from './Frase'

function Nome({nome, idade}) {

    return(
        <div>
            <h2>Nome</h2>
            <p>Meu nome é {nome} e idade é {idade}.</p>
            <Frase />
        </div>
    )
}

export default Nome