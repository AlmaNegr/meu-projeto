import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components1/pages/Home'
import Sobre from './components1/pages/Sobre'
import Contato from './components1/pages/Contato'
import Navbar from './components1/pages/Navbar'

function App() {

    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Sobre' element={<Sobre />} />
            <Route path='/Contato' element={<Contato />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App