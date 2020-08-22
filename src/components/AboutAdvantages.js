import React from 'react';
import bullet from '../media/bullet.png';

const ADVANTAGES_DATA = [
    "You have the opportunity to start a career in one of the most well paid fields on the market.",
    "You do not need to have previous IT knowledge to start the course. All you need is the willingness to learn and practice.",
    "If after the first week you consider that this course is not what you want, you can withdraw and you will receive a full refund.",
    "You will use a modern stack of technologies such as React, Redux, Node, Express or MongoDB.",
    "During the course, you will develop projects that you can add to your personal portfolio and present them at job interviews.",
    "You will get trainers with experience both in teaching theoretical concepts and in applying them in real projects.",
    "In addition to teaching theoretical concepts, the instructor will guide you with both technical and non-technical advices on the next steps in your career as a programmer.",
    "You will have to solve algorithmic exercises in each session to develop your analytical thinking.",
    "You will learn how to look for relevant technical information when you reach a blocking point in the development of your application.",
    "All meetings will be recorded and made available to you so that you can consult them as many times as you need.",
    "We will help you prepare for interviews, by assisting in creating your CV as well as by simulating a technical interview with our trainers.",
    "After completing the course you will be able to schedule a free consulting session with your trainer to help you both technically and with non-technical advice."
]

function AboutAdvantages() {
    return (
            <div className="about-advantages">
                <div className="advantage-list">
                    {ADVANTAGES_DATA.map((item, i) => (
                        <div key={i}>
                            <img src={bullet} alt='bullet'/>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default AboutAdvantages;