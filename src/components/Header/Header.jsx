import React, { useContext } from 'react'
import Img from '../../assets/images/lupa-blanca.png'
import Home from '../../assets/images/home.svg'
import Español from '../../assets/images/español.svg'
import Ingles from '../../assets/images/ingles.svg'
import { MyContext } from './../../components/MyContext/MyContext'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = ({search,searchHouses,className,className1,className2,className3,myHouses}) => {
  const handleChange = (event) => {
    const {value}= event.target;
    // eslint-disable-next-line no-lone-blocks
    {!myHouses ? search(value): searchHouses(value)}
    ;
    
}
const {t, changeLanguaje} =useContext(MyContext);
  return (
 
  <header className={className3}>
    <div className={className1}><Link className='linksReturn' to="/Characters">{t('volver')}</Link>   </div>
    <div className={className2}><Link className='linksReturn' to="/Houses" >{t('volver')}</Link></div>
    <div className={className}>
      <div className='b-header__buscador__div'>
        <img className='b-header__buscador__div__img' src={Img} alt='buscador'></img>
      </div>
      <input type='text' name='nombre' placeholder={t('input')} onChange={handleChange}/>
    </div>
    <nav className='b-nav'>
      <Link to="/" className='Home'>
        <div className='b-nav__div'><img className='b-nav__home' src={Home} alt='Home'></img></div>
      </Link> 
      <div className='b-nav__div' onClick={()=>changeLanguaje('es')}><img className='b-nav__español' src={Español} alt='Español'></img></div>
      <div className='b-nav__div' onClick={()=>changeLanguaje('en')}><img className='b-nav__ingles' src={Ingles} alt='Ingles'></img></div>
    </nav>
  </header>
  )
}

export default Header