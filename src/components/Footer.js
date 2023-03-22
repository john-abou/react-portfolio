import React from 'react';

export default function Footer() {
  return (
  <footer className="d-flex flex-column justify-content-center align-items-center" style={ {"height": "60px"} }>
    <div className='links'>
      <a href="https://github.com/john-abou">Github</a>
      <a href="https://www.linkedin.com/in/john-abounassar/">LinkedIn</a>
      <a href='https://medium.com/@abounassar.john'>Medium</a>
    </div>
    <p className='d-block'>
      Copyright
    </p>
  </footer>
  )
}