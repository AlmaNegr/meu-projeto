import {useState} from 'react'

function Pessoa() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
    }

    


    return(
        <div>
            <h2>Renderizando o seu email</h2>
            <form>
                <input type='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <button type='submit' onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Pessoa