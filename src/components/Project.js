import React from 'react';

export default function Project(props) {
  {/* Props should include project name, description, github repo link, deployed link and image link */}
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}