import React, { useState, useEffect } from 'react';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faPhone } from '@fortawesome/free-solid-svg-icons';
import Icons from '../components/Icons';


export default function Contact() {
  const [scroll, setScroll] = useState(false);

  const contactInfo = [{
    icon: faGithub,
    contact: 'GitHub',
    href: 'https://github.com/john-abou',
    info: 'john-abou'
  },  {
    icon: faLinkedin,
    contact: 'LinkedIn',
    href: 'https://www.linkedin.com/in/john-abounassar/',
    info: 'john-abounassar'
  },  {
    icon: faEnvelope,
    contact: 'Email',
    href: 'mailto:abounassar.john@gmail.com',
    info: 'abounassar.john@gmail.com'
  }, {
    icon: faFile,
    contact: 'Resume',
    href: './john-resume.pdf',
    info: 'my resume'
  }, {
    icon: faPhone,
    contact: 'Phone',
    href: 'tel:+1-905-330-4652',
    info: '+1 905-330-4652'
  }
]

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
      <div className='contact-container'>
        <h3 className='contact-msg'>Get in touch to get the ball rolling</h3>
        <div className='links'>
            {contactInfo.map((contact, index) => {
              return <Icons key={index} {...contact} />
            })}
        </div>
      </div>
    </section>
  );
}
