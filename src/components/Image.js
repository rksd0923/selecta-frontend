import React from 'react'
import './image.css'
import * as ReactBootstrap from 'react-bootstrap'

const Image = () => {
    return (

        < div >

            <div className="site-name"
                style={{
                    backgroundImage: `url("https://i.imgur.com/BUc8qrr.jpg")`, position: 'fixed', minWidth: '100%', minHeight: '100%', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                <h1 className="selecta">Selecta por Siempre</h1>
            </div>

        </div >

    )
}

export default Image