import React from 'react';
import photo from '../../images/pp.jpeg'

export default function About() {
  const style = {
    p: {
      "margin": "0 20% 0 20%"
    }
  }

  return (
    <section id="About">
      <h1 className='text-center mt-5'>About Me</h1>
      {<img src={photo} className="rounded mx-auto my-5 d-block " width="200px" alt="My face" />}
      <p style={style.p}>
      Welcome to my portfolio website! My name is John Abounassar, and I'm a Fullstack Web Developer with a passion for creating exceptional mobile-first web applications. With a background in data science and a degree in engineering, I bring a unique set of skills and knowledge to every project I work on.

      My expertise includes Javascript, HTML, CSS, Node.js, MySQL, MongoDB, Express.js, and React.js, and I'm constantly expanding my knowledge and exploring new technologies. I've contributed to several successful projects, including LoveLink, a full-stack dating application, and WeTheNorth, a front-end application that uses the balldontlie and SeatGeek API to display NBA game information.

      During my time as an Operations Coordinator at Swyft, I managed over 2,000 daily deliveries, reducing costs by 10% and implemented improved route optimization strategies.

      When I'm not developing web applications, I enjoy weight lifting, pick-up basketball, playing the piano, and watching sitcoms. I believe that having a well-rounded life outside of work helps me bring fresh perspectives and creativity to my projects.

      Please check out my Github and portfolio links to see some of my latest projects and connect with me on LinkedIn to stay in touch. I'm excited about the possibilities that web development holds, and I'm always looking for new opportunities to create something amazing.
      </p>
    </section>
  );
}