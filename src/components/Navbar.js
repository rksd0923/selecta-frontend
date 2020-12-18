import React from 'react'
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (


        <ReactBootstrap.Navbar bg="light" expand="lg">
            <ReactBootstrap.Navbar.Brand href="#home">Selecta por Siempre</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                    <Link to="/players">
                        <ReactBootstrap.Nav.Link href="#Jugadores">Equipo</ReactBootstrap.Nav.Link>
                    </Link>
                    <ReactBootstrap.Nav.Link href="#link">Entrenador</ReactBootstrap.Nav.Link>

                </ReactBootstrap.Nav>
                <ReactBootstrap.Form inline>
                    <ReactBootstrap.Nav.Link href="#home">REGISTRATE</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#home">Entra</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#home">Cierra Sesion</ReactBootstrap.Nav.Link>
                </ReactBootstrap.Form>
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar >

    )
}

export default Navbar
