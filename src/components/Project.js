import React, { useState } from 'react';

export default function Project( props ) {
  
  return (
    <div className='container'>
      <div className='row w-100 align-items-center justify-content-center'>
          {/* Loop through each project and make nicely styled projects with a header that contains the project name, a body that contains the image and a footer that contains the github and deployed links*/}
          {props.data.map( (project, index) => (
            <div className='col-12 col-md-6 col-lg-4' key={index}>
              <div className='project'>
                    <figure>
                        <h3>{project.name}</h3>
                        <p>{project.tools}</p>
                        <a href={project.github} class="btn btn-read">Github</a>
                        <a href={project.deployed} class="btn btn-read">Live Site</a>
                    </figure>
                    <img src={project.image} className="img-responsive"/>
                </div>
            </div>
          ))}
      </div>
      </div>
  )
}