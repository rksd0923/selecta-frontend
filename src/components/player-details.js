import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function PlayerDetails(props) {

    const [highlighted, setHighlighted] = useState(-1)

    let players = props.player;

    const highlightRate = high => evt => {
        setHighlighted(high);
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/selecta/Players/${players.id}/rate_player/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Token d2255cfaf29897c6bb7001b19eaf681615905c85'
            },
            body: JSON.stringify({ stars: rate + 1 })
        })
            .then(() => getDetails())
            .catch(error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/selecta/Players/${players.id}/`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Token d2255cfaf29897c6bb7001b19eaf681615905c85'
            },

        }).then(res => res.json())
            .then(res => props.updatePlayers(res))
            .catch(error => console.log(error))
    }

    return (
        <React.Fragment>

            { players ? (
                <div>
                    <img src={props.player.photo_url} alt="" width='250' height='250' />
                    <h1>{players.name}</h1>
                    <FontAwesomeIcon icon={faStar} className={players.avg_rating > 0 ? 'yellow' : ''} />
                    <FontAwesomeIcon icon={faStar} className={players.avg_rating > 1 ? 'yellow' : ''} />
                    <FontAwesomeIcon icon={faStar} className={players.avg_rating > 2 ? 'yellow' : ''} />
                    <FontAwesomeIcon icon={faStar} className={players.avg_rating > 3 ? 'yellow' : ''} />
                    <FontAwesomeIcon icon={faStar} className={players.avg_rating > 4 ? 'yellow' : ''} />
                    ({players.no_of_ratings})
                    <div className="rate-container">
                        <h2>Vota por Favor</h2>
                        {
                            [...Array(5)].map((e, i) => {
                                return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i - 1 ? 'green' : ''}
                                    onMouseEnter={highlightRate(i)}
                                    onMouseLeave={highlightRate(i - 1)}
                                    onClick={rateClicked(i)}

                                />
                            })
                        }
                    </div>
                    <p>{players.team}</p>
                    <p>{players.body}</p>


                </div>
            ) : null}
        </React.Fragment>
    )
}

export default PlayerDetails;
//test
//test