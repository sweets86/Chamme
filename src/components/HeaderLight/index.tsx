import React from 'react'
import {Link} from 'react-router-dom'
import {navbar, titleLink} from './HeaderLightStyled'

export default function HeaderLight() {
    return (
        <div style={navbar}>
            <Link to={'/'}>
            <h1 style={titleLink}>
                Chameleone</h1>
            </Link>
        </div>
    )
}