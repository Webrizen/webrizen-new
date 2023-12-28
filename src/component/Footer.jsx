import React from 'react';
import '../styles/footer.css';
import { BiLogoYoutube, BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi';

export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='about'>
            <div className="logo">
                <img src="/Webrizen.png" alt="WebRizen Logo" />
                <span>WebRizen</span>
            </div>
            <p>At WebRizen, we're more than developers; we're architects of exceptional online experiences. With unwavering passion and cutting-edge expertise, we transform your visionary concepts into tangible web solutions.</p>
            <div className="icons">
                <div className="ico"><BiLogoYoutube /> </div>
                <div className="ico"><BiLogoTwitter /></div>
                <div className="ico"><BiLogoLinkedin /></div>
                <div className="ico"><BiLogoInstagram /></div>
            </div>
        </div>
        <div className='about'>
            <h3>Reach Us</h3>
            <a href="https://wa.me/+918761820422">Whatsapp</a>
            <a href="mailto:webrizen@gmail.com">Mail Us At WebRizen@gmail.com</a>
        </div>
    </footer> 
    </>
  )
}
