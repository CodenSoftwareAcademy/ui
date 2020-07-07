import React from 'react';
import './Footer.css';
// import facebook from '../media/fb-fillwhite.svg';
// import instagram from '../media/insta-fillwhite.svg';
// import linkedin from '../media/linkedin-fillwhite.svg';

function Footer() {
    return(
        <div className="footer">
            <div className="copyright">
                <small> Copyright &copy; {new Date().getFullYear()} Coden Software Academy. All Rights Reserved.</small>
            </div>
            {/* <div className="social-media">
                <img src={facebook} alt="facebook-icon"/>
                <img src={instagram} alt="instagram-icon"/>
                <img src={linkedin} alt="linkedin-icon"/>
            </div> */}
        </div>
    )
}

export default Footer;