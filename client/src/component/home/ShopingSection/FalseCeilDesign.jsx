import { Button } from "../../../ui/Button";
import Heading from "../../../ui/Heading";
import {
  ModleTitle,
  ModleContainer,
  CardBox,
  Title,

  // BackgroundConnect,
} from "./ShopingStyle";
import TitleCard from "./TitleCard";

function FalseCeilDesign() {
  return (
    <ModleContainer>
      <Heading as="h3">
        <ModleTitle>
          <Title>
            <span>FALSE CEILING</span> DESIGN
          </Title>
          <Button variant="filled" size="1">
            Check More Design
          </Button>
        </ModleTitle>
      </Heading>
      <CardBox>
        <TitleCard src="pictures/banner/image1.webp" />
        <TitleCard src="pictures/banner/image2.webp" />
      </CardBox>
    </ModleContainer>
  );
}

export default FalseCeilDesign;
