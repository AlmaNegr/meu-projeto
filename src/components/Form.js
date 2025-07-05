import { useState } from "react";


function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`O ${name} foi cadastrado com a senha ${senha}`);
    }

    const [name, setName] = useState('Nome Padrão');
    const [senha, setSenha] = useState('senha padrao')

    return(
        <div className="form-container">
            <h2>Formulário</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)} value={senha}></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form;