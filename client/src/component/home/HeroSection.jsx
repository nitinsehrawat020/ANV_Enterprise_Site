import Button from "../../ui/Button";
import {
  BannerImage,
  HappyUser,
  HeroBanner,
  HeroButtonGroup,
  HeroGroup,
  HeroHeading,
  HeroParagraph,
  HeroText,
  HeroTextAndButton,
  StyleHeroSection,
  UserImg,
  UserText,
} from "./styleHome.jsx";

function HeroSection() {
  return (
    <StyleHeroSection>
      <HeroGroup>
        <HeroTextAndButton>
          <HeroText>
            <HeroHeading>
              Your Trusted Partner For Creative <span>Pop Design</span>
            </HeroHeading>
            <HeroParagraph>
              The ANV Enterprise is a one-stop solution to get all kinds of
              POP-related works for house interiors. Here at Pop design, you can
              explore different kinds of pop design to decorate your home with
              beauty and attractiveness.
            </HeroParagraph>
          </HeroText>
          <HeroButtonGroup>
            <Button variation="unfilled">Get A Quote!</Button>
            <Button variation="filled">Explore</Button>
          </HeroButtonGroup>
        </HeroTextAndButton>
        <HappyUser>
          <UserImg src="pictures\image\Group frame.png" />
          <UserText>
            100+ <span>Satisfied Clients</span>
          </UserText>
        </HappyUser>
      </HeroGroup>
      <HeroBanner>
        <BannerImage
          src="/pictures/banner/HeroBanner.png"
          alt="Hero Banner Image "
        ></BannerImage>
      </HeroBanner>
    </StyleHeroSection>
  );
}

export default HeroSection;
