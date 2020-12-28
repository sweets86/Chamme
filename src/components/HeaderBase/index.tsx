import React from 'react'
import {Link} from 'react-router-dom'
import {navbar, titleLink} from './HeaderBaseStyled'

export default function HeaderBase() {
    return (
        <div style={navbar}>
            <Link to={'/'}>
            <h1 style={titleLink}>
                Chameleone</h1>
            </Link>
        </div>
    )
}