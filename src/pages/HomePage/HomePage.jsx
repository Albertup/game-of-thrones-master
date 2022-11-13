import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './HomePage.scss'
import { MyContext } from './../../components/MyContext/MyContext'

const HomePage = () => {
  const {t} = useContext(MyContext)
  return (
  <div className='b-background-home'>
    <Header className='b-header__buscador b-header__buscador--none'
          className1='b-charactersReturn--none' className2='b-houseReturn--none' className3='b-header--sec'></Header>
    <div className='b-title-container'>
      <div className='b-title'>
        <h1>GAMES OF THRONES</h1>
      </div>
    </div>
    <Footer></Footer>
  </div>  
    
  )
}

export default HomePage