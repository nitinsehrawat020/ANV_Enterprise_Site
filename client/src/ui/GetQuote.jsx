import styled from "styled-components";
import Heading from "./Heading";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--color-white-500);
  background-color: var(--color-background-800);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-1);
  padding: 2rem;
  gap: 1rem;

  & h2 {
    font-size: 2rem;
    color: var(--color-secondary);
  }

  & p {
    text-align: center;
    max-width: 500px;
    font-size: 1.1rem;
  }
  & span {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: var(--br-m);
  }
`;

export const Divider = styled.div`
  width: 300px;
  height: 2px;
  background-color: var(--color-white-50);
  opacity: 0.2;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & input {
    width: 200px;
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    color: var(--color-white-500);
    background-color: var(--color-background-500);
    border-radius: 5px;
  }
  & textarea {
    width: 300px;
    height: 100px;
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    color: var(--color-white-500);
    background-color: var(--color-background-500);
    border-radius: 5px;
  }
  & button {
    padding: 0.5rem 1rem;
    border-radius: var(--br-m);
    border: none;
    color: var(--color-white-500);
    background-color: var(--color-primary-700);
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-500);
    }
  }
`;
function GetQuote() {
  return (
    <div>
      <Container>
        <Heading as="h2">Get a Quote</Heading>
        <Divider />
        <p>
          We are here to help you with all your insurance needs. Whether you
          need a quote or just some advice, we are here to help.
        </p>
        <span>
          <strong>Call us at:</strong> <a href="tel:9212233109">9212233109</a>
          or reach us on{" "}
          <a href="https://wa.me/9212233109">
            {" "}
            <Icon
              icon="ion:logo-whatsapp"
              width="30"
              height="30"
              style={{ color: "var(--color-succes)" }}
            />
          </a>
        </span>
        <p>Fill out the form below and we will get back to you shortly.</p>
        <Form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </Form>
      </Container>
    </div>
  );
}

export default GetQuote;
