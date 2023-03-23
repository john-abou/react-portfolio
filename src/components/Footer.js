import React from 'react';

export default function Footer() {
  const style = {
    footer: {
      "height": "80px"
    }
  }

  return (
  <footer className="fixed-bottom d-flex flex-column justify-content-center align-items-center" style={style.footer}>
    <div className='links d-flex flex-row justify-content-center my-2'>
      <a href="https://github.com/john-abou" className='nav-link mx-2'>Github</a>
      <a href="https://www.linkedin.com/in/john-abounassar/" className='nav-link mx-2'>LinkedIn</a>
      <a href='https://medium.com/@abounassar.john' className='nav-link mx-2'>Medium</a>
    </div>
    <div className='self-align-end my-1'>
      <p>
        Copyright. The one piece is real 🏴‍☠
      </p>
    </div>
  </footer>
  )
}