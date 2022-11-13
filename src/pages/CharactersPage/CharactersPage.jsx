import React, { useContext, useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react';
import { Link} from 'react-router-dom';
import './CharactersPage.scss'
import axios from 'axios';
import Header from '../../components/Header/Header';
import 'simplebar-react/dist/simplebar.min.css';
import Footer from '../../components/Footer/Footer';
import { MyContext } from './../../components/MyContext/MyContext'


const CharactersPage = () => {
  const [characters,setCharacters] = useState([]);

  const [ charactersFiltered, setCharactersFiltered] = useState([]);

  const searchCharacters = (name)=>{
    const filterCharacter= characters.filter((character)=>character.name.toLowerCase().includes(name.toLowerCase()));
    setCharactersFiltered(filterCharacter);
    
}
  
    useEffect(()=>{
        async function getData() {
            const {data} = await axios.get('https://api.got.show/api/show/characters/')
            setCharacters(data);
            setCharactersFiltered(data)
        }getData() 
    },[])
   
  return (
  <>
    <Header search={searchCharacters} className='b-header__buscador' className1='b-charactersReturn--none' className2='b-houseReturn--none' className3='b-header'></Header>
    <div className='c-character'>
        <SimpleBar forceVisible="y" className='c-characters--holder'>
        <div className='c-character--gallery'>
          {charactersFiltered.map((character,index)=>{
            return(
              <Link to={`/characters/${character.name}`}>
                <div key={index} className='c-character--gallery__box'>
                      {character.name==='Oberyn Martell'? <img  className='c-img' src='https://media.revistagq.com/photos/5cb72772cd54681383512e5a/master/pass/oberyn_martell_muerte_juego_de_tronos_5354.jpg' alt={character.name}/>:character.name==='Grenn'?<img  className='c-img' src='https://pm1.narvii.com/7259/2b8c6b4ba51b3cc5fa3e623fee1e28719d70743cr1-853-1361v2_hq.jpg' alt={character.name}/>:character.name==='Mossador'?<img  className='c-img' src='https://static.tvmaze.com/uploads/images/medium_portrait/211/529596.jpg' alt={character.name}/>:character.name==='Kinvara'?<img  className='c-img' src='https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Kinvara-Game-of-Thrones-2013231.webp' alt={character.name}/>:character.name==='"Black Walder" Frey'?<img  className='c-img' src='https://static.tvmaze.com/uploads/images/original_untouched/211/529693.jpg' alt={character.name}/>:character.name==='Roslin Frey'?<img  className='c-img' src='https://pm1.narvii.com/7124/c3da03ab29df0df75905081b0c71debd250328a3r1-660-1036v2_hq.jpg' alt={character.name}/>:<img  className='c-img' src={character.image} alt={character.name}/>}     
                    <div className='c-img__name'>
                      <p>{character.name}</p>
                    </div>
                </div>
              </Link>
              )})}
            </div> 
        </SimpleBar>          
    </div>
    <Footer/>
  </> 
  )
}

export default CharactersPage