import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './HousesPage.scss';
import HouseImage01 from "./../../images/House-Unknown-Main-Shield.png"
import HouseImage02 from "./../../images/House-Unknown-Main-Shield.png"
import HouseImage03 from "./../../images/House-Unknown-Main-Shield.png"
import HouseImage04 from "./../../images/House-Unknown-Main-Shield.png"

const HousesPage = () => {
    const [houses, setHouses] = useState([]);
    const HouseImage = [HouseImage01, HouseImage02, HouseImage03, HouseImage04]
    const imageRandom = Math.floor(Math.random()*4)
    
    useEffect(() => {
        async function getData () {
            const {data} = await axios.get (`https://api.got.show/api/show/houses`)

            console.log(data);
            setHouses(data)
        }getData()
    }, [])
    if (!houses) return null;
  return (
    <>
      <div className='c-houses--container'>
          <SimpleBar  className='c-houses--holder'>          
                {houses && houses.map((item) => {
                return (
                    <div className='c-houses--card__holder'>
                      <div key={JSON.stringify(item)} className="c-houses--card">
                        <Link to={`/Houses/${item.name}`}>
                        <img src={item?.logoURL || HouseImage[imageRandom]} alt="House"/>
                        <p>{item.name}</p>
                        </Link>
                      </div>
                    </div>                  
                );
                })} 
          </SimpleBar>      
      </div>
    </>
  )
}


export default HousesPage