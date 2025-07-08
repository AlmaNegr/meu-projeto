import './App.css'
import Outralista from './components/Outralista'
import Teste from './components/Teste'


function App() {
  const itens = ['React', 'Vue', 'Angular']

  return (
    <div className='App'>
      <h2>Renderização de listas</h2>
      <Outralista itens={itens}/>
      <Teste />
    </div>
  )
}

export default App

