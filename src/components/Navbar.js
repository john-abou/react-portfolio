import React from "react";

export default function Navbar({ currentPage, hanglePageChange }) {
  return (
    <nav className="row">

      <div className="col-2">
        <h1>John Abounassar</h1>
      </div>

      <div className="col-10">

        <ul className="nav nav-tabs">

          <li className='nav-item'>
            <a 
              href="#about"
              onClick={() => hanglePageChange('About')}
              className={ currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
          </li>
          <li className='nav-item'>
            <a 
              href="#portfolio"
              onClick={() => hanglePageChange('Portfolio')}
              className={ currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </a>
          </li>
          <li className='nav-item'>
            <a 
              href="#resume"
              onClick={() => hanglePageChange('Resume')}
              className={ currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
          </li>
          <li className='nav-item'>
            <a 
              href="#contact"
              onClick={() => hanglePageChange('Contact')}
              className={ currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}