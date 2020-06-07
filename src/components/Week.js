import React from 'react';
import './Week.css';
import week from '../media/week-ro.png';

function Week() {
    return(
        <div className="week">
            <img src={week} alt="typical week"/>
        </div>
    )
}

export default Week;