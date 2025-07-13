function InputNome(props) {

    return(
        <div>
            <input type="text" placeholder="Seu nome" value={props.nome} onChange={(e) => props.setNome(e.target.value)} ></input>
        </div>
    )
}

export default InputNome