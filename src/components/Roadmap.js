import React from 'react';
import frontend from '../frontend.png';
import backend from '../backend.png';
import bullet from '../bullet.png';

function Roadmap() {
    return(
        <div className="roadmap">
            <div className="roadmap-title">
                <img id="bullet" src={bullet} alt='bullet'/>
                <h3>Modulul de Frontend</h3>
            </div>
            <img src={frontend} alt='frontend'/>
            <hr/>
            <div className="roadmap-title">
                <img id="bullet" src={bullet} alt='bullet'/>
                <h3>Modulul de Backend</h3>
            </div>
            <img src={backend} alt='backend'/>
        </div>
    )
}

export default Roadmap;