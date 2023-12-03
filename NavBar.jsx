import React from 'react';
import "./NavBar.css"
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <h1>Mec Matrimony</h1>
        <ul>
            <li>
                <Link to="/" >Home</Link>
                <Link to="/add">Add Confession</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar