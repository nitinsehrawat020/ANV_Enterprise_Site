import Button from "../../ui/Button";
import OptimizedImage, { HeroImage } from "../../ui/OptimizedImage";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Function to scroll to contact form on the same page
  const handleGetQuote = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: scroll to bottom of page if contact section not found
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Function to navigate to design exploration pages
  const handleExplore = () => {
    // Navigate to false ceiling design page as the main design showcase
    // Users can then navigate to other design types from there
    navigate("/design/false-ceil");
  };

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
            <Button variation="unfilled" onClick={handleGetQuote}>
              Get A Quote!
            </Button>
            <Button variation="filled" onClick={handleExplore}>
              Explore
            </Button>
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
          height="100%"
        />
      </HeroBanner>
    </StyleHeroSection>
  );
}

export default HeroSection;
