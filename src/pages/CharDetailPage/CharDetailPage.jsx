import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Header from '../../components/Header/Header';
import HouseImage01 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage02 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage03 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage04 from "./../../assets/images/House-Unknown-Main-Shield.png"
import './CharDetailPage.scss';
import { MyContext } from './../../components/MyContext/MyContext'


const CharDetailPage = () => {
  const {t} = useContext(MyContext)
    const {idCharacter} = useParams();
    const [character,setCharacter]= useState([])
    const [appearances,setAppearances]= useState([])
    const [allegiances,setAllegiances]= useState([])
    const [siblings,setSiblings]= useState([])
    const [titles,setTitles]= useState([])
    // const [houseName,setHouseName]= useState([])
    const HouseImage = [HouseImage01, HouseImage02, HouseImage03, HouseImage04]
    const imageRandom = Math.floor(Math.random()*4)
    const [houseInfo,setHouseInfo]= useState([])
    useEffect(()=>{
        async function getData() {
            const {data} = await axios.get(`https://api.got.show/api/show/characters/${idCharacter}`);
            setCharacter(data);
            setAllegiances(data.allegiances);
            setAppearances(data.appearances);
            setSiblings(data.siblings);
            setTitles(data.titles);
            // setHouseName(data.house);
            getData2(data.house)
            }getData();
            async function getData2(houseName) {
              const {data} = await axios.get(`https://api.got.show/api/show/houses/${houseName}`);
              setHouseInfo(data);
              }        
    },[])
 

  return (
  <div className='b-background'> 
    <Header className='b-header__buscador b-header__buscador--none'
          className1='b-charactersReturn' className2='b-houseReturn--none' className3='b-header'></Header>
    <div className='b-CharDetail'>
            <img  className='b-CharDetail__img' src={character?.image} alt='imagen'/>
            <h1 className='b-CharDetail__name'>{character?.name}</h1>
        <div className='b-gallery-info'>
          <div className='b-gallery-info__box__House'>
            <h3>{t('casa')}</h3>
            {/* <img src={house.logoURL} alt='imagen'/> */}
            {houseInfo.map((home,index)=>{return(
              <img key={index} src={home.logoURL||HouseImage[imageRandom]}className='b-gallery-info__box__imgHouse' alt='imagen'/>
            )})}
          </div>
          <div className='b-gallery-info__box'>
            <h3>{t('alianzas')}</h3>
            <SimpleBar className='simplebar-content simplebar-content--2 simplebar-scrollbar--2::before'>
              <ul>
                {allegiances.map((allegiance,index)=>{return(
                <li key={index}>{allegiance}</li>)})}
              </ul>   
            </SimpleBar> 
          </div>
          <div className='b-gallery-info__box'>
            <h3>{t('apariciones')}</h3>
            <SimpleBar className='simplebar-content simplebar-content--2 simplebar-scrollbar--2::before'>
              <ul>
                {appearances.map((appearance,index)=>{return(
                <li key={index}>{appearance}</li>)})}
              </ul>   
            </SimpleBar> 
          </div>
          <div className='b-gallery-info__box'>
            <h3>{t('padre')}</h3>
            <p >{character?.father}</p>
          </div>
          <div className='b-gallery-info__box'>
            <h3>{t('descendientes')}</h3>
            <SimpleBar className='simplebar-content simplebar-content--2 simplebar-scrollbar--2::before'> 
              <ul>
                {siblings.map((sibling,index)=>{return(
                  <li key={index}>{sibling}</li>
                )})}
              </ul>    
            </SimpleBar> 
          </div>
          <div className='b-gallery-info__box'>
            <h3>{t('titulos')}</h3>
            <SimpleBar className='simplebar-content simplebar-content--2 simplebar-scrollbar--2::before'>
              <ul>
                {titles.map((title,index)=>{return(
                  <li key={index}>{title}</li>
                )})}
              </ul>
            </SimpleBar> 
          </div>
        </div>       
    </div>
  </div>   
  )
}

export default CharDetailPage