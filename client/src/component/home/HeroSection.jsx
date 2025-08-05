import Button from "../../ui/Button";
import OptimizedImage, { HeroImage } from "../../ui/OptimizedImage";
import {
  HappyUser,
  HeroBanner,
  HeroButtonGroup,
  HeroGroup,
  HeroHeading,
  HeroParagraph,
  HeroText,
  HeroTextAndButton,
  StyleHeroSection,
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
          <OptimizedImage
            src="/pictures/image/Group frame.png"
            alt="Happy clients group"
            width="80px"
            height="60px"
            objectFit="contain"
          />
          <UserText>
            100+ <span>Satisfied Clients</span>
          </UserText>
        </HappyUser>
      </HeroGroup>
      <HeroBanner>
        <HeroImage
          src="/pictures/banner/HeroBanner.png"
          alt="Hero Banner Image - ANV Enterprise Interior Design"
          width="100%"
          height="400px"
        />
      </HeroBanner>
    </StyleHeroSection>
  );
}

export default HeroSection;
