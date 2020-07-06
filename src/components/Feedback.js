import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Feedback.css";

const feedback = [
  {
    message: "Straight to the point, focused on learning by doing. Always helpful and knows when to spend more time on important theoretical aspects. Has a really nice way of simplifying complex problems, so that they don't feel overwhelming.",
    student: "Emil"
  },
  {
    message: "I enjoyed learning with Cosmin very much. He is friendly and clearly is an expert on the content of the course. One of the best tools is his ability to create good analogies for complex problems which help students understand difficult concepts.",
    student: "Alec"
  },
  {
    message: "Cosmin is a very good instructor. He is patient, always smiling and caring. He encouraged us to try our best and was ready to help when needed. He explained complex subjects as simple as possible. I am very happy to be his student.",
    student: "Serdar"
  },
  {
    message: "Cosmin is a very professional and knowledgeable teacher! He gave step by step explanations and made sure I understood everything before proceeding. He is very knowledgeable in programming and was super patient. Would definitely recommend!",
    student: "Andrei"
  },
  {
    message: "Cosmin always explained theory by showing/doing examples and encouraged us to try as well and practice more and more. Always making sure everything is clear and helped us when we had any problems in our code. Personally, I believe he is a great instructor that cares about his students and he knows how to motivate/guide them.",
    student: "Ioana"
  }

];

function Feedback() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {feedback.map((item, i) => (
        <Carousel.Item key={i}>
          <h3>"{item.message}"</h3>
          <Carousel.Caption>
            {/* <p>{item.student}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Feedback;
