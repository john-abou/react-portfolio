import React from 'react';

export default function Footer() {
  return (
  <footer className="fixed-bottom d-flex flex-column justify-content-center align-items-center" style={ {"height": "80px"} }>
    <div className='links d-flex flex-row justify-content-center my-2'>
      <a href="https://github.com/john-abou" className='nav-link mx-2'>Github</a>
      <a href="https://www.linkedin.com/in/john-abounassar/" className='nav-link mx-2'>LinkedIn</a>
      <a href='https://medium.com/@abounassar.john' className='nav-link mx-2'>Medium</a>
    </div>
    <div className='self-align-end my-1'>
      <p>
        Copyright
      </p>
    </div>
  </footer>
  )
}