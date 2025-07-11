

function Teste({setNome}) {

    return(
        <>
        <h2>State lift</h2>
        <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}></input>
        </>

    )
}

export default Teste