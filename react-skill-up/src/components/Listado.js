//Libraries
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

//Styles
import '../css/bootstrap.min.css';

export default function Listado() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token === null) {
            navigate.push('/');
        }
    }, [navigate]);

    return (
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
  )
}