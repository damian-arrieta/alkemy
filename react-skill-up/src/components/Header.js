//Libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import '../css/bootstrap.min.css';

export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Listado'>Listado</Link>
                </li>
                <li>
                    <Link to='/Contacto'>Contacto</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
