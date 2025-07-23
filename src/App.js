import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "./components/List";
import SeuNome from "./components/SeuNome";
import Container from "./components/Container"

function App() {
  return(
    <Router>
      <nav>
        <ul>
          <Link to="/lista">Lista</Link>
          <Link to="/seunome">Nome</Link>
        </ul>
      </nav>
      <Container>
        <Routes>
          <Route path="/lista" element={<List />}></Route>
          <Route path="/seunome" element={<SeuNome />}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default App