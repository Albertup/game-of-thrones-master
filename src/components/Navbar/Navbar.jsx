import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss'
import { MyContext } from './../../components/MyContext/MyContext'

const Navbar = () => {
  const {t} =useContext(MyContext);
  return (
    <div className='b-navBar'>
        <Link to="/Characters" className='Personajes'>{t('personajes')}</Link>              
        <Link to="/Houses" className='Casas'>{t('casas')}</Link>
        <Link to="/Timeline" className='Cronologia'>{t('cronologia')}</Link> 
    </div>
  )
}

export default Navbar