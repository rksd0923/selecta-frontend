import React from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import './facebook.css';


const Facebook = () => {
    return (

        <ReactBootstrap.Container fluid>
            <ReactBootstrap.Row>
                <ReactBootstrap.Col>
                    <div className="fb-comments" data-href="https://selectaxsiempre.net/" data-width="50%" data-numposts="5" data-mobile="Auto-detected"></div>


                </ReactBootstrap.Col>

            </ReactBootstrap.Row>
        </ReactBootstrap.Container>


    )
}

export default Facebook