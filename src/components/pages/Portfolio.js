import React from 'react';
import Project from '../Project';
import llImg from '../../assets/images/lovelink.jpeg';
import weather from '../../assets/images/weather-app.png';
import workSched from '../../assets/images/work-scheduler-2.png';
import weTheNorth from '../../assets/images/we-the-north-3.png';
import noteTaker from '../../assets/images/note-taker.png'
import jate from '../../assets/images/jate.png';
import ecomm from '../../assets/images/ecomm.png';

export default function Portfolio() {
  
  const projects = [
    {
      name: 'LoveLink',
      description: 'Lovelink - Dating App',
      github: 'https://github.com/winglovecola/love-link',
      deployed: 'https://love-link.herokuapp.com/',
      image: llImg,
      tools: 'node.js, express.js, MySQL/sequelize, handlebars, firebase, bcrypt, multer, sharp, bootstrap',
      type: 'Full Stack'
    }, {
      name: 'Blog Site',
      description: 'Tech Blog',
      github: 'https://github.com/john-abou/weather-app',
      deployed: 'https://john-abou.github.io/weather-app/',
      image: weather,
      tools: 'node.js, express.js, handlebars, MySQL/Sequelize, javascript, Bootstrap, HTML, CSS',
      type: 'Full Stack'
    }, {
      name: 'We-The-North',
      description: 'Basketball App for Stats/Tickets',
      github: 'https://github.com/Bullspippen/We-The-North',
      deployed: 'https://john-abou.github.io/We-The-North/',
      image: weTheNorth,
      tools: 'node.js, javascript, HTML, Tailwind, CSS',
      type: 'Front End'
    }, {
      name: 'JATE',
      description: 'Text editor',
      github: 'https://github.com/john-abou/text-editor',
      deployed: 'https://murmuring-dawn-62613.herokuapp.com/',
      image: jate,
      tools: 'node.js, webpack, babel, idb, javascript, HTML, CSS',
      type: 'Refactor - Front End'
    }, {
      name: 'Puppeteers Bazaar',
      description: 'Fullstak Ecomm website',
      github: 'https://github.com/john-abou/smart-savings',
      deployed: 'https://puppeteers-bazaar.herokuapp.com/',
      image: ecomm,
      tools: 'React, GraphQL, Apollo, Express.js, MongoDB, Stripe, Heroku, Bootstrap, CSS, HTML',
      type: 'Refactor - Front End'
    }, {
      name: 'Note Taker',
      description: 'Note Taker',
      github: 'https://github.com/john-abou/note-taker',
      deployed: 'https://calm-plains-07753.herokuapp.com/',
      image: noteTaker,
      tools: 'node.js, express.js, javascript, HTML, CSS',
      type: 'Refactor - Front End'
    }
  ];

  return (
    <section id="Portfolio">
      <Project data={projects} />
    </section>
  );
}