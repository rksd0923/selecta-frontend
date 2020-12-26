import React, { useState, useEffect } from 'react';
import { API } from '../api'
import { useCookies } from 'react-cookie';
import Navbar from './Navbar'
import './auth.css'

function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const [token, setToken] = useCookies(['selecta-token']);

    /*useEffect(() => {
        console.log(token);
        if (token['selecta-token']) window.location.href = '/players';
    }, [token])*/

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

            <Navbar />

            <header className="App-header">
                <h1>Por Favor Registrese o Entre en Sesion</h1>
                {isLoggedIn ? <h1>Entre en Sesion</h1>
                    : <h1>Registracion</h1>}
            </header>
            <div className="login">

                <form>
                    {isLoggedIn ?
                        <div>
                            <label htmlFor="username">Nombre de Usuario</label><br />
                            <input id="name" type="text" placeholder="Nombre de Usuario" value={username}
                                onChange={evt => setUsername(evt.target.value)} /><br />
                            <label htmlFor="password">Contraseña</label><br />
                            <input id="password" type="password" placeholder="Contraseña" value={password}
                                onChange={evt => setPassword(evt.target.value)} /><br />
                        </div> :

                        <div><label htmlFor="username">Nombre de Usuario</label><br />
                            <input id="name" type="text" placeholder="Nombre de Usuario" value={username}
                                onChange={evt => setUsername(evt.target.value)} /><br />
                            <label htmlFor="email">Correo Electronico</label><br />
                            <input id="email" type="email" placeholder="Correo Electronico" value={email}
                                onChange={evt => setEmail(evt.target.value)} /><br />
                            <label htmlFor="password">Contraseña</label><br />
                            <input id="password" type="password" placeholder="Contraseña" value={password}
                                onChange={evt => setPassword(evt.target.value)} /><br />
                        </div>
                    }
                </form>



                {
                    isLoggedIn ?
                        <button onClick={loginClicked} disabled={isDisabled}>Entre en Sesion</button> :
                        <button onClick={registerClicked} disabled={isDisabled}>Registrese</button>
                }

                {
                    isLoggedIn ?

                        <p className="register" onClick={() => setIsLoggedIn(false)}>Si no tiene cuenta por favor.  REGISTRESE AQUI</p> :
                        <p className="login" onClick={() => setIsLoggedIn(true)}>Si tiene cuenta.  ENTRE AQUI</p>
                }

            </div>


        </div >
    )
}

export default Auth