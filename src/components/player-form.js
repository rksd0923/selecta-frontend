import React, { useState, useEffect } from 'react';
import API from '../api'
import { useCookies } from 'react-cookie';

function PlayerForm(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState();
    const [token] = useCookies(['selecta-token']);

    useEffect(() => {
        setName(props.player.name)
        setDescription(props.player.body)
    }, [props.player])

    const updateClicked = () => {
        console.log('update here')
        API.updatePlayer(props.player.id, { name, description }, token['selecta-token'])
            .then(res => props.updatedPlayer(res))
            .catch(err => console.log(err))
    }

    const createClicked = () => {
        API.createPlayer({ name, description }, token['selecta-token'])
            .then(res => props.playerCreated(res))
            .catch(err => console.log(err))
    }

    const isDisabled = name.length === 0 || description.length === 0;

    return (
        <React.Fragment>
            {props.player ? (
                <div>
                    <label htmlFor="name">Name</label><br />
                    <input id="name" type="text" placeholder="name" value={name}
                        onChange={evt => setName(evt.target.value)} /><br />
                    <label htmlFor="description">Description</label><br />
                    <textarea id="description" type="text" placeholder="description" value={description}
                        onChange={evt => setDescription(evt.target.value)} ></textarea><br />
                    {props.player.id ?
                        <button onClick={updateClicked} disabled={isDisabled}>Update</button> :
                        <button onClick={createClicked} disabled={isDisabled}>Create</button>
                    }

                </div>
            ) : null}

        </React.Fragment >
    )
}

export default PlayerForm