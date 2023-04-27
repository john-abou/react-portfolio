import React from 'react';
import skills from '../utils/index';
import { Tooltip } from 'react-tooltip'


export default function TechStack() {
  console.log(skills[0].tooltip)
  return (
    <div>
      <div className='text-center'>
        <h3 className='project-header'>Tech Stack</h3>
      </div>
        <div className='icon-container d-flex flex-row flex-no-wrap align-items-center'>
          {skills.map((skill, i) => (
            <div 
              key={i}
              data-tooltip-id="tooltip" 
              data-tooltip-content={skill.tooltip} 
            > 
              <img src={skill.imageURL} alt='skill' className='icon'/>
            </div>
          ))}
      </div>
      <Tooltip id='tooltip' place='top' type='dark' effect='solid' />
    </div>
    )
}