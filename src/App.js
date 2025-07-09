import './App.css'
import Teste from './components/Teste'
import Frase from './components/Frase'


function App() {
  
  const lista = ['Python', 'Javascript', 'Java']

  return (
    <div className='App'>
      <h2>Revisão</h2>
      <Teste />
      <Frase itens={lista}/>
    </div>
  )
}

export default App

