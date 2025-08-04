import {
  CardDesc,
  HeadingAndIcon,
  HeadingOurValues,
  Icon,
  OVCardConatiner,
  OVCardHeading,
  OVContainer,
  OVHeadingContainer,
  StyleOurValues,
  StyleOVCard,
  SubHeadingOurValues,
} from "./styleAboutUs";

import { GoGoal } from "react-icons/go";
import { BiHomeHeart } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

function OurValues() {
  const CardData = [
    {
      icon: <GoGoal size={48} />,
      heading: "Quality Excellence",
      desc: "We maintain the highest standards of craftsmanship in every project we undertake",
    },
    {
      icon: <BiHomeHeart size={48} />,
      heading: "Customer Satisfaction",
      desc: "Your happiness is our priority. We work closely with you to bring your vision to life.",
    },
    {
      icon: <RiServiceLine size={48} />,
      heading: "Reliable Service",
      desc: "Count on us for timely delivery and professional service that exceeds expectations.",
    },
  ];
  return (
    <StyleOurValues>
      <OVHeadingContainer>
        <HeadingOurValues>Our Values</HeadingOurValues>
        <SubHeadingOurValues>
          These principles guide everything we do and shape every interaction we
          have with our clients
        </SubHeadingOurValues>
      </OVHeadingContainer>
      <OVCardConatiner>
        {CardData.map((card) => (
          <StyleOVCard key={card.heading}>
            <OVContainer>
              <HeadingAndIcon>
                <Icon>{card.icon}</Icon>
                <OVCardHeading>{card.heading}</OVCardHeading>
              </HeadingAndIcon>
              <CardDesc>{card.desc}</CardDesc>
            </OVContainer>
          </StyleOVCard>
        ))}
      </OVCardConatiner>
    </StyleOurValues>
  );
}

export default OurValues;

{
  /* <StyleHIWCard>
      <HIWContainer>
        <HeadingAndIcon>
          <Icon>{icon}</Icon>
          <HIWCardHeading>{heading}</HIWCardHeading>
        </HeadingAndIcon>
        <CardDesc>{desc}</CardDesc>
      </HIWContainer>
    </StyleHIWCard> */
}
