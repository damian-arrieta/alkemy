import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Favoritos() {

    const [ favourites, setFavourites ] = useState([]);

    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs');
        if (favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal);
            setFavourites(favsArray);
        }
    }, [])

  return (
    <div className="row">
    { favourites.map((oneMovie, idx) => {
        return (
            <div className="col-3" key={idx}>
                <div className="card my-4">
                    <img src={oneMovie.imgURL} className="card-img-top" alt={oneMovie.title} />
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
  )
}
