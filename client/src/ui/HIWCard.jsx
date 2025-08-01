import {
  HeadingAndIcon,
  Icon,
  HIWContainer,
  StyleHIWCard,
  HIWCardHeading,
  CardDesc,
} from "../component/home/styleHome.jsx";

function HIWCard({ icon, heading, desc }) {
  return (
    <StyleHIWCard>
      <HIWContainer>
        <HeadingAndIcon>
          <Icon>{icon}</Icon>
          <HIWCardHeading>{heading}</HIWCardHeading>
        </HeadingAndIcon>
        <CardDesc>{desc}</CardDesc>
      </HIWContainer>
    </StyleHIWCard>
  );
}

export default HIWCard;
