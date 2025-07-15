import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components1/pages/Home"
import Company from "./components1/pages/Company"
import Contato from "./components1/pages/Contato"
import NewProject from "./components1/pages/NewProject"
import Navbar from "./components1/layout/Navbar"

function App() {

  return(
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/novoprojeto" element={<NewProject />}></Route>
        </Routes>
      </Router>
  
  )
}

export default App