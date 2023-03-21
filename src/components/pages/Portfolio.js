import React form 'react';


export default function Portfolio() {
  return (
    <section className="row">
      {/* Make a fetch to Github's RESTful API to get my 6 featured projects  */}
      axios.get('https://api.github.com/users/johnabounassar/repos')

      {/* Loop through and create grid like thing for the 6 featured projects on my github account */}
      {
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      }
    </section>
  );
}