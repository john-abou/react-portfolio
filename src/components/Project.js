import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


export default function Project( props ) {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsTablet(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  if (isTablet) {
    return (  
      <div className='container-fluid'>
        <div className='row align-items-center justify-content-center'>
            {props.data.map( (project, index) => (
              <div className='col-12 col-md-6 col-lg-4 project-container' key={index}>
                <img src={project.image} className="img align-items-center justify-content-center" alt={project.description}/>
                <div className='project fade-effect'>
                  <figure className='d-flex flex-column justify-content-around align-items-center p-0 m-0'>
                  <div>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <p>{project.tools}</p>
                    </div>
                    <div>
                      <a href={project.github} className="btn mx-2" type="button">Github</a>
                      <a href={project.deployed} className="btn mx-2" type="button">Live Site</a>
                    </div>
                  </figure>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  } else {
    return (  
      <div className='container-fluid'>
        <div className='row align-items-center justify-content-center'>
          <Carousel
            nextIcon={<BsChevronRight />}
            prevIcon={<BsChevronLeft />}
          >
            {props.data.map( (project, index) => (
              <Carousel.Item key={index}>
                <div className='col-12 project-container' key={index}>
                  <img src={project.image} className="img align-items-center justify-content-between" alt={project.description}/>
                  <div className='project fade-effect'>
                        <figure className='d-flex flex-column justify-content-around align-items-center flex-wrap'>
                          <div>
                            <h3 className='mb-5'>{project.name}</h3>
                            <p>{project.description}</p>
                            <p>{project.tools}</p>
                          </div>
                          <div>
                            <a href={project.github} className="btn mx-2" type="button">Github</a>
                            <a href={project.deployed} className="btn mx-2" type="button">Live Site</a>
                          </div>
                        </figure>
                    </div>
                </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </div>
    )
  }
}