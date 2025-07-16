import React from 'react'
import './Fotter.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Fotter = () => {
  return (
    <div className= 'fotter'>
      <div className="fotter-icon">
        <img src={youtube_icon}/>
        <img src={twitter_icon}/>
        <img src={instagram_icon}/>
        <img src={facebook_icon}/>
      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help</li>
        <li>Gift</li>
        <li>Media</li>
        <li>Investor Relation</li>
        <li>Jobes</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookies Performance</li>
        <li>Conporate Info</li>
        <li>Contact Us</li>
      </ul>
      <p className='Copyright-text'>© 1997-2025 Netflix, Inc </p>
    </div>
  )
}

export default Fotter