import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Listado from './Components/Listado/Listado';
import Resultados from './Components/Resultados/Resultados';
import {  BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Listado/>}></Route>
    <Route path="resultados/:city/:guests" element={<Resultados/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
