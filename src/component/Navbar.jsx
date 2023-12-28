import React from 'react';
import '../styles/Navbar.css';
import { BiLogoGithub, BiShareAlt, BiDonateHeart } from 'react-icons/bi';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className='header'>
        <Link to='/'>
        <div className="logo">
            <img src="/Webrizen.png" alt="WebRizen" />
            <span>WebRizen</span>
        </div>
        </Link>
        <div className="links">
            <a href='https://cal.com/webrizen'>Schedule a Call</a>
        </div>
      </header>
    </>
  )
}

export default Navbar
