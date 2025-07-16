import React from 'react'
import './Home.css'
import Navbar from '../../Componants/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../Componants/TitleCards/Titlecards'
import Fotter from '../../Componants/Fotter/Fotter'


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} className='banner-img'/>
          <div className="hero-cation">
            <img src={hero_title} className='cation-img'/>
            <p>Discovering his ties to a secret acient order, a young man living in morden
              istanabul embarks on a quest to save the city an immortal enemy.
            </p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon}/
              >Play</button>
            </div>
            <div className='banner'>
            <Titlecards/>
            </div>
        </div>
    </div>
    <div className="morecards">
      <Titlecards title={"Blockbuster Movie"}catgeory={"top_rated"}/>
      <Titlecards title={"Only on Netflix"}catgeory={"popular"}/>
      <Titlecards title={"Upcoming"} catgeory={"upcoming"}/>
      <Titlecards title={"Waiting just for you"} catgeory={"now_playing"}/>
    </div>
    <Fotter/>
    </div>
  )
}

export default Home
