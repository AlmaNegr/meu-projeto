function SayMyName({nome, email}) {
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    function gerarEmail(algumEmail) {
        return `Seu Email é ${algumEmail}`
    }

    return(
        <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
        {email && <p>{gerarEmail(email)}</p>}
        </>
    )
}

export default SayMyName