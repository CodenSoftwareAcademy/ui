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
        duration: "12 saptamani",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "850",
        details: [
          "Format din 2 module: Frontend (7 saptamani) si Backend (5 saptamani).",
          "La finalul fiecarui modul se va lucra la cate un proiect (unul de Frontend si unul de Full Stack).",
          "Se vor aloca 30 de ore doar pentru dezvoltarea gandirii analitice cu ajutorul problemelor de algoritmica.",
          "Predare in limba romana.",
          "Suport teoretic in limba engleza.",
          "Cursul contine 2 evaluari, cate o evaluare la finalul fiecarui modul.",
          "Fiecare evaluare se poate sustine de 2 ori daca nu se reuseste promovarea acestora din prima.",
          "Plata integrala a cursului inainte de inceperea cursului: 850 Euro.",
          "Plata in rate: 50 Euro avans (inainte de inceperea cursului) si 4 rate de 200 Euro (fiecare rata se plateste la 3 saptamani pe parcursul cursului).",
          "Pentru definirea unui plan personalizat de rate, va rugam sa ne contactati la sales@codensoftwareacademy.com.",
          "In primele doua saptamani de curs, in cazul in care doriti sa va retrageti, veti primi integral suma achitata."
        ]
    },
    {
        name: "Frontend Developer - Romana",
        start: "01/09/2020",
        duration: " 7 saptamani",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "500",
        details: [
          "Format dintr-un singur modul: Frontend (7 saptamani).",
          "La finalul modulului se va lucra la un proiect de Frontend.",
          "Se vor aloca 18 de ore doar pentru dezvoltarea gandirii analitice cu ajutorul problemelor de algoritmica.",
          "Predare in limba romana.",
          "Suport teoretic in limba engleza.",
          "Cursul contine o evaluare la finalul modulului.",
          "Evaluarea se poate sustine de 2 ori daca nu se reuseste promovarea acesteia din prima.",
          "Plata integrala a cursului inainte de inceperea cursului: 500 Euro.",
          "Plata in rate: 50 Euro avans (inainte de inceperea cursului) si 2 rate de 225 Euro (fiecare rata se plateste la 3 saptamani pe parcursul cursului).",
          "Pentru definirea unui plan personalizat de rate, va rugam sa ne contactati la sales@codensoftwareacademy.com.",
          "In primele doua saptamani de curs, in cazul in care doriti sa va retrageti, veti primi integral suma achitata."
        ]
    },
    {
        name: "Full-Stack Javascript Developer - Romana",
        start: "05/01/2021",
        duration: "12 saptamani",
        schedule: ["Marti (18:30-21:30)", "Joi (18:30-21:30)", "Sambata (9:30-12:30)"],
        price: "850",
        details: [
          "Format din 2 module: Frontend (7 saptamani) si Backend (5 saptamani).",
          "La finalul fiecarui modul se va lucra la cate un proiect (unul de Frontend si unul de Full Stack).",
          "Se vor aloca 36 de ore doar pentru dezvoltarea gandirii analitice cu ajutorul problemelor de algoritmica.",
          "Predare in limba romana.",
          "Suport teoretic in limba engleza.",
          "Cursul contine 2 evaluari, cate o evaluare la finalul fiecarui modul.",
          "Fiecare evaluare se poate sustine de 2 ori daca nu se reuseste promovarea acestora din prima.",
          "Plata integrala a cursului inainte de inceperea cursului: 850 Euro.",
          "Plata in rate: 50 Euro avans (inainte de inceperea cursului) si 4 rate de 200 Euro (fiecare rata se plateste la 3 saptamani pe parcursul cursului).",
          "Pentru definirea unui plan personalizat de rate, va rugam sa ne contactati la sales@codensoftwareacademy.com.",
          "In primele doua saptamani de curs, in cazul in care doriti sa va retrageti, veti primi integral suma achitata.",
        ]
    },
    {
        name: "Full-Stack Javascript Developer - Engleza",
        start: "Urmeaza sa fie anuntat",
        duration: "12 saptamani",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "850",
        details: [
          "Format din 2 module: Frontend (7 saptamani) si Backend (5 saptamani).",
          "La finalul fiecarui modul se va lucra la cate un proiect (unul de Frontend si unul de Full Stack).",
          "Se vor aloca 36 de ore doar pentru dezvoltarea gandirii analitice cu ajutorul problemelor de algoritmica.",
          "Predare in limba engleza.",
          "Suport teoretic in limba engleza.",
          "Cursul contine 2 evaluari, cate o evaluare la finalul fiecarui modul.",
          "Fiecare evaluare se poate sustine de 2 ori daca nu se reuseste promovarea acestora din prima.",
          "Plata integrala a cursului inainte de inceperea cursului: 850 Euro.",
          "Plata in rate: 50 Euro avans (inainte de inceperea cursului) si 4 rate de 200 Euro (fiecare rata se plateste la 3 saptamani pe parcursul cursului).",
          "Pentru definirea unui plan personalizat de rate, va rugam sa ne contactati la sales@codensoftwareacademy.com.",
          "In primele doua saptamani de curs, in cazul in care doriti sa va retrageti, veti primi integral suma achitata."
        ]
    },
    {
        name: "Frontend Developer - Engleza",
        start: "Urmeaza sa fie anuntat",
        duration: " 7 saptamani",
        schedule: ["Luni (18:30-21:30)", "Miercuri (18:30-21:30)", "Vineri (18:30-21:30)"],
        price: "500",
        details: [
          "Format dintr-un singur modul: Frontend (7 saptamani).",
          "La finalul modulului se va lucra la un proiect de Frontend.",
          "Se vor aloca 18 de ore doar pentru dezvoltarea gandirii analitice cu ajutorul problemelor de algoritmica.",
          "Predare in limba engleza.",
          "Suport teoretic in limba engleza.",
          "Cursul contine o evaluare la finalul modulului.",
          "Evaluarea se poate sustine de 2 ori daca nu se reuseste promovarea acesteia din prima.",
          "Plata integrala a cursului inainte de inceperea cursului: 500 Euro.",
          "Plata in rate: 50 Euro avans (inainte de inceperea cursului) si 2 rate de 225 Euro (fiecare rata se plateste la 3 saptamani pe parcursul cursului).",
          "Pentru definirea unui plan personalizat de rate, va rugam sa ne contactati la sales@codensoftwareacademy.com.",
          "In primele doua saptamani de curs, in cazul in care doriti sa va retrageti, veti primi integral suma achitata."
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
            <Card.Body>&nbsp;&nbsp;<ul>{item.details.map((item,i) => (
              (i == 3 || i == 7 || i == 8 || i == 10) ? <li key={i}><b>{item}</b></li> : <li key={i}>{item}</li>
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