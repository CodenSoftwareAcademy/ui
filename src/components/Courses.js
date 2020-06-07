import React from 'react';
import './Courses.css';
import './Acordion.css';
import {Button, Table} from 'react-bootstrap';
import title from '../media/title.svg';
import start from '../media/start.svg';
import duration from '../media/duration.svg';
import price from '../media/price.svg';
import schedule from '../media/schedule.svg';
import downarrow from '../media/downarrow.svg';
import { Accordion, Card} from 'react-bootstrap';

const CLICK_DETAILS = 'Click for details';

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
        price: "850",
        details: [
          "- format din 2 module: Frontend (7 saptamani) si Backend (5 saptamani) ",
          "- predarea se tine in limba romana",
          "- suportul teoretic este scris in limba engleza",
          "- cursul contine 2 evaluari, cate o evaluarea dupa parcurgerea fiecarui modul",
          "- fiecare evaluare se poate sustine de 2 ori daca nu se reuseste promovarea acesteia din prima.",
          "- inainte de inceperea cursului este necesara plata unui avans de 15% pentru rezervarea unui loc in cadrul cursului",
          "- plata se poate face integral la inceputul cursului sau in doua rate egale, fiecare achitata pana la finalizarea unui modul",
          "- pentru definirea unui plan personalizat de rate, va rugam sa ne contactati la sales@codensoftwareacademy.com",
          "- in primele doua saptamani de curs, in cazul in care doriti sa va retrageti, veti primi integral suma platita."
        ]
    },
    {
        name: "Frontend Developer - Romana",
        start: "01/09/2020",
        duration: " 7 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "500",
        details: [
          "- contine 2 module: Frontend (7 saptamani) si Backend (5 saptamani) ",
          "- cursul contine 2 evaluari, cate o evaluarea dupa parcurgerea fiecarui modul"
        ]
    },
    {
        name: "Full-Stack Javascript Developer - Romana",
        start: "05/01/2021",
        duration: "12 weeks",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "850",
        details: [
          "- contine 2 module: Frontend (7 saptamani) si Backend (5 saptamani) ",
          "- cursul contine 2 evaluari, cate o evaluarea dupa parcurgerea fiecarui modul"
        ]
    },
    {
        name: "Full-Stack Javascript Developer - Engleza",
        start: "To be announced",
        duration: "12 weeks",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "850",
        details: [
          "- contine 2 module: Frontend (7 saptamani) si Backend (5 saptamani) ",
          "- cursul contine 2 evaluari, cate o evaluarea dupa parcurgerea fiecarui modul"
        ]
    },
    {
        name: "Frontend Developer - Engleza",
        start: "To be announced",
        duration: " 7 weeks",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "500",
        details: [
          "- contine 2 module: Frontend (7 saptamani) si Backend (5 saptamani) ",
          "- cursul contine 2 evaluari, cate o evaluarea dupa parcurgerea fiecarui modul"
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
                <div className="course-title"><img src={title}/>{item.name}</div>
                <div className="course-start"><img src={start}/>&nbsp;{item.start}</div>
                <div className="course-duration"><img src={duration}/>{item.duration}</div>
                <div className="course-price"><img src={price}/>&nbsp;{item.price} &euro;</div>
                <div className="course-schedule"><img src={schedule}/>&nbsp;<div>{item.schedule[0]}<br/>{item.schedule[1]}<br/>{item.schedule[2]}</div></div>
              </div>
              <small><img src={downarrow}/>&nbsp;{CLICK_DETAILS}&nbsp;<img src={downarrow}/></small>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i}>
            <Card.Body>&nbsp;&nbsp;{item.details.map((item,i) => <p key={i}>{item}</p>)}</Card.Body>
          </Accordion.Collapse>
      </Card>
      ))}
    </Accordion>
  </>
    )
}

export default Courses;