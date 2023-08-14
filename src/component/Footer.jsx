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
            <a href="">Home</a>
            <a href="">Portfolio</a>
            <a href="">Services</a>
            <a href="">Products</a>
            <a href="">Testimonials</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div className='about'>
            <h3>Legals</h3>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Refunds</a>
            <a href="">FAQS</a>
            <a href="">Press</a>
            <a href="">Cookies</a>
            <a href="">Advertisment</a>
        </div>
        <div className='about'>
            <h3>Reach Us</h3>
            <a href="tel:+">Call Us at +91 72134374274</a>
            <a href="mailto:">mail Us At WebRizen@gmail.com</a>
        </div>
    </footer> 
    </>
  )
}
