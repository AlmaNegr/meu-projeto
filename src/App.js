import './App.css'

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Teste from './components/Teste';
import Frase from './components/Frase';
import List from './components/List'


function App() {
  return (
    <div className='App'>
      <Frase />
      <h1>Hello Alisson!</h1>
      <SayMyName nome="Alisson" />
      <SayMyName nome="João" />
      <Pessoa
      nome="Rodrigo"
      idade="28"
      profissao="Desenvolvedo Web"
      foto="https://via.placeholder.com/150"
      />
      <Teste python = 'Python' php = 'php'/>
      <List />

    </div>
  )
}

export default App
