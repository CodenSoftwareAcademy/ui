import React from 'react';
import './Courses.css';
import './Acordion.css';
import {Button} from 'react-bootstrap';
import title from '../media/title.svg';
import start from '../media/start.svg';
import duration from '../media/duration.svg';
import price from '../media/price.svg';
import schedule from '../media/schedule.svg';
import downarrow from '../media/downarrow.svg';
import { Accordion, Card} from 'react-bootstrap';

const CLICK_DETAILS = 'Click for details';

// const TABLE_HEADER = [
//     "Course",
//     "Start date",
//     "Durata",
//     "Price",
//     "Program"
// ];

const TABLE_DATA = [
    {
        name: "Full-Stack Javascript Developer - Romanian",
        start: "01/09/2020",
        duration: "12 weeks",
        schedule: ["Tuesday (18:30-21:30)", "Thursday (18:30-21:30)", "Saturday (9:30-12:30)"],
        price: "850",
        details: [
          "Consisting of 2 modules: Frontend (7 weeks) and Backend (5 weeks). ",
          "At the end of each module you will work on a project (one Frontend and one Full Stack).",
          "30 hours will be allocated only for the development of analytical thinking with the help of algorithmic problems.",
          "Teaching in Romanian.",
          "Theoretical support in English.",
          "The course contains 2 assessments, one assessment at the end of each module.",
          "Each evaluation can be supported twice if is not promoted in the first place.",
          "Full payment of the course before the start of the course: 850 Euro.",
          "Payment in installments: 50 Euro in advance (before the start of the course) and 4 installments of 200 Euro (each installment is paid every 3 weeks during the course).",
          "To define a customized installment plan, please contact us at sales@codensoftwareacademy.com.",
          "After the first week of the course, if you want to withdraw, you will receive a full refund."
        ]
    },
    {
        name: "Frontend Developer - Romanian",
        start: "01/09/2020",
        duration: " 7 weeks",
        schedule: ["Tuesday (18:30-21:30)", "Thursday (18:30-21:30)", "Saturday (9:30-12:30)"],
        price: "500",
        details: [
          "Consisting of a single module: Frontend (7 weeks).",
          "At the end of the module you will work on a Frontend project.",
          "18 hours will be allocated only for the development of analytical thinking with the help of algorithmic problems.",
          "Teaching in Romanian.",
          "Theoretical support in English.",
          "The course contains one assessment at the end of the module.",
          "The evaluation can be supported twice if is not promoted in the first place.",
          "Full payment of the course before the start of the course: 500 Euro.",
          "Payment in installments: 50 Euro in advance (before the start of the course) and 2 installments of 225 Euro (each installment is paid every 3 weeks during the course).",
          "To define a customized installment plan, please contact us at sales@codensoftwareacademy.com.",
          "After the first week of the course, if you want to withdraw, you will receive a full refund."
        ]
    },
    {
        name: "Full-Stack Javascript Developer - Romanian",
        start: "05/01/2021",
        duration: "12 weeks",
        schedule: ["Tuesday (18:30-21:30)", "Thursday (18:30-21:30)", "Saturday (9:30-12:30)"],
        price: "850",
        details: [
          "Consisting of 2 modules: Frontend (7 weeks) and Backend (5 weeks). ",
          "At the end of each module you will work on a project (one Frontend and one Full Stack).",
          "30 hours will be allocated only for the development of analytical thinking with the help of algorithmic problems.",
          "Teaching in Romanian.",
          "Theoretical support in English.",
          "The course contains 2 assessments, one assessment at the end of each module.",
          "Each evaluation can be supported twice if is not promoted in the first place.",
          "Full payment of the course before the start of the course: 850 Euro.",
          "Payment in installments: 50 Euro in advance (before the start of the course) and 4 installments of 200 Euro (each installment is paid every 3 weeks during the course).",
          "To define a customized installment plan, please contact us at sales@codensoftwareacademy.com.",
          "After the first week of the course, if you want to withdraw, you will receive a full refund."
        ]
    },
    {
        name: "Full-Stack Javascript Developer - English",
        start: "To be announced",
        duration: "12 weeks",
        schedule: ["Monday (18:30-21:30)", "Wednesday (18:30-21:30)", "Friday (18:30-21:30)"],
        price: "850",
        details: [
          "Consisting of 2 modules: Frontend (7 weeks) and Backend (5 weeks). ",
          "At the end of each module you will work on a project (one Frontend and one Full Stack).",
          "30 hours will be allocated only for the development of analytical thinking with the help of algorithmic problems.",
          "Teaching in English.",
          "Theoretical support in English.",
          "The course contains 2 assessments, one assessment at the end of each module.",
          "Each evaluation can be supported twice if is not promoted in the first place.",
          "Full payment of the course before the start of the course: 850 Euro.",
          "Payment in installments: 50 Euro in advance (before the start of the course) and 4 installments of 200 Euro (each installment is paid every 3 weeks during the course).",
          "To define a customized installment plan, please contact us at sales@codensoftwareacademy.com.",
          "After the first week of the course, if you want to withdraw, you will receive a full refund."
        ]
    },
    {
        name: "Frontend Developer - English",
        start: "To be announced",
        duration: " 7 weeks",
        schedule: ["Monday (18:30-21:30)", "Wednesday (18:30-21:30)", "Friday (18:30-21:30)"],
        price: "500",
        details: [
          "Consisting of a single module: Frontend (7 weeks).",
          "At the end of the module you will work on a Frontend project.",
          "18 hours will be allocated only for the development of analytical thinking with the help of algorithmic problems.",
          "Teaching in English.",
          "Theoretical support in English.",
          "The course contains one assessment at the end of the module.",
          "The evaluation can be supported twice if is not promoted in the first place.",
          "Full payment of the course before the start of the course: 500 Euro.",
          "Payment in installments: 50 Euro in advance (before the start of the course) and 2 installments of 225 Euro (each installment is paid every 3 weeks during the course).",
          "To define a customized installment plan, please contact us at sales@codensoftwareacademy.com.",
          "After the first week of the course, if you want to withdraw, you will receive a full refund."
        ]
    },
];

function Courses() {
    return(
      <>
       
    <Accordion>
      {TABLE_DATA.map((item, i) => (
        <Card key={i}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="p" eventKey={i}>
              <div className="accordion-course">
                <div className="course-title"><img src={title} alt="title"/>{item.name}</div>
                <div className="course-start"><img src={start} alt="start"/>&nbsp;{item.start}</div>
                <div className="course-duration"><img src={duration} alt="duration"/>{item.duration}</div>
                <div className="course-price"><img src={price} alt="price"/>&nbsp;{item.price} &euro;</div>
                <div className="course-schedule"><img src={schedule} alt="schedule"/>&nbsp;<div>{item.schedule[0]}<br/>{item.schedule[1]}<br/>{item.schedule[2]}</div></div>
              </div>
              <small><img src={downarrow} alt="downarrow"/>&nbsp;{CLICK_DETAILS}&nbsp;<img src={downarrow} alt="downarrow"/></small>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i}>
            <Card.Body>&nbsp;&nbsp;<ul>{item.details.map((item,i) => (
              (i === 3 || i === 7 || i === 8 || i === 10) ? <li key={i}><b>{item}</b></li> : <li key={i}>{item}</li>
              ))}</ul>
            </Card.Body>
          </Accordion.Collapse>
      </Card>
      ))}
    </Accordion>
  </>
    )
}

export default Courses;