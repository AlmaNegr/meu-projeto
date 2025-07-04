import { useState } from "react";


function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log("Usuário cadastrado com sucesso!");
    }

    const [name, setName] = useState('Nome Padrão');

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
                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha"></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form;