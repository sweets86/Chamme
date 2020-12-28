import React from 'react'
import {Link} from 'react-router-dom'
import {navbar, titleLink} from './HeaderMainStyled'

export default function HeaderMain() {
    return (
        <div style={navbar}>
            <Link to={'/'}>
            <h1 style={titleLink}>
                Chameleone</h1>
            </Link>
        </div>
    )
}