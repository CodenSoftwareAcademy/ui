import React from 'react';
import './Contact.css';
import edit1 from '../media/edit1.jpeg';
import mail from '../media/mail.svg';
import phone from '../media/phone.png';
import ContactForm from '../components/ContactForm';

const MAIL_CONTACT = 'contact@codensoftwareacademy.com';
const PHONE_CONTACT = '(+40) 740 048 042';
const CORPORATE_MSG = 'For customized corporate offer';
const CORPORATE_MAIL = 'corporate@codensoftwareacademy.com';
const CONTACT_HEAD = 'Or use the contact form from below';

function Contact() {
    return(
        <div className="contact-content">
            <div className="contact-details">
                <div>
                <p>&nbsp;<img id="mail" src={mail} alt="mail"/> {MAIL_CONTACT}</p>
                <p>&nbsp;<img id="phoneIcon" src={phone} alt="phone"/> {PHONE_CONTACT}</p>
                <p>{CORPORATE_MSG}</p>
                    
                <p>&nbsp;<img id="mail" src={mail} alt="mail"/> {CORPORATE_MAIL}</p>
                </div>
            <img src={edit1} alt="contact"/>
            </div>
            <div className="contact-form">
                <h5>{CONTACT_HEAD}</h5>
                <br/>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;