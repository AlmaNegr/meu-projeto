import './App.css'

import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Teste from './components/Teste';
import Pessoa from './components/Pessoa';


function App() {
  return (
    <div className='App'>
      <h1>Hello Alisson!</h1>
      <HelloWorld />
      <SayMyName nome="Alisson" />
      <SayMyName nome="João" />
      <Teste nome="Alhinho" />
      <Pessoa
      nome="Rodrigo"
      idade="28"
      profissao="Desenvolvedo Web"
      foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App
