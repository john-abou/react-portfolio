import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export default function Icons(props) {

  if (props.icon === faFile) {
    return(
    <div className='d-flex flex-column justify-content-center align-items-center my-2'>
      <a href={props.href} download className='icon'><FontAwesomeIcon icon={props.icon} /></a>
      <p>{props.contact}</p>
      <p>{props.info}</p>
    </div>
    )
  } else {
    return(
      <div className='d-flex flex-column justify-content-center align-items-center my-2'>
        <a href={props.href} className='icon'><FontAwesomeIcon icon={props.icon} /></a>
          <p className='lh-1 my-1 icon-text'>{props.contact}</p>
          <p className='lh-1 my-1 icon-text'>{props.info}</p>
      </div>
      )
  }
}