import React, {useState, useEffect} from "react";

export default function Navbar({ currentPage, hanglePageChange }) {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
  }, []);
    
  return (
    <nav className="row w-100 navbar navbar-dark bg-dark m-0" style={{height: '70px'}}>
      <div className="navbar-container">
      {!isTablet ? (
      <div className="text-light ms-5">
        <h1>John Abounassar</h1>
       </div>
       ) : (<div style={{display: 'none'}}></div>)}

      <div>
        <ul className="navbar-nav d-flex flex-row justify-content-center me-5">
          <li className='nav-item mx-2'>
            <a 
              href="#About"
              onClick={() => hanglePageChange('About')}
              className={ currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                Home
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
              href="#History"
              // onClick={() => hanglePageChange('Resume')}
              className={ currentPage === 'History' ? 'nav-link active' : 'nav-link'}
            >
                History
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
      </div>
    </nav>
  );
}