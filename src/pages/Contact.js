import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
  const [scroll, setScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log("Scroll event triggered");
        const element = document.querySelector('.contact-form');
        let elementPosition = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        if (elementPosition < windowHeight) {
          setScroll(true);
        }
      });
    }, []);

  return (
    <section id='Contact'>
      <h1 className='text-center my-5 title'>Contact</h1>
      <div>
        <h3 className='my-5'>Get in touch to get the ball rolling</h3>

        <div className='links'>
          <div>
            {/* Create icon component to be mapped through, have icons car above with needed info to pass as props into the comp. */}
          </div>
          <a href="https://github.com/john-abou" className='nav-link  mx-4'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/john-abounassar/" className='nav-link mx-4'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='mailto:abounassar.john@gmail.com'  className='nav-link mx-4'><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href='/john-resume.pdf' download className='nav-link mx-4'><FontAwesomeIcon icon={faFile} /></a>
          <a href='tel:1-905-330-4652' className='nav-link mx-4'><FontAwesomeIcon icon={faPhone} /></a>
        </div>

      </div>
    </section>
  );
}
