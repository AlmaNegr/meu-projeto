import './App.css'
import { useState } from 'react'
import Teste from './components/Teste'
import SayMyName from './components/SayMyName'

function App() {

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()

  return (
    <div className='App'>
      <h2>State Lift</h2>
      <Teste setNome={setNome} setEmail={setEmail}/>
      <SayMyName nome={nome} email={email} />
    </div>
  )
}

export default App

