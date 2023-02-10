import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export default function Detalle() {

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [movie, setMovie] = useState(null);

    useEffect(() => {
      const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=6d01a6cc72de7f4787d584b8986e2172&language=es-ES`;
      axios.get(endPoint).then(response => {
        const movieData = response.data;
        setMovie(movieData);
      })
      .catch(error => {
        swAlert(<h2>Hubo errores. Intenta mas tarde</h2>);
      })
    }, [movieID]);

    return (
    <>
        { !token && <Navigate to='/' /> }
        { !movie && <p>Cargando...</p>}
        { movie && 
          <>
            <div className="row">
              <div className="col-4">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt={movie.title} />
              </div>
              <div className="col-8">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <h5>Fecha de estreno: {movie.release_date}</h5>
                <h5>Puntaje: {movie.vote_average}</h5>
                <h5>Géneros:</h5>
                <ul>
                  { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>) }
                </ul>
              </div>
            </div>
          </>
        }
    </>
  )
}
