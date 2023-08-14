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
            <Link to='#'>Schedule a Call</Link>
            <div className="ico"><BiLogoGithub /></div>
            <div className="ico"><BiShareAlt /></div>
            <div className="ico"><BiDonateHeart /></div>
        </div>
      </header>
    </>
  )
}

export default Navbar
