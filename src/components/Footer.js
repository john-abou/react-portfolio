import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const style = {
    footer: {
      "height": "10rem"
    }
  }

  return (
  <footer className="fixed-bottom d-flex flex-column justify-content-center align-items-center" style={style.footer}>
    <div className='links d-flex flex-row justify-content-center my-2'>
      <a href="https://github.com/john-abou" className='nav-link mx-5'> <FontAwesomeIcon icon={faGithub} size="6x" /></a>
      <a href="https://www.linkedin.com/in/john-abounassar/" className='nav-link mx-5'><FontAwesomeIcon icon={faLinkedin} size="6x" /></a>
      <a href='https://medium.com/@abounassar.john' className='nav-link mx-5'><FontAwesomeIcon icon={faMedium} size="6x" /></a>
    </div>
    <div className='self-align-end my-3'>
      <p>
        Copyright. The one piece is real 🏴‍☠
      </p>
    </div>
  </footer>
  )
}