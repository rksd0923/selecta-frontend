import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerList from './components/Player-list';
import PlayerDetails from './components/player-details';

function App() {

  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/selecta/Players/", {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Token d2255cfaf29897c6bb7001b19eaf681615905c85'
      }
    }).then(res => res.json())
      .then(res => setPlayers(res))
      .catch(error => console.log(error))
  }, [])

  const playerClicked = player => {
    setSelectedPlayer(player);
  }
  const loadPlayer = player => {
    setSelectedPlayer(player);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Selecta</h1>

      </header>
      <div className="layout">
        <PlayerList players={players} playerClicked={playerClicked} />

        <PlayerDetails player={selectedPlayer} updatePlayers={loadPlayer} />

      </div>
    </div>
  );
}

export default App;
