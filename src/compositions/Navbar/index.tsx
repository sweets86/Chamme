import React from 'react'
import {Link} from 'react-router-dom'
import {navbar, titleLink} from './NavbarStyled'

export default function Navbar() {
    return (
        <div style={navbar}>
            <Link to={'./'}>
            <h1 style={titleLink}>Chameleone</h1>
            </Link>
        </div>
    )
}
