import React from 'react';
import {Button, Table} from 'react-bootstrap';
import title from '../title.svg';
import start from '../start.svg';
import duration from '../duration.svg';
import price from '../price.svg';
import schedule from '../schedule.svg';
import { Accordion, Card} from 'react-bootstrap';

const TABLE_HEADER = [
    "Course",
    "Start date",
    "Durata",
    "Price",
    "Program"
];

const TABLE_DATA = [
    {
        name: "Full-Stack Javascript Developer - Romana",
        start: "01/09/2020",
        duration: "12 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "850"
    },
    {
        name: "Frontend Developer - Romana",
        start: "01/09/2020",
        duration: "7 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "500"
    },
    {
        name: "Full-Stack Javascript Developer - Romana",
        start: "05/01/2021",
        duration: "12 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "850"
    },
    {
        name: "Full-Stack Javascript Developer - Engleza",
        start: "To be announced",
        duration: "12 weeks",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "850"
    },
    {
        name: "Frontend Developer - Engleza",
        start: "To be announced",
        duration: "7 weeks",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "500"
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
          <div className="course-title"><img src={title}/>{item.name}</div>
          <div className="course-start"><img src={start}/>&nbsp;{item.start}</div>
          <div className="course-duration"><img src={duration}/>{item.duration}</div>
          <div className="course-price"><img src={price}/>&nbsp;{item.price} &euro;</div>
          <div className="course-schedule"><img src={schedule}/>&nbsp;<div>{item.schedule[0]}<br/>{item.schedule[1]}<br/>{item.schedule[2]}</div></div>
          </div>
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={0}>
        <Card.Body>&nbsp;&nbsp;{"item.answer"}</Card.Body>
        </Accordion.Collapse>
    </Card>
    ))}
  </Accordion>
  </>
    )
}

export default Courses;