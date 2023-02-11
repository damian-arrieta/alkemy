//Libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Buscador from './Buscador';

export default function Header() {
  return (
    <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link className='navbar-brand mx-5' to='/'>ARRFLIX</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Listado'>Listado</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Buscador />
        </nav>
    </header>
  )
}
