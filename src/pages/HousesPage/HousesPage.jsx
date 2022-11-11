import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './HousesPage.scss';

import HouseImage01 from "./../../assets/images/House-Chian-Main-Shield.png"
import HouseImage02 from "./../../assets/images/House-Dragon-Main-Shield.png"
import HouseImage03 from "./../../assets/images/House-Lion-Main-Shield.png"
import HouseImage04 from "./../../assets/images/House-Lobster-Main-Shield.png"
import HouseImage05 from "./../../assets/images/House-Rabbits-Main-Shield.png"
import HouseImage06 from "./../../assets/images/House-Sun-Main-Shield.png"
import HouseImage07 from "./../../assets/images/House-Targarian-Main-Shield.png"
import HouseImage08 from "./../../assets/images/House-Turution-Main-Shield.png"
import HouseImage09 from "./../../assets/images/House-TwoDots-Main-Shield.png"

const HousesPage = () => {
    const [houses, setHouses] = useState([]);

    const HouseImage = [HouseImage01, HouseImage02, HouseImage03, HouseImage04, HouseImage05, HouseImage06, HouseImage07, HouseImage08, HouseImage09]
    let imageRandom = Math.floor(Math.random()*9)
    
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
                  item.logoURL = item.name === "House User:Lord Bardo"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Lothston"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Manwoody"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Qoherys"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Stark"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Strong"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Towers"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Towers (North)"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Tyrell"  ?  null: item?.logoURL;
                  item.logoURL = item.name === "House Velaryon"  ?  null: item?.logoURL;
                return (
                    <div className='c-houses--card__holder'>                   
                      <div key={JSON.stringify(item)} className="c-houses--card">
                        <Link to={`/Houses/${item.name}`}>
                        <img src={item?.logoURL || HouseImage[imageRandom]} alt="House" />
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