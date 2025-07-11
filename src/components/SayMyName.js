function SayMyName({nome}) {
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }
    return(
        <div>
            <p>{gerarSaudacao(nome)}</p>
        </div>
    )
}

export default SayMyName