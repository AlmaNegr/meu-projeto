

function Teste({setNome, setEmail}) {

    return(
        <div>
            <p>Digite seu nome: </p>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}></input>
            <div>
                <label htmlFor="email">Email </label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
        </div>
        
    )
}

export default Teste