import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import 'react-vertical-timeline-component/style.min.css';

export default function History() {

  return (
    <div id='History'>
      <div className='section-title-light'>
        <h1>History</h1>
      </div>
      <div className='history-container animate__animated animate__fadeIn'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 Jan - Apr"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Web Development Bootcamp</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Toronto</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Operations Coordinator</h3>
          <h4 className="vertical-timeline-element-subtitle">Swyft</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2019"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Materials Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>
  )
}
