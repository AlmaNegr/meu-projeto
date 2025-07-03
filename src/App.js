import './App.css'
import Evento from './components/Evento'
import Form from './components/Form'
import Nome from './components/Nome'


function App() {

  return (
    <div className='App'>
      <h1>Eventos DOM</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
      <Nome />
    </div>
  )
}

export default App
