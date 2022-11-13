import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.scss'
import { MyContext } from './../../components/MyContext/MyContext'

const Navbar = () => {
  const {t} =useContext(MyContext);
  return (
    <div className='c-navbar'>
        <NavLink to="/Characters" className='c-navbar__link' >{t('personajes')}</NavLink>              
        <NavLink to="/Houses" className='c-navbar__link' >{t('casas')}</NavLink>
        <NavLink to="/Timeline" className='c-navbar__link' >{t('cronologia')}</NavLink> 
    </div>
  )
}

export default Navbar