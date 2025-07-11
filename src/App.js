import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components1/Navbar"
import Home from './components1/Home'
import Sobre from './components1/Sobre'

function App() {

    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Sobre />} />
        </Routes>
        
        </BrowserRouter>
    )
}

export default App