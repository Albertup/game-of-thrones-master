import React, { useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react';
import { Link} from 'react-router-dom';
import './CharactersPage.scss'
import axios from 'axios';
import Header from '../../components/Header/Header';
import 'simplebar-react/dist/simplebar.min.css';
import Footer from '../../components/Footer/Footer';


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
  <div className='b-background'>
    <Header search={searchCharacters} className='b-header__buscador' className1='b-charactersReturn--none' className2='b-houseReturn--none' className3='b-header'></Header>
    <div className='b-personajes'>
      
        <SimpleBar forceVisible="y" className='b-characters-holder'>
        <div className='b-gallery '>
          {charactersFiltered.map((character,index)=>{
            return(
              <div key={index} className='b-gallery__box'>
                {character.name==='Oberyn Martell'?<img  className='b-img' src='https://media.revistagq.com/photos/5cb72772cd54681383512e5a/master/pass/oberyn_martell_muerte_juego_de_tronos_5354.jpg' alt='imagen'/>:character.name==='Grenn'?<img  className='b-img' src='https://pm1.narvii.com/7259/2b8c6b4ba51b3cc5fa3e623fee1e28719d70743cr1-853-1361v2_hq.jpg' alt='imagen'/>:character.name==='Mossador'?<img  className='b-img' src='https://static.tvmaze.com/uploads/images/medium_portrait/211/529596.jpg' alt='imagen'/>:character.name==='Kinvara'?<img  className='b-img' src='https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Kinvara-Game-of-Thrones-2013231.webp' alt='imagen'/>:character.name==='"Black Walder" Frey'?<img  className='b-img' src='https://static.tvmaze.com/uploads/images/original_untouched/211/529693.jpg' alt='imagen'/>:character.name==='Roslin Frey'?<img  className='b-img' src='https://pm1.narvii.com/7124/c3da03ab29df0df75905081b0c71debd250328a3r1-660-1036v2_hq.jpg' alt='imagen'/>:<img  className='b-img' src={character.image} alt='imagen'/>}        
                  {/* <img  className='b-img' src={character.image} alt='imagen'/> */}
                  <div className='b-div-name'>
                    <Link to={`/characters/${character.name}`} className='b-img__name'>
                        <h4>{character.name}</h4>
                    </Link>
                  </div>
              </div>
              )})}
            </div> 
        </SimpleBar>  
              
    </div>
    <Footer></Footer>
  </div> 
  )
}

export default CharactersPage