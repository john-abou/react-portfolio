import React from 'react';
import Project from '../components/Project';
import llImg from '../assets/images/lovelink.png';
import weather from '../assets/images/weather-app.png';
import weTheNorth from '../assets/images/we-the-north.png';
import techBlog from '../assets/images/tech-blog.png'
import jate from '../assets/images/JATE.png';
import bazaar from '../assets/images/bazaar.png';

export default function Portfolio() {
  const projects = [
    {
      name: 'Puppeteers Bazaar',
      description: 'MERN Full Stack Ecommerce Website',
      github: 'https://github.com/john-abou/smart-savings',
      deployed: 'https://puppeteers-bazaar.herokuapp.com/',
      image: bazaar,
      tools: 'React, GraphQL, Apollo, Express.js, MongoDB, Stripe, Heroku, Bootstrap, CSS, HTML',
      type: 'Full Stack'
    }, {
      name: 'Weather',
      description: 'Front-end React Weather App',
      github: 'https://github.com/john-abou/weather-app',
      deployed: 'https://john-abou.github.io/weather-app/',
      image: weather,
      tools: 'node.js, express.js, javascript, HTML, CSS',
      type: 'Full Stack'
    },
    {
      name: 'LoveLink',
      description: 'Full Stack Handlebars Dating App',
      github: 'https://github.com/winglovecola/love-link',
      deployed: 'https://love-link.herokuapp.com/',
      image: llImg,
      tools: 'node.js, express.js, MySQL/sequelize, handlebars, firebase, bcrypt, multer, sharp, bootstrap',
      type: 'Full Stack'
    }, {
      name: 'We-The-North',
      description: 'Front-end NBA App',
      github: 'https://github.com/Bullspippen/We-The-North',
      deployed: 'https://john-abou.github.io/We-The-North/',
      image: weTheNorth,
      tools: 'node.js, javascript, HTML, Tailwind, CSS',
      type: 'Front End'
    }, {
      name: 'Tech-Blog',
      description: 'Full Stack Handlebars Blog Website',
      github: 'https://github.com/john-abou/tech-blog',
      deployed: 'https://johns-blogsite.herokuapp.com/',
      image: techBlog,
      tools: 'node.js, express.js, handlebars, MySQL/Sequelize, javascript, Bootstrap, HTML, CSS',
      type: 'Full Stack'
    }, {
      name: 'JATE',
      description: 'Refactor -- IDB Storage for Text editor',
      github: 'https://github.com/john-abou/text-editor',
      deployed: 'https://murmuring-dawn-62613.herokuapp.com/',
      image: jate,
      tools: 'node.js, webpack, babel, idb, javascript, HTML, CSS',
      type: 'Refactor'
    }
  ];

  return (
    <section id="Portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className='portfolio-background animate__animated animate__fadeInUp'>
        <div className='portfolio-container'>
          <Project data={projects} />
        </div>
      </div>
    </section>
  );
}