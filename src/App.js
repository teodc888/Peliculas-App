import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/navBar';
import Home from './components/home/home';
import Favorite from "./components/favorite/favorite";
import Detail from "./components/detail/detail";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favorite />} />
        <Route path='/movies/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
