import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from '../api'
import { useCookies } from 'react-cookie';


function PlayerList(props) {

    const [token] = useCookies(['selecta-token']);

    const playerClicked = player => evt => {
        props.playerClicked(player)
    }

    const editClicked = player => {
        props.editClicked(player);
    }

    const removeClicked = player => {
        API.deletePlayer(player.id, token['selecta-token'])
            .then(() => props.removeClicked(player))
            .catch(err => console.log(err))

    }

    return (
        <div>

            {props.players && props.players.map(player => {
                return (
                    <div key={player.id} className="player-item">
                        <h2 onClick={playerClicked(player)}>{player.name}</h2>
                        <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(player)} />
                        <FontAwesomeIcon icon={faTrash} onClick={() => removeClicked(player)} />
                    </div>
                )
            })}

        </div>
    )
}

export default PlayerList;