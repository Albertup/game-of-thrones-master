import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './HouDetailPage.scss';

import HouseImage01 from "./../../images/House-Unknown-Main-Shield.png"
import HouseImage02 from "./../../images/House-Unknown-Main-Shield.png"
import HouseImage03 from "./../../images/House-Unknown-Main-Shield.png"
import HouseImage04 from "./../../images/House-Unknown-Main-Shield.png"

const HouDetailPage = () => {
    const {name} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(name);
    console.log(location);
    const [house, setHouse] = useState([]);

    const HouseImage = [HouseImage01, HouseImage02, HouseImage03, HouseImage04]
    const imageRandom = Math.floor(Math.random()*4)
    
    useEffect(() => {
        async function getDetail () {
            const res = await axios.get(`https://api.got.show/api/show/houses/${name}`)

            // console.log(res.data);
            setHouse(res.data)
        }getDetail()
    },[])
      if (!house) return null;
  return (
    <>
    {house && house.map((item) => {
      return (
          <div className='c-house--container'>
            <div key={JSON.stringify(item)} className='c-house--card'>
                <img src={item.logoURL || HouseImage[imageRandom]} alt="House"/>
                <p>{item.name}</p>
              <div className='c-house--card--info'>
                <span >
                  <h3>Lema</h3>
                  <p>{item.words}</p>
                </span>
                <span>
                  <h3>Sede</h3>
                    <ul>
                      {item.seat.map((seat, index) => (
                      <li key={index}>{seat}</li>
                      ))}
                  </ul>
                </span>
                <span>
                  <h3>Región</h3>
                    <ul>
                      {item.region.map((region, index) => (
                      <li key={index}>{region}</li>
                      ))}
                  </ul>
                </span>
                <span>
                  <h3>Alianzas</h3>
                    <ul>
                      {item.allegiance.map((allegiance, index) => (
                      <li key={index}>{allegiance}</li>
                      ))}
                    </ul>
                </span>
                <span>
                  <h3>Religión</h3>
                  <ul>
                    {item.religion.map((religion, index) => (
                    <li key={index}>{religion}</li>
                    ))}
                  </ul>
                </span>
                <span>
                  <h3>Fundación</h3>
                  <p>{moment(item.createdAt).calendar()}</p>
                </span>
              </div>
              
              <button onClick={() => navigate("/Houses")}>Close</button>
            </div>
          </div>                  
      );
      })}
    
    </>
  )
}

export default HouDetailPage