import Title from "./Title";
import HeaderButton from "./HeaderButton";

import { HerosectionRoot, Header, HeaderContainer, Image } from "./HeroStyle";

function HeroSection() {
  return (
    <HerosectionRoot>
      <Header>
        <HeaderContainer>
          <Title />
          <HeaderButton />
        </HeaderContainer>
        <Image>
          <img src="pictures\banner\background_1.png" />
        </Image>
      </Header>
    </HerosectionRoot>
  );
}

export default HeroSection;
