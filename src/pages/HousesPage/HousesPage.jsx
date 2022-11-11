import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './HousesPage.scss';
import HouseImage01 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage02 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage03 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage04 from "./../../assets/images/House-Unknown-Main-Shield.png"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HousesPage = () => {
    const [houses, setHouses] = useState([]);
    const [ housesFiltered, setHousesFiltered] = useState([]);
    const HouseImage = [HouseImage01, HouseImage02, HouseImage03, HouseImage04]
    const imageRandom = Math.floor(Math.random()*4)

    const searchHouses = (name)=>{
      const filterHouse= houses.filter((house)=>house.name.toLowerCase().includes(name.toLowerCase()));
      setHousesFiltered(filterHouse);
      
  }
    
    useEffect(() => {
        async function getData () {
            const {data} = await axios.get (`https://api.got.show/api/show/houses`)
            setHouses(data);
            setHousesFiltered(data);
        }getData()
    }, [])
    // if (!houses) return null;
  return (
    <>
    <div className='b-background'>
      <Header searchHouses={searchHouses} myHouses={houses} className='b-header__buscador' className1='b-charactersReturn--none' className2='b-houseReturn--none' className3='b-header'></Header>
      <div className='c-houses--container'>
          <SimpleBar  className='c-houses--holder'>          
                {housesFiltered.map((item,index) => {
                return (
                    <div className='c-houses--card__holder' key={index}>
                      <div  className="c-houses--card">
                        <Link to={`/Houses/${item.name}`} className="c-houses--card__link">
                        <img src={item?.logoURL || HouseImage[imageRandom]} alt="House"/>
                        <p>{item.name}</p>
                        </Link>
                      </div>
                    </div>                  
                );
                })} 
          </SimpleBar>      
      </div>
      <Footer></Footer>
    </div>
    </>
  )
}


export default HousesPage