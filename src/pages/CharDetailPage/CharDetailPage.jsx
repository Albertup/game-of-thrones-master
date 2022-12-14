import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Header from '../../components/Header/Header';
import HouseImage01 from "./../../assets/images/House-Chian-Main-Shield.png"
import HouseImage02 from "./../../assets/images/House-Dragon-Main-Shield.png"
import HouseImage03 from "./../../assets/images/House-Lion-Main-Shield.png"
import HouseImage04 from "./../../assets/images/House-Lobster-Main-Shield.png"
import HouseImage05 from "./../../assets/images/House-Rabbits-Main-Shield.png"
import HouseImage06 from "./../../assets/images/House-Sun-Main-Shield.png"
import HouseImage07 from "./../../assets/images/House-Targarian-Main-Shield.png"
import HouseImage08 from "./../../assets/images/House-Turution-Main-Shield.png"
import HouseImage09 from "./../../assets/images/House-TwoDots-Main-Shield.png"
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
    const HouseImage = [HouseImage01, HouseImage02, HouseImage03, HouseImage04, HouseImage05, HouseImage06, HouseImage07, HouseImage08, HouseImage09]
    let imageRandom = Math.floor(Math.random()*9)
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
  <> 
    <Header className='b-header__buscador b-header__buscador--none'
          className1='b-charactersReturn' className2='b-houseReturn--none' className3='b-header'></Header>
    <div className='c-CharDetail'>
        <div className='c-CharMain'>
            <img className='c-CharMain__img' src={character?.image} alt={character?.name}/>
            <h1 className='c-CharMain__name'>{character?.name}</h1>
        </div>
        <div className='c-gallery-info'>
          <div className='c-gallery-info__box'>
            <h3>{t('casa')}</h3>
            {houseInfo.map((item,index)=>{
              imageRandom = Math.floor(Math.random()*9)
                  item.logoURL = item.name === "House Amber"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Baratheon"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Blackfyre"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Blackmont"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Bolton"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Botley"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Caron"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Cerwyn"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Cole"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Durrandon"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Frost"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Greenwood"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Hightower"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Lannister"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Lannister of Lannisport"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "User:Lord Bardo"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Lothston"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Manwoody"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Qoherys"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Stark"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Strong"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Towers"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Towers (North)"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Tyrell"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Velaryon"  ?  null: item?.logoURL;
              return(
              
              <div className='c-gallery-info__shield'><img key={index} src={item.logoURL||HouseImage[imageRandom]}  alt='imagen'/></div> 
            )})}
          </div>
          <div className='c-gallery-info__box'>
            <h3>{t('alianzas')}</h3>
            <SimpleBar className='simplebar-content'>
              <ul>
                {allegiances.map((allegiance,index)=>{return( 
                <li key={index}>{allegiance}</li>)})}
              </ul>   
            </SimpleBar> 
          </div>
          <div className='c-gallery-info__box'>
            <h3>{t('apariciones')}</h3>
            <SimpleBar className='simplebar-content'>
              <ul>
                {appearances.map((appearance,index)=>{return(
                <li key={index}>{appearance}</li>)})}
              </ul>   
            </SimpleBar> 
          </div>
          <div className='c-gallery-info__box'>
            <h3>{t('padre')}</h3>
            <p >{character?.father}</p>
          </div>
          <div className='c-gallery-info__box'>
            <h3>{t('descendientes')}</h3>
            <SimpleBar className='simplebar-content'> 
              <ul>
                {siblings.map((sibling,index)=>{return(
                  <li key={index}>{sibling}</li>
                )})}
              </ul>    
            </SimpleBar> 
          </div>
          <div className='c-gallery-info__box'>
            <h3>{t('titulos')}</h3>
            <SimpleBar className='simplebar-content'>
              <ul>
                {titles.map((title,index)=>{return(
                  <li key={index}>{title}</li>
                )})}
              </ul>
            </SimpleBar> 
          </div>
        </div>       
    </div>
  </>   
  )
}

export default CharDetailPage