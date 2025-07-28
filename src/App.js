import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './router/pages/Home'
import Produto from "./router/pages/Produto"


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/produto/:id" element={<Produto />}></Route>
      </Routes>
    </Router>
  )
}

export default App