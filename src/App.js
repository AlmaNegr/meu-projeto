import './App.css'
import Form from './components/Form'
import styles from './components/Frase.module.css'

function App() {

  return (
    <div className='App'>
      <h2 className={styles.fraseContainer}>Revisão</h2>
      <Form />
    </div>
  )
}

export default App
