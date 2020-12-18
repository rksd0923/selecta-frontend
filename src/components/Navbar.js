import React from 'react'
import './Navbar.css';
import * as ReactBootstrap from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (


        <ReactBootstrap.Navbar bg="secondary" variant="dark" expand="lg">
            <ReactBootstrap.Navbar.Brand className="navbar" href="#home">Selecta por Siempre</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                    <Link to="/players">
                        <ReactBootstrap.Nav.Link href="#Equipo">Equipo</ReactBootstrap.Nav.Link>
                    </Link>


                </ReactBootstrap.Nav>

            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar >

    )
}

export default Navbar
