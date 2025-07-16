
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
import React, { useEffect, useRef } from 'react';


const Navbar = () => {
    const navRef = useRef();
    useEffect(() => {
  const handleScroll = () => {
    if (!navRef.current) return; // ⛑️ guard clause

    if (window.scrollY >= 80) {
      navRef.current.classList.add('navi-dark');
    } else {
      navRef.current.classList.remove('navi-dark');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo}/>
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>News & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search} className='icons'/>
            <p>Children</p>
            <img src={bell} className='icons'/>
            <div className="navbar-profile">
            <img src={profile} className='profile'/>
            <img src={caret}/>
            <div className="dropdown">
                <p onClick={()=>{logout()}}>Sign out of Netflix</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar