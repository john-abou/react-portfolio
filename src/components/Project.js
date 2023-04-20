import React from 'react';

export default function Project( props ) {
  
  return (  
    <div className='container-fluid'>
      <div className='row w-100 align-items-center justify-content-center'>
          {props.data.map( (project, index) => (
            <div className='col-12 col-md-6 col-lg-4 project-container' key={index}>
              <img src={project.image} className="img" alt={project.description}/>
              <div className='project fade-effect'>
                    <figure>
                        <h3>{project.name}</h3>
                        <p>{project.type}</p>
                        <p>{project.tools}</p>
                        <a href={project.github} className="btn" type="button">Github</a>
                        <a href={project.deployed} className="btn" type="button">Live Site</a>
                    </figure>
                </div>
            </div>
          ))}
      </div>
    </div>
  )
}