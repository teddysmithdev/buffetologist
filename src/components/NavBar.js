import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
           <nav className="navbar navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Buffetologist.com</Link>
            </nav> 
        </div>
    )
}

export default NavBar;
