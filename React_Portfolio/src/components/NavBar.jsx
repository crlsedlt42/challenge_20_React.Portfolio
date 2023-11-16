import React from "react"

import { Link, useLocation } from "react-router-dom"

import "../style/NavBar.css"

const NavBar = () => {
    const location = useLocation().pathname;
    return (
    <>
        <nav>
            <p className="title">
            <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </p>
            <ul>
                <li>
                    <Link to="/aboutMe" className={location === '/aboutMe' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                </li>
                <li>
                    <Link to="/projects" className={location === '/projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
                </li>
                <li>
                    <Link to="/resume" className={location === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                </li>
                <li>
                    <Link to="/contactMe" className={location === '/contactMe' ? 'nav-link active' : 'nav-link'}>Contact Me</Link>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default NavBar