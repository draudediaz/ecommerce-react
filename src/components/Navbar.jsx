import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.scss"


export const Navbar = () => {
  return ( 
    <div>
        <nav className='menu'>
            <ul className='itemsMenu'>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/"}>Móviles</Link>
                </li>
                <li>
                    <Link to={"/"}>Televisores</Link>
                </li>
                <li>
                    <Link to={"/"}>Portàtiles</Link>
                </li>
                <li>
                    <Link to={"/"}>Consolas</Link>
                </li>
                <li>
                    <Link to={"/"}>Videojuegos</Link>
                </li>
            </ul>
        </nav>
      </div>
  )
}