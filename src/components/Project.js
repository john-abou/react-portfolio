import React, { useState } from 'react';

export default function Project( props ) {
  
  return (
    <div className='container'>
      <div className='row w-100 align-items-center justify-content-center'>
          {props.data.map( (project, index) => (
            <div className='col-12 col-md-6 col-lg-4' key={index}>
              <div className='project'>
                    <figure>
                        <h3>{project.name}</h3>
                        <p>{project.type}</p>
                        <p>{project.tools}</p>
                        <a href={project.github} className="btn" type="button">Github</a>
                        <a href={project.deployed} className="btn" type="button">Live Site</a>
                    </figure>
                    <img src={project.image} className="img-responsive"/>
                </div>
            </div>
          ))}
      </div>
      </div>
  )
}