import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export default function Detalle() {

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    useEffect(() => {
      const endPoint = 'https://api.themoviedb.org/3/movie/${movieID}?api_key=6d01a6cc72de7f4787d584b8986e2172&language=es-ES';
      axios.get(endPoint).then(response => {
        const movieData = response.data;
        console.log(movieData);
      })
      .catch(error => {
        swAlert(<h2>Hubo errores. Intenta mas tarde</h2>);
      })
    }, [movieID]);

    return (
    <>
        { !token && <Navigate to='/' /> }
        <h2>Detalle de la película</h2>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8"></div>
        </div>
    </>
  )
}
