import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Detalle() {

    let token = sessionStorage.getItem('token');

    return (
    <>
        { !token && <Navigate to='/' /> }
        <div>Detalle</div>
    </>
  )
}
