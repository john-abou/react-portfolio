import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [scroll, setScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log("Scroll event triggered");
        const element = document.querySelector('.contact-form');
        let elementPosition = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        if (elementPosition < windowHeight) {
          setScroll(true);
        }
      });
    }, []);

  const textAreaRows = 5; 

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section id='Contact'>
      <h1 className='text-center my-5 title'>Contact</h1>
      <div className="contact-container">
        <a className='mb-2' href='../assets/john-resume.pdf' download>My Resume</a>
        <div className={scroll ? 'contact-form animate__animated animate__fadeIn' : 'contact-form' }>
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
      </div>
    </section>
  );
}
