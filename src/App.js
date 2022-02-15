import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar/navBar';
import Home from './components/home/home';
import Favorite from "./components/favorite/favorite";
import Detail from "./components/detail/detail";
import About from './components/about/about';
function App() {


  return (
    <div className="App">
      <NavBar  />
      <Routes>
        <Route exact path='/' element={<Home  />} />
        <Route path='/favoritos' element={<Favorite  />} />
        <Route path='/movies/:id' element={<Detail  />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
