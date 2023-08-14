import React from 'react';
import '../styles/footer.css';
import { BiLogoYoutube, BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='about'>
            <div className="logo">
                <img src="/Webrizen.png" alt="WebRizen Logo" />
                <span>WebRizen</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore iusto optio! Sequi debitis officia voluptatem eius officiis corrupti perferendis quibusdam sunt cupiditate tempora temporibus qui, inventore vitae ullam corporis!</p>
            <div className="icons">
                <div className="ico"><BiLogoYoutube /> </div>
                <div className="ico"><BiLogoTwitter /></div>
                <div className="ico"><BiLogoLinkedin /></div>
                <div className="ico"><BiLogoInstagram /></div>
            </div>
        </div>
        <div className='about'>
            <h3>Quick links</h3>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className='about'>
            <h3>Legals</h3>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/refunds">Refunds</Link>
            <Link to="/faqs">FAQS</Link>
            <Link to="/press">Press</Link>
            <Link to="/cookies">Cookies</Link>
            <Link to="/advertisement">Advertisement</Link>
        </div>
        <div className='about'>
            <h3>Reach Us</h3>
            <a href="tel:+918761820422">Call Us At +918761820422</a>
            <a href="mailto:webrizen@gmail.com">Mail Us At WebRizen@gmail.com</a>
        </div>
    </footer> 
    </>
  )
}
