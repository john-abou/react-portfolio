import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
  <footer>
    <div className='links d-flex flex-row justify-content-center align-items-center mt-3 mb-3'>
      <a href="https://github.com/john-abou" className='nav-link'> <FontAwesomeIcon icon={faGithub} size="4x" /></a>
      <a href="https://www.linkedin.com/in/john-abounassar/" className='nav-link'><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>
      <a href='https://medium.com/@abounassar.john' className='nav-link'><FontAwesomeIcon icon={faMedium} size="4x" /></a>
    </div>
  </footer>
  )
}