import React from 'react';
import './Headline.css';
import duration from '../media/duration-white.png';
import price from '../media/price-red.png';
import clock from '../media/clock.svg';
import location from '../media/online2.svg';
import title from '../media/star-white.svg';

const HEADLINE_NAME = 'Curs Full Stack Javascript Developer';
const HEADLINE_TYPE = 'Part-time [REMOTE]';
const HEADLINE_DETAILS = '12 saptamani de curs, 3 zile pe saptamana, fara a fi nevoie sa te deplasezi';
const SUBTITLE = [
  'Devino Junior Full Stack Developer in doar 12 saptamani fara a fi nevoie de experienta anterioara.',
  'Vei invata sa dezvolti atat aplicatii web cat si API-uri direct de la tine de acasa'
]

function Headline() {
    return(
        <div className="headline">
          <div className="aux"></div>
          <h1>{HEADLINE_NAME}<br/>{HEADLINE_TYPE}</h1>
          <div className="details">
            {/* <span className="head-span"><img src={duration} />&nbsp; 12 saptamani</span>
            <span className="head-span"><img src={clock} />&nbsp; 108 ore</span>
            <span className="head-span"><img src={location} />&nbsp; Online</span> */}
            <span className="head-span"><img src={title} />&nbsp; {HEADLINE_DETAILS}</span>
          </div>
          <div className="subtitle">
            <div className="aux-subtitle">
              <p>{SUBTITLE[0]}<br/>
               {SUBTITLE[1]} </p>
            </div>
          </div>
        </div>
    )
}

export default Headline;