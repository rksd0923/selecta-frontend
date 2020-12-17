import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerList from './components/Player-list';
import PlayerDetails from './components/player-details';
import PlayerForm from './components/player-form';
import Facebook from './components/facebook';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [editedPlayer, setEditedPlayer] = useState(null);
  const [token, SetToken, deleteToken] = useCookies(['selecta-token']);


  useEffect(() => {
    fetch("https://selecta-project.herokuapp.com/selecta/Players/", {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Token ${token['selecta-token']}`
      }
    }).then(res => res.json())
      .then(res => setPlayers(res))
      .catch(error => console.log(error))
  }, [])

  //useEffect(() => {
  // console.log(token);
  //if (!token['selecta-token']) window.location.href = '/login';
  //})

  //const playerClicked = player => {
  //  setSelectedPlayer(player);
  //}
  const loadPlayer = player => {
    setSelectedPlayer(player);
    setEditedPlayer(null);
  }

  const editClicked = player => {
    setEditedPlayer(player);
    setSelectedPlayer(null);
  }

  const updatedPlayer = player => {
    const newPlayers = players.map(players => {
      if (players.id === player.id) {
        return player;
      }
      return players;
    })
    setPlayers(newPlayers)
  }

  const newPlayer = () => {
    setEditedPlayer({ name: '', description: '' });
    setSelectedPlayer(null);
  }

  const playerCreated = player => {
    const newPlayers = [...players, player];
    setPlayers(newPlayers);
  }

  const removeClicked = player => {
    const newPlayers = players.filter(players => players.id !== player.id);
    setPlayers(newPlayers);
  }

  const logoutUser = () => {
    deleteToken(['selecta-token']);
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Selecta</h1>
        <h1 className="logOut" onClick={logoutUser}>Cerrar Sesion</h1>

      </header>
      <div className="layout">
        <div>
          <PlayerList
            players={players}
            playerClicked={loadPlayer}
            editClicked={editClicked}
            removeClicked={removeClicked}
          />
          <button onClick={newPlayer}>New Player</button>
        </div>



        <PlayerDetails player={selectedPlayer} updatePlayers={loadPlayer} />
        {editedPlayer ?
          <PlayerForm player={editedPlayer} updatedPlayer={updatedPlayer} playerCreated={playerCreated} />
          : null}




      </div>

      <Facebook />

    </div>


  );
}

export default App;
