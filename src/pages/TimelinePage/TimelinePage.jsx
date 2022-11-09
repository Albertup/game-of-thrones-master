
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './TimelinePage.scss';

const TimelinePage = () => {
  const [characters, setcharacters] = useState([]);
  const charactersFilter = [];
  const [ageOrder, setAgeOrder] = useState(true);
  const characterCouple = [];
  const characterOdd = [];

  for (let item of characters) {
    if (item.age && item.age.age !== null && item.age.age !== undefined && item.age.age <= 99 ) {
      charactersFilter.push(item);
    }
  }
  if (ageOrder === false) {
    //ascending
    charactersFilter.sort(
      (a, b) => parseFloat(a.age.age) - parseFloat(b.age.age)
    );
  } else {
    //descending
    charactersFilter.sort(
      (a, b) => parseFloat(b.age.age) - parseFloat(a.age.age)
    );
  }
  for (let i = 0; i < charactersFilter.length; i++) {
    if (i % 2 === 0) {
      characterCouple.push(charactersFilter[i]);
    } else {
      characterOdd.push(charactersFilter[i]);
    }
  }

  useEffect(() => {
          async function getData () {
              const {data} = await axios.get (`https://api.got.show/api/show/characters`)
              setcharacters(data)
          }getData()
      }, [])
      if (!characters) return null;

  return (
    <>
      <div className='c-timeline--container'>
        <SimpleBar  className='c-timeline--holder'> 
          <div className="c-timeline--btn">
            <button onClick={() => {
                ageOrder === true ? setAgeOrder(false) : setAgeOrder(true);
              }}>{ageOrder === true ? <i class="fa fa-arrow-circle-up" aria-hidden="true"></i> : <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>}
              </button>        
          </div>
          <div className="c-timeline--cardholder">
            <div className="c-timeline--cardholder__couple">
              {characterCouple.map((item) => (
                <Link to={`/characters/${item.name}`}>
                  <div className="c-timeline--card__couple">
                    
                    <div className="c-timeline--card">
                    <h3>{item.age.age}</h3>
                    <h3> {item.name} </h3>
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="c-timeline--cardholder__odd">
              {characterOdd.map((item) => (
                <Link to={`/characters/${item.name}`}>
                  <div className="c-timeline--card__odd">
                    <div className="c-timeline--card">
                      <h3>{item.age.age}</h3>
                      <h3> {item.name} </h3>
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SimpleBar> 
      </div>
    </>

  )
}

export default TimelinePage