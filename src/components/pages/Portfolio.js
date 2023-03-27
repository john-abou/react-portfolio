import React from 'react';
import Project from '../Project';
import llImg from '../../Assets/images/lovelink.jpeg';
import weather from '../../Assets/images/weather-app.png';
import workSched from '../../Assets/images/work-scheduler-2.png';
import weTheNorth from '../../Assets/images/we-the-north-3.png';
import noteTaker from '../../Assets/images/note-taker.png'
import jate from '../../Assets/images/jate.png';

export default function Portfolio() {
  
  const projects = [
    {
      name: 'LoveLink',
      description: 'Lovelink - Dating App',
      github: 'https://github.com/winglovecola/love-link',
      deployed: 'https://love-link.herokuapp.com/',
      image: llImg
    }, {
      name: 'We-The-North',
      description: 'Basketball App for Stats/Tickets',
      github: 'https://github.com/Bullspippen/We-The-North',
      deployed: 'https://john-abou.github.io/We-The-North/',
      image: weTheNorth
    }, {
      name: 'JATE',
      description: 'Text editor',
      github: 'https://github.com/john-abou/text-editor',
      deployed: 'https://murmuring-dawn-62613.herokuapp.com/',
      image: jate
    }, {
      name: 'Work Scheduler',
      description: 'Work Scheduler',
      github: 'https://github.com/john-abou/work-scheduler',
      deployed: 'https://john-abou.github.io/work-scheduler/',
      image: workSched
    }, {
      name: 'Note Taker',
      description: 'Note Taker',
      github: 'https://github.com/john-abou/note-taker',
      deployed: 'https://calm-plains-07753.herokuapp.com/',
      image: noteTaker
    }, {
      name: 'Weather App',
      description: 'Weather App - 5 day forecast',
      github: 'https://github.com/john-abou/weather-app',
      deployed: 'https://john-abou.github.io/weather-app/',
      image: weather
    }
  ];

  return (
    <section id="Portfolio">
      <Project data={projects} />
    </section>
  );
}