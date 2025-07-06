import './App.css'
import Condicional from './components/Condicional'
import styles from './components/Frase.module.css'
import Pessoa from './components/Pessoa'

function App() {

  return (
    <div className='App'>
      <h2 className={styles.fraseContainer}>Revisão</h2>
      <Condicional />
      <Pessoa />
      
      
      
      
    </div>
  )
}

export default App
