import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components1/pages/Home"
import Contato from "./components1/pages/Contato"
import Sobre from "./components1/pages/Sobre"
import Navbar from "./components1/pages/Navbar"

function App() {

  return(
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      </BrowserRouter>
    </div>
  
  )
}

export default App