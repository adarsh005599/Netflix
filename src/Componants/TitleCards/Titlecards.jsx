import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const Titlecards = ({title, catgeory}) => {

  const[apiData, setapiData] = useState([]);

  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTVlYTgwNDZjMDgwODJhNWU3YTEzYmQ4OTRmZjI4YSIsIm5iZiI6MTc1MTkwMTU0MC45MDksInN1YiI6IjY4NmJlNTY0NWNmYWI0NDgxOWVkNWFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WB6yqFK_8If80wwLyrNn_Ta4vgV_RtLCPjB-bcGGjzw'
  }
};


  const handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${catgeory?catgeory:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])
  return (
    <div className='titlecard'>
      <h2>{title ? title: "Popular On Netflix"}</h2>
      <div className="cardlist" ref={cardsRef}>
        {apiData.map ((card, index) =>{
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={ `https://image.tmdb.org/t/p/w500`+ card.backdrop_path}/>
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards