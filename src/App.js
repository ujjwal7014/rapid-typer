import './App.css';
import { Route, Routes } from "react-router";
import GameArena from './pages/GameArena/GameArena';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<GameArena />} />
      </Routes>
    </div>
  );
}

export default App;
