import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//paginas
import Home from './pages/home/home.jsx'
import Sobre from './pages/sobre/sobre.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <div class="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App
