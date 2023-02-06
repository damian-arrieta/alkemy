//Libraries
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

//Styles
import '../css/bootstrap.min.css';

export default function Listado() {

    let token = localStorage.getItem('token');

    const [ moviesList, setMoviesList ] = useState([])

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=6d01a6cc72de7f4787d584b8986e2172&language=es-ES&page=1';
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results);
            })
    }, [setMoviesList]);

    console.log(moviesList);

    return (
        <>
            { !token && <Navigate to='/' /> }
            
            <div className="row">
                <div className="col-3" style={{border: '1px solid red'}}>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/" className="btn btn-primary">Ver datalle</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}