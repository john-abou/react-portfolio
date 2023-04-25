import React from "react";

export default function Navbar({ currentPage, hanglePageChange }) {
  return (
    <nav className="row w-100 navbar navbar-dark bg-dark m-0" style={{height: '70px'}}>

      <div className="col-5 text-light ms-5">
        <h1>John Abounassar</h1>
      </div>

      <div className="col-5">
        <ul className="navbar-nav d-flex flex-row justify-content-end me-5">
          <li className='nav-item mx-2'>
            <a 
              href="#About"
              onClick={() => hanglePageChange('About')}
              className={ currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a 
              href="#Portfolio"
              onClick={() => hanglePageChange('Portfolio')}
              className={ currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
                Portfolio
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a 
              href="#Resume"
              // onClick={() => hanglePageChange('Resume')}
              className={ currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a 
              href="#Contact"
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