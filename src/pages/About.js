import React, {useState, useEffect} from 'react';
import photo from '../assets/images/john.png'
import LaptopIcon from '@material-ui/icons/Laptop';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function About() {
  let width = window.innerWidth;
  const isTablet = width < 778;

  return (
    <div className='container-fluid'>
      <section id="about" className='row'>
        <div className='col-md-6 col-sm-12'>
          <article className="about-text d-flex flex-column justify-content-center">
            <h1 className='about-header'>Full Stack Web Developer.</h1>
            <h2 className='about-name'>John Abounassar</h2>
            <div className='about-description'>
                <div className='d-flex flex-column justify-content-center'>
                  <h3 className='mx-2'>Specializing in: </h3>
                  <p className='skill-one'><LaptopIcon fontSize='large'/> Front-end Development</p>
                  <p className='skill-two'><SmartphoneIcon fontSize='large'/> Responsive Design</p>
                  <p className='skill-three'><CheckBoxIcon fontSize='large'/> Problem Solving</p>
                </div>
            </div>
          </article>
        </div>
        <div className='col-md-6 col-sm-12'>
          <aside className='d-flex flex-column justify-content-center'>
            {<img src={photo} className="about-photo" alt="My face" />}
          </aside>
        </div>
      </section>
    </div>
  );
}