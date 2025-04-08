import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="OctoFit Logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/leaderboard">Leaderboard</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/workouts">Workouts</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h1>Welcome to OctoFit Tracker</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
