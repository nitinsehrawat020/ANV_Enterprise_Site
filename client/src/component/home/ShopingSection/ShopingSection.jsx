import Heading from "../../../ui/Heading";
import FalseCeilDesign from "./FalseCeilDesign";
import MoldingDesign from "./MoldingDesign";
import { StyledShoping, ShopingContainer, ShopingTitle } from "./ShopingStyle";

function ShopingSection() {
  return (
    <StyledShoping>
      <ShopingContainer>
        <ShopingTitle>
          <Heading as="h2">OUR WORKS</Heading>
        </ShopingTitle>
        <FalseCeilDesign />
        <MoldingDesign />
      </ShopingContainer>
    </StyledShoping>
  );
}

export default ShopingSection;
