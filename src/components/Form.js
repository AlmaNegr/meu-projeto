function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Usuário cadastrado')
    }

    return(
        <div>
           <h1>Formulário</h1>
           <form onSubmit={cadastrarUsuario}>
           <div>
            <input type="text" placeholder="Digite seu nome"></input>
           </div>
           <div>
            <input type="submit" value="Cadastrar"></input>
           </div>
           </form>
        </div>
    )
}

export default Form