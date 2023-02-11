import React from 'react';

export default function Resultados() {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
    
    return (
        <div>Resultados</div>
    )
}