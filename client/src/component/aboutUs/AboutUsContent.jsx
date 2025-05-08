import Heading from "../../ui/Heading";
import Carousel from "../../ui/Carousel";
import {
  AboutUsContainer,
  Numbers,
  CarouselContainer,
  Content,
  Description,
  InfoBoxConatiner,
  InfoBox,
  Title,
} from "./StyleAboutUs";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

function AboutUsContent() {
  return (
    <AboutUsContainer>
      <Title>
        <Heading as="h2">About Us</Heading>
      </Title>
      <Content>
        <p>
          The ANV Enterprise is a one-stop solution to get all kinds of
          POP-related works for house interiors. Here at Pop design, you can
          explore different kinds of pop design Design to decorate your home
          with beauty and attractiveness.
        </p>
        <p>
          We have a team of professionals who are experts in their work and have
          years of experience in the field. They are well-versed with the latest
          trends and designs in the market and can provide you with the best
          solutions for your home interiors.
        </p>
        <p>
          We offer a wide range of services including pop design, false ceiling,
          wall painting, and more. Our team is dedicated to providing you with
          the best quality services at affordable prices.
        </p>
        <p>
          So, if you are looking for a reliable and trustworthy pop design
          service provider, then look no further than The ANV Enterprise. We are
          here to help you transform your home into a beautiful and attractive
          space that you will love to live in.
        </p>
        <p>
          Contact us today to know more about our services and how we can help
          you with your home interiors.
        </p>
        <InfoBoxConatiner>
          <InfoBox>
            <Numbers>
              <Icon
                icon="healthicons:miner-worker-alt2x-outline"
                width="35"
                height="35"
                style={{ color: "#fff" }}
              />
              15
            </Numbers>
            <Description>Team members</Description>
          </InfoBox>
          <InfoBox>
            <Numbers>
              <Icon
                icon="qlementine-icons:user-24"
                width="24"
                height="24"
                style={{ color: "#fff" }}
              />
              10k
            </Numbers>
            <Description>Active users</Description>
          </InfoBox>
        </InfoBoxConatiner>
      </Content>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
    </AboutUsContainer>
  );
}

export default AboutUsContent;
