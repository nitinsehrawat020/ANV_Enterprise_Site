import Heading from "../../ui/Heading";
import { Paragrah, StyleTitleContainer } from "./styleDesignFalseCeil";

function TitleContainer({ title }) {
  return (
    <StyleTitleContainer>
      <Heading as="h2">{title}</Heading>

      <Paragrah>
        Your Search for the POP {title} to make your dream house more attractive
        end here. Just pick the design and sit with a cup of tea and let us
        began with our magic here found all kind of design for your need and use
        the sort and category to find for what you are looking for.
        <span>In case you need any help feel free to Contact Us</span>
      </Paragrah>
    </StyleTitleContainer>
  );
}

export default TitleContainer;
