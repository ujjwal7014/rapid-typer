import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import GameArena from './pages/GameArena/GameArena';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game" element={<GameArena />} />
      </Routes>
    </div>
  );
}

export default App;
