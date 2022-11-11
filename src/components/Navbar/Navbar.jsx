import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss'

const Navbar = () => {
  return (
    <div className='b-navBar'>
        <Link to="/Characters" className='Personajes'>Personajes</Link>              
        <Link to="/Houses" className='Casas'>Casas</Link>
        <Link to="/Timeline" className='Cronologia'>Cronologia</Link> 
    </div>
  )
}

export default Navbar