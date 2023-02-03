//Libraries
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Styles
import '../css/bootstrap.min.css';

export default function Listado() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token === null) {
            navigate.push('/');
        }
    }, []);

    return (
    <div>Listado</div>
  )
}