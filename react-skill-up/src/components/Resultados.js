import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { Link } from 'react-router-dom';

export default function Resultados() {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [movieResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=6d01a6cc72de7f4787d584b8986e2172&language=es-ES&query=${keyword}`;
        axios.get(endPoint).then(response => {
          const moviesArray = response.data.results;
          if (moviesArray.length === 0) {
            swAlert(<h5>Tu búsqueda no arrojó resultados</h5>)
          }
          setMoviesResults(moviesArray);
        })
        .catch(error => {
          swAlert(<h2>Hubo errores. Intenta mas tarde</h2>);
        })
    }, [keyword]);

    return (
        <>
            <h2>Resultados de tu busqueda: <em>{keyword}</em></h2>
            {movieResults.length === 0 && <h3>No hay resultados</h3>}
            
            <div className="row">
                { movieResults.map((oneMovie, idx) => {
                    return (
                        <div className="col-4" key={idx}>
                            <div className="card my-4">
                                <img src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} className="card-img-top" alt={oneMovie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{ oneMovie.title.substring(0, 30) }...</h5>
                                    <p className="card-text">{ oneMovie.overview.substring(0, 100) }...</p>
                                    <Link to={`/Detalle?movieID=${oneMovie.id}`} className="btn btn-info">Ver detalle</Link>
                                </div>
                            </div>
                        </div>
                    )
                }) }

            </div>
        </>
    )
}