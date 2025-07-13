function MensagemPromocional(props) { 
    return(
        <div>
            {props.verdade && (<div>
                <h2>Verificação de promoção</h2>
                 props.temPromocao && <p>Tem Promoção disponível!</p>
            </div>)}
        </div>
    )
}

export default MensagemPromocional