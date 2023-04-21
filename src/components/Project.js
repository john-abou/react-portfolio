import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Project( props ) {
  
  return (  
    <div className='container-fluid'>
      <div className='row align-items-center justify-content-center'>
        <Carousel>
          {props.data.map( (project, index) => (
            <Carousel.Item key={index}>
              <div className='col-12 project-container' key={index}>
                <img src={project.image} className="img align-items-center justify-content-center" alt={project.description}/>
                <div className='project fade-effect'>
                      <figure>
                          <h3>{project.name}</h3>
                          <p>{project.type}</p>
                          <p>{project.tools}</p>
                          <a href={project.github} className="btn mx-2" type="button">Github</a>
                          <a href={project.deployed} className="btn mx-2" type="button">Live Site</a>
                      </figure>
                  </div>
              </div>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  )
}