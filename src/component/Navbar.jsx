import React from 'react';
import '../styles/Navbar.css';
import { BiLogoGithub, BiShareAlt, BiDonateHeart } from 'react-icons/bi';

function Navbar() {
  return (
    <>
      <header className='header'>
        <div className="logo">
            <img src="/Webrizen.png" alt="WebRizen" />
            <span>WebRizen</span>
        </div>
        <div className="links">
            <a href="#">Schedule a Call</a>
            <div className="ico"><BiLogoGithub /></div>
            <div className="ico"><BiShareAlt /></div>
            <div className="ico"><BiDonateHeart /></div>
        </div>
      </header>
    </>
  )
}

export default Navbar
