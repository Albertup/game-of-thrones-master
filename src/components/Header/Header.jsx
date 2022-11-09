import React from 'react'
import Img from '../../shared/assest/lupa-blanca.png'
import Home from '../../shared/assest/home.svg'
import Español from '../../shared/assest/español.svg'
import Ingles from '../../shared/assest/ingles.svg'

import './Header.scss'
import { Link } from 'react-router-dom'

const Header = ({search}) => {
  const handleChange = (event) => {
    const {value}= event.target;
    search(value);
}
  return (
  <header className='b-header'>
    <div className='b-header__buscador'>
      <div className='b-header__buscador__div'>
        <img className='b-header__buscador__div__img' src={Img} alt='buscador'></img>
      </div>
      <input type='text' name='nombre' placeholder='Buscar' onChange={handleChange}/>
    </div>
    <nav className='b-nav'>
      <Link to="/" className='Home'>
        <div className='b-nav__div'><img className='b-nav__home' src={Home} alt='Home'></img></div>
      </Link> 
      <div className='b-nav__div'><img className='b-nav__español' src={Español} alt='Español'></img></div>
      <div className='b-nav__div'><img className='b-nav__ingles' src={Ingles} alt='Ingles'></img></div>
    </nav>
  </header>
  )
}

export default Header