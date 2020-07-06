import React from 'react';
import './Faq.css';
import './Acordion.css';
import {Button, Accordion, Card} from 'react-bootstrap';

const faqArray = [
    {
        question: "Acest curs imi garanteaza un job de programator?",
        answer: "Cursul nu garanteaza un job ci asigura cunostintele tehnice necesare unui job de programator junior. Ne concentram pe dezvoltarea modului de gandire analitica si pe obisnuirea studentilor de a cauta singuri informatia de care au nevoie. Pe langa cunostintele tehnice, ajutam studentii sa se pregateasca pentru interviuri prin asistenta la pregatirea CV-ului si prin simularea unor interviuri tehnice."
    },
    {
        question: "Ce obtin in urma cursului?",
        answer: "Dupa parcurgerea cursului veti obtine un certificat de absolvire care va contine toate notiunile invatate. Aceste notiuni ce sunt necesare pentru un post de programator web junior le veti exersa in cadrul fiecarei sedinte in intervalul de exercitii practice precum si in cadrul proiectelor pe care le veti dezvolta in cadrul cursului. Pe langa aceste cunostinte, veti obtine o gandire algoritmica si veti invata cum sa va descurcati singuri in rezolvarea problemelor."
    },
    {
        question: "In ce consta pregatirea pentru interviu?",
        answer: "Pregatirea studentului pentru un interviu de programator consta in simularea unui interviu tehnic cu unul dintre instructorii nostri. Simularea va consta in intrebari despre notiuni teoretice si o parte practica pentru a reproduce cat mai fidel un interviu tehnic real."
    }
]

function Faq(){
    return(
        <div className="faq">
            <Accordion>
                {faqArray.map((item, i) => (
                    <Card key={i}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="p" eventKey={i}>
                                {`${i+1}. ${item.question}`}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={i}>
                            <Card.Body>&nbsp;&nbsp;{item.answer}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    )
}

export default Faq;