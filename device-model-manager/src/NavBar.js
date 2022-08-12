import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navbar">
            <h1>CC Project</h1>
            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/devicemodelmanager"> Device-Model Manager </Link>
            </div>
        </nav>
    )
}

export default NavBar;