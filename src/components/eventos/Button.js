function Button(props) {
    return(
        <div>
            <button onClick={props.evento}>{props.texto}</button>
        </div>
    )
}

export default Button