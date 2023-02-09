import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Detalle() {

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    return (
    <>
        { !token && <Navigate to='/' /> }
        <div>Detalle</div>
    </>
  )
}
