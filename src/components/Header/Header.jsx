import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from './../../components/MyContext/MyContext'
import Español from '../../assets/images/flag-español.svg'
import Ingles from '../../assets/images/flag-ingles.svg'
import './Header.scss'


const Header = ({search,searchHouses,className,className1,className2,className3,myHouses}) => {
  const handleChange = (event) => {
    const {value}= event.target;
    !myHouses ? search(value): searchHouses(value)
    ;
    
}
const {t, changeLanguaje} =useContext(MyContext);

  return (
 
  <header className={className3}>
    <div className={className1}><Link className='linksReturn' to="/Characters"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>{t('volver')}</Link></div>
    <div className={className2}><Link className='linksReturn' to="/Houses" ><i class="fa fa-long-arrow-left" aria-hidden="true"></i>{t('volver')}</Link></div>
    <div className={className}>
      <div class="c-input-wrapper">
        <input type="text" name='name' placeholder={t('input')} onChange={handleChange} class="c-input" ></input>
        <svg xmlns="http://www.w3.org/2000/svg" class="c-input-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
      
      
    </div>
    <nav className='c-nav'>
      <Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link> 
      <img className='c-nav__español' src={Español} alt='Español' onClick={()=>changeLanguaje('es')}></img>
      <img className='c-nav__ingles' src={Ingles} alt='Ingles' onClick={()=>changeLanguaje('en')}></img>
    </nav>
  </header>
  )
}

export default Header