import React from 'react';
import skills from '../utils/index';

export default function TechStack() {
  console.log(skills[0].tooltip)
  return (
    <div>
      <div className='text-center'>
        <h3 h3 className='project-header'>Tech Stack</h3>
      </div>
        <div className='icon-container d-flex flex-row flex-no-wrap'>
          {skills.map((skill, i) => (
            <img src={skill.imageURL} key={i} alt='skill' title={skill.tooltip} className='icon' />
          ))}
      </div>
    </div>
    )
}