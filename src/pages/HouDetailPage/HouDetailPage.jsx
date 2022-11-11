import axios from 'axios';
import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './HouDetailPage.scss';
import HouseImage01 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage02 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage03 from "./../../assets/images/House-Unknown-Main-Shield.png"
import HouseImage04 from "./../../assets/images/House-Unknown-Main-Shield.png"
import Header from '../../components/Header/Header';
import { MyContext } from './../../components/MyContext/MyContext'
// import Footer from '../../components/Footer/Footer';

const HouDetailPage = () => {
    const {t} = useContext(MyContext)
    const {name} = useParams();
    // const location = useLocation();
    // const navigate = useNavigate();
    // console.log(name);
    // console.log(location);
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
    {house.map((item,index) => {
      return (
        <div key={index}  className='b-background'>
          <Header className='b-header__buscador b-header__buscador--none'
          className1='b-charactersReturn--none' className2='b-houseReturn' className3='b-header'></Header>
          <div className='c-house--container'>
            <div className='c-house--card'>
                <img src={HouseImage[imageRandom]} alt="House"/>
                <h3>{item.name}</h3>
              <div className='c-house--card--info'>
                <span >
                  <h3>{t('lema')}</h3>
                  <p>{item.words}</p>
                </span>
                <span>
                  <h3>{t('sede')}</h3>
                    <ul>
                      {item.seat.map((seat, index) => (
                      <li key={index}>{seat}</li>
                      ))}
                  </ul>
                </span>
                <span>
                  <h3>{t('region')}</h3>
                    <ul>
                      {item.region.map((region, index) => (
                      <li key={index}>{region}</li>
                      ))}
                  </ul>
                </span>
                <span>
                  <h3>{t('alianzas')}</h3>
                    <ul>
                      {item.allegiance.map((allegiance, index) => (
                      <li key={index}>{allegiance}</li>
                      ))}
                    </ul>
                </span>
                <span>
                  <h3>{t('religion')}</h3>
                  <ul>
                    {item.religion.map((religion, index) => (
                    <li key={index}>{religion}</li>
                    ))}
                  </ul>
                </span>
                <span>
                  <h3>{t('fundacion')}</h3>
                  <p>{moment(item.createdAt).calendar()}</p>
                </span>
              </div>
              
              {/* <button onClick={() => navigate("/Houses")}>Close</button> */}
            </div>
          </div>
      </div>                     
      );
      })}
    
    </>
  )
}

export default HouDetailPage