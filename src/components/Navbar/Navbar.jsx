import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">   
            <div className="collapse navbar-collapse container d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link 
                            to="/ProblemaUno"
                            className="nav-link"
                        >Problema 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/ProblemaDos"
                            className="nav-link"
                        >Problema 2</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
