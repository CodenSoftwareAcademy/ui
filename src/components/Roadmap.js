import React from 'react';
import './Roadmap.css';
import frontend from '../media/frontend.png';
import backend from '../media/backend.png';
import bullet from '../media/bullet.png';

const FRONTEND_TITLE = 'Frontend Module';
const BACKEND_TITLE = 'Backend Module';

function Roadmap() {
    return(
        <div className="roadmap">
            <div className="roadmap-title">
                <img id="bullet" src={bullet} alt='bullet'/>
                <h3>{FRONTEND_TITLE}</h3>
            </div>
            <img src={frontend} alt='frontend'/>
            <hr/>
            <div className="roadmap-title">
                <img id="bullet" src={bullet} alt='bullet'/>
                <h3>{BACKEND_TITLE}</h3>
            </div>
            <img src={backend} alt='backend'/>
        </div>
    )
}

export default Roadmap;