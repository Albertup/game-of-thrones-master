import axios from 'axios';
import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './HouDetailPage.scss';
import HouseImage01 from "./../../assets/images/House-Chian-Main-Shield.png"
import HouseImage02 from "./../../assets/images/House-Dragon-Main-Shield.png"
import HouseImage03 from "./../../assets/images/House-Lion-Main-Shield.png"
import HouseImage04 from "./../../assets/images/House-Lobster-Main-Shield.png"
import HouseImage05 from "./../../assets/images/House-Rabbits-Main-Shield.png"
import HouseImage06 from "./../../assets/images/House-Sun-Main-Shield.png"
import HouseImage07 from "./../../assets/images/House-Targarian-Main-Shield.png"
import HouseImage08 from "./../../assets/images/House-Turution-Main-Shield.png"
import HouseImage09 from "./../../assets/images/House-TwoDots-Main-Shield.png"
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
    const HouseImage = [HouseImage01, HouseImage02, HouseImage03, HouseImage04, HouseImage05, HouseImage06, HouseImage07, HouseImage08, HouseImage09]
    let imageRandom = Math.floor(Math.random()*9)
    
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
          {house && house.map((item) => {
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
          <div className='c-house--container'>
            <div key={JSON.stringify(item)} className='c-house--card'>
                <img src={item?.logoURL || HouseImage[imageRandom]} alt="House"/>
                <p>{item.name}</p>
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
            </div>
          </div>                  
      );
      })}
      </div>                     
      );
      })}
    
    </>
  )
}

export default HouDetailPage