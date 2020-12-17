import React, { useState, useEffect } from 'react';
import { API } from '../api'
import { useCookies } from 'react-cookie';

function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const [token, setToken] = useCookies(['selecta-token']);

    useEffect(() => {
        console.log(token);
        if (token['selecta-token']) window.location.href = '/players';
    }, [token])

    const loginClicked = () => {
        API.loginUser({ username, password })
            .then(res => setToken('selecta-token', res.token))
            .catch(err => console.log(err))
    }

    const registerClicked = () => {
        API.registerUser({ username, email, password })
            .then(() => loginClicked())
            .catch(err => console.log(err))
    }

    const isDisabled = username.length === 0 || password.length === 0;

    return (
        <div className="App">

            <header className="App-header">
                {isLoggedIn ? <h1>Login</h1>
                    : <h1>Register</h1>}
            </header>
            <div className="login">

                <form>
                    {isLoggedIn ?
                        <div>
                            <label htmlFor="username">Username</label><br />
                            <input id="name" type="text" placeholder="username" value={username}
                                onChange={evt => setUsername(evt.target.value)} /><br />
                            <label htmlFor="password">Password</label><br />
                            <input id="password" type="password" placeholder="password" value={password}
                                onChange={evt => setPassword(evt.target.value)} /><br />
                        </div> :

                        <div><label htmlFor="username">Username</label><br />
                            <input id="name" type="text" placeholder="username" value={username}
                                onChange={evt => setUsername(evt.target.value)} /><br />
                            <label htmlFor="email">Email</label><br />
                            <input id="email" type="email" placeholder="email" value={email}
                                onChange={evt => setEmail(evt.target.value)} /><br />
                            <label htmlFor="password">Password</label><br />
                            <input id="password" type="password" placeholder="password" value={password}
                                onChange={evt => setPassword(evt.target.value)} /><br />
                        </div>
                    }
                </form>



                {
                    isLoggedIn ?
                        <button onClick={loginClicked} disabled={isDisabled}>Login</button> :
                        <button onClick={registerClicked} disabled={isDisabled}>Register</button>
                }

                {
                    isLoggedIn ?

                        <p onClick={() => setIsLoggedIn(false)}>You don't have an account.  Register here</p> :
                        <p onClick={() => setIsLoggedIn(true)}>You have an account.  Login here</p>
                }

            </div>


        </div >
    )
}

export default Auth