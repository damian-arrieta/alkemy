//Libraries
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

export default function Listado(props) {

    let token = sessionStorage.getItem('token');

    const [ moviesList, setMoviesList ] = useState([])

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=6d01a6cc72de7f4787d584b8986e2172&language=es-ES&page=1';
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results);
            })
            .catch(error => {
                swAlert(<h2>Hubo errores. Intenta mas tarde</h2>);
            })
    }, [setMoviesList]);

    return (
        <>
            { !token && <Navigate to='/' /> }
            
            <div className="row">
                { moviesList.map((oneMovie, idx) => {
                    return (
                        <div className="col-3" key={idx}>
                            <div className="card my-4">
                                <img src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} className="card-img-top" alt={oneMovie.title} />
                                <button className='favourite-btn'>
                                    <i className="bi bi-star-fill" onClick={props.addOrRemoveFromFavs} data-movie-id={oneMovie.id}></i>
                                </button>
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