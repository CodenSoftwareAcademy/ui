import React from 'react';
import './Faq.css';
import './Acordion.css';
import {Button, Accordion, Card} from 'react-bootstrap';

const faqArray = [
    {
        question: "Does this course guarantee me a job as a programmer?",
        answer: "The course does not guarantee a job but provides the technical knowledge necessary for a junior programmer job. We focus on developing analytical thinking and getting students used to looking for the information they need on their own. In addition to technical knowledge, we help students prepare for interviews by assisting with CV preparation and by simulating technical interviews."
    },
    {
        question: "What do I get after the completion of the course?",
        answer: "After completing the course you will obtain a graduation certificate that will contain all the concepts learned. These notions that are necessary for a position of junior web programmer you will practice in each session during the practical exercises as well as in the projects that you will develop in the course. In addition to this knowledge, you will gain algorithmic thinking and learn how to handle problems on your own."
    },
    {
        question: "What is the preparation for the interview?",
        answer: "Preparing the student for a programmer interview consists in simulating a technical interview with one of our instructors. The simulation will consist of questions about theoretical notions and a practical part to reproduce as accurately as possible a real technical interview."
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