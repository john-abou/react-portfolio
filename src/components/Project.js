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
                <img src={project.image} className="img align-items-center justify-content-between" alt={project.description}/>
                <div className='project fade-effect'>
                      <figure className='d-flex flex-column justify-content-around align-items-center flex-wrap'>
                        <div>
                          <h3 className='mb-5'>{project.name}</h3>
                          <p>{project.description}</p>
                          <p>{project.tools}</p>
                        </div>
                        <div>
                          <a href={project.github} className="btn mx-2" type="button">Github</a>
                          <a href={project.deployed} className="btn mx-2" type="button">Live Site</a>
                        </div>
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