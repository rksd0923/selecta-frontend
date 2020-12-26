

export class API {
    static loginUser(body) {
        return fetch(`https://selecta-project.herokuapp.com/auth/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(body)
        }).then(res => res.json())

    }

    static registerUser(body) {
        return fetch(`https://selecta-project.herokuapp.com/selecta/users/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(body)
        }).then(res => res.json())

    }

    static updatePlayer(players_id, body, token) {
        return fetch(`https://selecta-project.herokuapp.com/selecta/Players/${players_id}/`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(res => res.json())

    }
    static createPlayer(body) {
        return fetch(`https://selecta-project.herokuapp.com/selecta/Players/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(res => res.json())

    }
    static deletePlayer(players_id, token) {
        return fetch(`https://selecta-project.herokuapp.com/selecta/Players/${players_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            },

        })

    }
}

export default API;