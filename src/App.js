import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar/navBar';
import Home from './components/home/home';
import Favorite from "./components/favorite/favorite";
import Detail from "./components/detail/detail";
import About from './components/about/about';
function App() {
  const [titulo, MTitulo] = useState("");


  return (
    <div className="App">
      <NavBar titulo={titulo} />
      <Routes>
        <Route exact path='/' element={<Home MTitulo={MTitulo} />} />
        <Route path='/favoritos' element={<Favorite MTitulo={MTitulo} />} />
        <Route path='/movies/:id' element={<Detail MTitulo={MTitulo} />} />
        <Route path='/about' element={<About MTitulo={MTitulo} />} />
      </Routes>
    </div>
  );
}

export default App;
