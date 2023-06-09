import React from 'react';
// import sendMail from '../utils/sendEmail';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const textAreaRows = 5; 

  return (
    <section id='Contact'>
      <h1 className='text-center my-5'>Contact</h1>
      <div className="contact-container">
        <h3 className='mb-5'>Leave me an email...</h3>
        <form onSubmit={handleSubmit} className='row'>
          <div className="input-group mb-3 col-9">
            <input type="text" className='form-control' name="name" placeholder="Your name..." id="name" />
          </div>
          <div className="input-group mb-3">
            <input type="email" className='form-control' name="email" placeholder="Your email..." id="email" />
          </div>
          <div className="input-group mb-3">
            <textarea type="message" className='form-control' name="message" placeholder="Your message here..." id="message" rows={textAreaRows} />
          </div>
          <div className='text-center'>
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}