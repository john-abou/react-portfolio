import React from 'react';

export default function Resume() {
  return(
  <section id="Resume">
    <div className='my-5 text-center'>
      <a 
      className='fs-3'
      href='john-a-resume.pdf'
      download="John A. Resume"
      >
        Resume
      </a>
    </div>
    
    <article className='d-flex flex-row justify-content-center m'>
      <div className='mx-5'>
        <h3>Front End Proficiencies</h3>
        <ul className='list-group'>
          <li className='list-group-item'>HTML</li>
          <li className='list-group-item'>CSS</li>
          <li className='list-group-item'>JavaScript</li>
          <li className='list-group-item'>jQuery</li>
          <li className='list-group-item'>responsive design</li>
          <li className='list-group-item'>React</li>
          <li className='list-group-item'>Bootstrap</li>
        </ul>
      </div>
      <div className='mx-5'>
      <h3>Back End Proficiencies</h3>
        <ul className='list-group'>
          <li className='list-group-item'>Resful APIs</li>
          <li className='list-group-item'>Node</li>
          <li className='list-group-item'>Express</li>
          <li className='list-group-item'>MySQL, Sequelize</li>
          <li className='list-group-item'>MongoDB, Mongoose</li>
          <li className='list-group-item'>GraphQL</li>
        </ul> 
      </div>
    </article>
  </section>
  )
}