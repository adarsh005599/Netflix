//import React, { useEffect, useState } from 'react';
// import './Player.css';
// import back_arrow_icon from '../../assets/back_arrow_icon.png';
// import { useNavigate, useParams } from 'react-router-dom';
// import { TMDB_API_KEY } from '../../utils/apikeys'


// const Player = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   const [apiData, setApiData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const apiKey = process.env.REACT_APP_TMDB_API_KEY;

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US`)
//       .then(res => res.json())
//       .then(res => {
//         if (res.results && res.results.length > 0) {
//           const trailer = res.results.find(video => video.type === 'Trailer') || res.results[0];
//           setApiData(trailer);
//         } else {
//           setApiData(null);
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching trailer:', err);
//         setLoading(false);
//       });
//   }, [id]);

//   return (
//     <div className="player">
//       <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />

//       {loading ? (
//         <div className="player-spinner">
//           <img src="/spinner.gif" alt="Loading..." />
//         </div>
//       ) : apiData ? (
//         <>
//           <iframe
//             width="90%"
//             height="90%"
//             src={`https://www.youtube.com/embed/${apiData.key}`}
//             title={apiData.name}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//           <div className="playerinfo">
//             <p><strong>Published:</strong> {apiData.published_at?.slice(0, 10)}</p>
//             <p><strong>Name:</strong> {apiData.name}</p>
//             <p><strong>Type:</strong> {apiData.type}</p>
//           </div>
//         </>
//       ) : (
//         <div className="playerinfo">
//           <p>❌ No trailer available for this movie.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Player;
