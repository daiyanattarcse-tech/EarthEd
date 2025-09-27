import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlayZone from './pages/PlayZone';
import Missions from './pages/Missions';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <GameProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<PlayZone />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </GameProvider>
  );
}

export default App;