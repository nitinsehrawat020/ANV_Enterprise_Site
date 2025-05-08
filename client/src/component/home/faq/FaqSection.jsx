import Heading from "../../../ui/Heading";
import Questions from "./Questions";
import { Bar, Content, StyledFaqContent } from "./StyleFaq";

const questions = [
  "What is the process of buying a house?",
  "What is the process of selling a house?",
  "What is the process of renting a house?",
  "What is the process of renting out a house?",
];

const answers = [
  "The process of buying a house is simple. You need to find a house, make an offer, and close the deal.",
  "The process of selling a house is simple. You need to find a buyer, negotiate the price, and close the deal.",
  "The process of renting a house is simple. You need to find a house, sign a lease, and move in.",
  "The process of renting out a house is simple. You need to find a tenant, sign a lease, and collect rent.",
];

function FaqSection() {
  return (
    <StyledFaqContent>
      <Bar />
      <Content>
        <Heading as="h3">FAQ&apos;s</Heading>
        <Questions questions={questions} answers={answers} />
      </Content>
    </StyledFaqContent>
  );
}

export default FaqSection;
