import React from 'react';
import './About.css';
import gen1 from '../media/gen101.png';
import gen2 from '../media/gen201.png';
import AboutUs from './AboutUs';
import AboutAdvantages from './AboutAdvantages';
import AboutOffering from './AboutOffering';

function About() {
    return(
        <div className="about">
            <AboutUs />

            <h3 id="advantage">Advantages</h3>
            <AboutAdvantages />

            <h3>How a regular course day looks like</h3>
            <div className="about-lesson">
            <div className="lesson">
            
                <div className="lesson-content">
                <h4>1. Recap</h4>
                    <p>Each session starts with a recap of the concepts studied in the previous day to ensure that 
                        all students understood the concepts taught and to get answers to the questions that arose 
                        after completion of the previous day.
                    </p>
                <h4>2. Theoretical concepts presented by the instructor live</h4>
                    <p>The first new activity in a course session is to teach theoretical concepts. 
                        The concepts are taught by the instructor in a live session, a session that will be 
                        recorded and made available to students so that they can consult it whenever necessary, 
                        as well as for the cases when they cannot attend the live session.
                    </p>

                <img src={gen2} alt="remote training" />
                </div>
            </div>
            <div className="about-lesson-img">
                <img src={gen1} alt="individual training" />

                <h4>3. Practicing the newly learned concepts</h4>
                    <p>After presenting the theoretical notions, students will implement those concepts by 
                        solving a set of exercises. After completing the time allotted for these exercises, 
                        the instructor will present the solution and will help each student to understand the 
                        solving method.
                    </p>
                <h4>4. Practicing algorithmic thinking</h4>
                    <p>A programmer develops algorithms. For that, a logical and structured thinking is needed. 
                        As this way of thinking is extremely important in this field, allocating a specific time 
                        interval during each session for solving algorithmic problems is needed. At the end of the time 
                        allotted for this type of problems, the instructor will present the solution and will explain to 
                        each student the solving method.
                    </p>
            </div>
            </div>
            <AboutOffering />
        </div>
    )
}

export default About;