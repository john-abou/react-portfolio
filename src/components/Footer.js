import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
  <footer>
    <div className='links'>
      <a href="https://github.com/john-abou" className='nav-link footer-icon'><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/john-abounassar/" className='nav-link footer-icon'><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href='mailto:abounassar.john@gmail.com'  className='nav-link footer-icon'><FontAwesomeIcon icon={faEnvelope} /></a>
    </div>
  </footer>
  )
}