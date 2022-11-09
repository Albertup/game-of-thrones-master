import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import Header from '../../components/Header/Header';

import './CharDetailPage.scss';


const CharDetailPage = () => {
    const {idCharacter} = useParams();
    const [character,setCharacter]= useState([])
    const [appearances,setAppearances]= useState([])
    const [allegiances,setAllegiances]= useState([])
    const [siblings,setSiblings]= useState([])
    const [titles,setTitles]= useState([])
    // const [houseName,setHouseName]= useState([])
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
    <Header></Header>
    <div className='b-CharDetail'>
            <img  className='b-CharDetail__img' src={character?.image} alt='imagen'/>
            <h1 className='b-CharDetail__name'>{character?.name}</h1>
        <div className='b-gallery-info'>
          <div className='b-gallery-info__box__House'>
            <h3>CASA</h3>
            {/* <img src={house.logoURL} alt='imagen'/> */}
            {houseInfo.map((home,index)=>{return(
              <img key={index} src={home.logoURL} class='b-gallery-info__box__imgHouse' alt='imagen'/>
            )})}
          </div>
          <div className='b-gallery-info__box'>
            <h3>ALIANZAS</h3>
            <SimpleBar className='simplebar-content simplebar-content--2 simplebar-scrollbar--2::before'>
              <ul>
                {allegiances.map((allegiance,index)=>{return(
                <li key={index}>{allegiance}</li>)})}
              </ul>   
            </SimpleBar> 
          </div>
          <div className='b-gallery-info__box'>
            <h3>APARICIONES</h3>
            <SimpleBar className='simplebar-content simplebar-content--2 simplebar-scrollbar--2::before'>
              <ul>
                {appearances.map((appearance,index)=>{return(
                <li key={index}>{appearance}</li>)})}
              </ul>   
            </SimpleBar> 
          </div>
          <div className='b-gallery-info__box'>
            <h3>PADRE</h3>
            <p >{character?.father}</p>
          </div>
          <div className='b-gallery-info__box'>
            <h3>DESCENDIENTES</h3>
            <SimpleBar className='simplebar-content simplebar-content--2 simplebar-scrollbar--2::before'> 
              <ul>
                {siblings.map((sibling,index)=>{return(
                  <li key={index}>{sibling}</li>
                )})}
              </ul>    
            </SimpleBar> 
          </div>
          <div className='b-gallery-info__box'>
            <h3>TÍTULOS</h3>
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