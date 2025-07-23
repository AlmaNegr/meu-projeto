function HelloWorld({ nome, setNome, email, setEmail }) {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`${nome} cadastrado.`)
        console.log(`${email} cadastrado`)
    }

    function limpar() {
        setNome('')
        setEmail('')
    }

    return (
        <div>
            <h1>Olá Mundo</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input
                        type="text"
                        placeholder="Seu Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    /><br></br>
                    <input type="email" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    {nome && (
                        <div>
                            <p>{nome} e {email} cadastrado</p>
                            <button type="button" onClick={limpar}>Limpar</button>
                        </div>
                    )}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default HelloWorld
