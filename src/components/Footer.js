import React from 'react';
import './Footer.css';
// import facebook from '../media/fb-fillwhite.svg';
// import instagram from '../media/insta-fillwhite.svg';
// import linkedin from '../media/linkedin-fillwhite.svg';

function Footer() {
    return(
        <div className="footer">
            <div className="copyright">
                <small> Copyright &copy; {new Date().getFullYear()} Coden Software Academy.</small>
            </div>
            <div className="gdpr">
            <a href={process.env.PUBLIC_URL + '/terms-and-conditions.pdf'}>Terms and Conditions</a>
            &nbsp;&nbsp;&nbsp;
            <a href={process.env.PUBLIC_URL + '/privacy-policy.pdf'}>Privacy Policy</a>
            
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