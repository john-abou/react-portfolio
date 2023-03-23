import React from 'react';

export default function Project( props ) {
  console.log( props );
  return (
    <div class='container'>
      <div className='row w-100 align-items-center justify-content-center'>
          {props.data.map( (project, index) => {
            return(
            <div className="col-lg-4 col-md-6 my-5">
              <div className="card" id={index} style={ {"width": "22rem", "height": "22rem"} }>
                <img src={project.image} className="card-img-top" style={{"width": "22rem", "height": "15rem"}} alt="..."/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.name}</h5>
                  <a className="card-text" href={project.github}>Github Repo</a>
                  <a className="card-text" href={project.deployed}>Deployed Site</a>
                </div>
              </div>
            </div>
            )
            }
          )}
      </div>
    </div>
  )
}