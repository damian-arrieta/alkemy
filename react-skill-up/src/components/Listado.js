import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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