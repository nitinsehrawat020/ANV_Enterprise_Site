import { useState } from "react";
import {
  Answer,
  Question,
  QuestionContainer,
  StyledQuestions,
} from "./StyleFaq";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function Questions({ questions, answers }) {
  const [show, setShow] = useState(Array(questions.length).fill(false));

  function toggleAnswer(index) {
    setShow((prevShow) =>
      prevShow.map((item, i) => (i === index ? !item : item))
    );
  }

  return (
    <StyledQuestions>
      {questions?.map((question, index) => (
        <QuestionContainer key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            {question} {show[index] ? <HiChevronUp /> : <HiChevronDown />}
          </Question>
          {show[index] && <Answer show={show[index]}>{answers[index]}</Answer>}
        </QuestionContainer>
      ))}
    </StyledQuestions>
  );
}

export default Questions;
