import React from 'react';

export default function Contact() {
  const style = {
    margin: {
      "margin": "0 15% 0 15%"
    }
  }
  return (
    <section className="row" id='Contact' style={style.margin}>
      <div className="col-12">
        <h1 className='text-center my-5'>Contact</h1>

        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" className='form-control' name="name" placeholder="John Doe" id="name" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input type="email" className='form-control' name="email" placeholder="john@gmail.com" id="email" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Message</span>
            <textarea type="message" className='form-control' name="message" placeholder="Your message here..." id="message" />
          </div>
          <div className='text-end'>
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}