import {
  TitleContainer,
  StyledTitle,
  PopDesign,
  P,
  SubHeading,
} from "./HeroStyle";
import Heading from "../../../ui/Heading";

function Title() {
  return (
    <div>
      <TitleContainer>
        <Heading as="h1">
          <StyledTitle>
            <P>Your Trusted Partner For Creative</P>
            <PopDesign> Pop Design</PopDesign>
          </StyledTitle>
        </Heading>
        <SubHeading>
          Experience comprehensive solutions from concept to completion. Allow
          us to create the ideal POP design for your home or workplace.
        </SubHeading>
      </TitleContainer>
    </div>
  );
}

export default Title;
