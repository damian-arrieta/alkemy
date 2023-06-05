//Libraries
import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container d-flex justify-content-center flex-column'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link text-light' href="https://github.com/damian-arrieta" rel='noopener noreferrer'>
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href="https://www.linkedin.com/in/damian-arrieta/" rel='noopener noreferrer'>
                <i className="bi bi-linkedin text-light"></i>
              </a>
            </li>
          </ul>         
        </div>
        <p className='text-light'><small>Realizado para el Alkemy Challenge</small></p>
      </nav>
    </footer>
  )
}
