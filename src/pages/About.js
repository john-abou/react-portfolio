import React from 'react';
import photo from '../assets/images/john.png'

export default function About() {

  return (
    <div className='container-fluid'>
      <section id="about" className='row'>
        <div className='col-md-6 col-sm-12'>
          <article className="about-text">
            {/* <p >
              I am a highly motivated and detail-oriented Fullstack Web Developer with a passion for creating engaging and user-friendly websites. My expertise lies in Javascript, HTML, CSS, Node.js, MySQL, MongoDB, Express.js, and React.js. As a lifelong learner, I am always exploring new technologies to stay up-to-date with the latest trends and advancements in web development.
            </p>
            <p>
              Before transitioning into web development, I worked as an operations coordinator at a startup in San Francisco. There, I successfully managed the lifecycle of over 2,000 daily deliveries, reduced operating costs by 10%, and analyzed client data to make data-driven decisions for market expansion.
            </p>
            <p>
              My experience in operations has honed my ability to problem-solve, think critically, and work collaboratively with others. I apply these skills to my work as a web developer to create functional and visually appealing websites that meet the unique needs of each client.
            </p>
            <p>
              I am committed to delivering high-quality work and exceeding client expectations. Let's work together to create a website that showcases your brand and drives results.and connect with me on LinkedIn to stay in touch. I'm excited about the possibilities that web development holds, and I'm always looking for new opportunities to create something amazing.
            </p> */}
            <h1 className='about-header'>Full Stack Web Developer. <span>John Abounassar</span></h1>
            <div className='about-description'>
              <h3 className='mx-2 fs-1'>Specializing in: </h3>
              <p className='skill-one fs-3'>Front-end Development</p>
              <p className='skill-two fs-3'>Responsive Design</p>
              <p className='skill-three fs-3'>Problem Solving</p>
            
            </div>
          </article>
        </div>
        <div className='col-md-6 col-sm-12'>
          <aside>
            {<img src={photo} className="about-photo" alt="My face" />}
          </aside>
        </div>
      </section>
    </div>
  );
}