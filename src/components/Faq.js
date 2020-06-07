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
        question: "Ce imi ofera acest curs?",
        answer: "Acest curs ofera posibilitatea de a face o gramada de chestii"
    },
    {
        question: "Ce imi ofera acest curs?",
        answer: "Acest curs ofera posibilitatea de a face o gramada de chestii"
    },
    {
        question: "Ce imi ofera acest curs?",
        answer: "Acest curs ofera posibilitatea de a face o gramada de chestii"
    },
    {
        question: "Ce imi ofera acest curs?",
        answer: "Acest curs ofera posibilitatea de a face o gramada de chestii"
    },
    {
        question: "Ce imi ofera acest curs?",
        answer: "Acest curs ofera posibilitatea de a face o gramada de chestii"
    },
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