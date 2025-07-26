import Contador from "./components/exercicio_conteudo/Contador"
import Formulario from "./components/exercicio_conteudo/Formulario"
import Idade from "./components/exercicio_conteudo/Idade"
import Cadastro from "./components/exercicio_conteudo/Cadastro"
import MostrarSenha from "./components/exercicio_conteudo/MostrarSenha"


function App() {

  return(
    <div>
      <Contador />
      <Formulario />
      <Idade />
      <Cadastro />
      <MostrarSenha text="Clique"/>
    </div>
  )
}

export default App