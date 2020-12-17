import React from 'react'
import './image.css'
import * as ReactBootstrap from 'react-bootstrap'

const Image = () => {
    return (

        < div >

            <div
                style={{
                    backgroundImage: `url("https://i.imgur.com/znlEGXU.jpg")`, position: 'fixed', minWidth: '100%', minHeight: '100%', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                Nice Snippets
        </div>

        </div >

    )
}

export default Image