import Listas from "./components1/Listas"

function App() {
  const produtos = [{nome:'carro', preco: 10000},
    {nome:'bicicleata', preco: 3000},
    {nome:'moto', preco: 1500}
  
  ]

  return(
    <div>
      <h1>Renderizando listas</h1>
      <Listas produtos={produtos}/>
    </div>
  
  )
}

export default App