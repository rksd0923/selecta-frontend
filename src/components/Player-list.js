import React from 'react';

function PlayerList(props) {

    const playerClicked = player => evt => {
        props.playerClicked(player)
    }

    return (
        <div>

            {props.players && props.players.map(player => {
                return (
                    <div key={player.id}>
                        <h2 onClick={playerClicked(player)}>{player.name}</h2>
                    </div>
                )
            })}

        </div>
    )
}

export default PlayerList;