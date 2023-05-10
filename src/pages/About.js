import React from 'react';
import photo from '../assets/images/john4.png'
import LaptopIcon from '@material-ui/icons/Laptop';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function About() {
  return (
    <div className='container-fluid'>
      <section id="about" className='row'>
        <div className='col-md-6 col-sm-12 about-text-container'>
          <article className="about-text">
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
          <aside className='about-photo-container'>
            {<img src={photo} className="about-photo" alt="My face" />}
          </aside>
        </div>
      </section>
    </div>
  );
}