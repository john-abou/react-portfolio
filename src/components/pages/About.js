import React from 'react';
import photo from '../../assets/images/john.png'

export default function About() {

  return (
    <div className='container-fluid'>
      <section id="about" className='row vh-100'>
        <div className='col-md-6 col-sm-12 mh-100'>
          <article className="about-text">
            <h1 className='mb-5'>Welcome!</h1>
            <p >
              My name is John Abounassar, and I'm a Fullstack Web Developer with a passion for creating exceptional user experiences through UI/UX design. With a background in data science and a degree in engineering, I bring a unique set of skills and knowledge to every project I work on.
              My expertise includes Javascript, HTML, CSS, Node.js, MySQL, MongoDB, Express.js, and React.js, and I'm constantly expanding my knowledge and exploring new technologies. I've contributed to several successful projects, including LoveLink, a full-stack dating application, and WeTheNorth, a front-end application that uses the balldontlie and SeatGeek API to display NBA game information. 
            </p>
            <p>
              Prior to my career in web development, I worked as an opeartions coordinator at Swyft, a logistics startup in San Francisco.
              During my time at Swyft, I managed the lifecycle of every delivery to ensure a perfect delivery experience from pick-up to delivery
              When I'm not developing web applications, I enjoy weight lifting, pick-up basketball, playing the piano, and watching sitcoms. I believe that having a well-rounded life outside of work helps me bring fresh perspectives and creativity to my projects.
              Please check out my Github and portfolio links to see some of my latest projects and connect with me on LinkedIn to stay in touch. I'm excited about the possibilities that web development holds, and I'm always looking for new opportunities to create something amazing.
            </p>
          </article>
        </div>
        <div className='col-md-6 col-sm-12 mh-100'>
          <aside>
            {<img src={photo} className="about-photo" alt="My face" />}
          </aside>
        </div>
      </section>
    </div>
  );
}