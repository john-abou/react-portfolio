import React from 'react';

export default function Contact() {
  return (
    <section className="row" id='Contact'>
      <div className="col-12">
        <h1>Contact</h1>
        <ul>
          <li>
           <a href="mailto:abounassar.john@gmail.com">Email me</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/john-abounassar/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/john-abou">Github</a>
          </li>
          <li>
            Phone: 905-330-4652
          </li>
        </ul>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}