import React from 'react';
import './Headline.css';
// import duration from '../media/duration-white.png';
// import price from '../media/price-red.png';
// import clock from '../media/clock.svg';
// import location from '../media/online2.svg';
import title from '../media/star-white.svg';

const HEADLINE_NAME = 'Full Stack Javascript Developer Course';
const HEADLINE_TYPE = 'Part-time [ONLINE]';
const HEADLINE_DETAILS = '12 course weeks, 3 days per week';
const SUBTITLE = [
  'Become a Junior Full Stack Developer in just 12 weeks without any prior experience.',
  'You will learn to develop both web applications and APIs straight from your home.'
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
            <span className="head-span"><img src={title} alt="title" />&nbsp; {HEADLINE_DETAILS}</span>
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