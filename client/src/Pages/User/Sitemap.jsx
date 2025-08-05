import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../Styles/Theme";

const SitemapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--color-white);
  border-radius: var(--br-8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    padding: 1.5rem;
    margin: 1rem;
  }

  @media ${device.mobile} {
    padding: 1rem;
    margin: 0.5rem;
  }
`;

const Title = styled.h1`
  color: var(--color-orange);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 2rem;
  }

  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  text-align: center;
  color: var(--color-gray-600);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Section = styled.div`
  background-color: var(--color-floralwhite);
  padding: 1.5rem;
  border-radius: var(--br-8);
  border-left: 4px solid var(--color-orange);
`;

const SectionTitle = styled.h2`
  color: var(--color-dimgray);
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(NavLink)`
  color: var(--color-black);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
  display: block;
  padding: 0.25rem 0;

  &:hover {
    color: var(--color-orange);
    text-decoration: underline;
  }

  &.active {
    color: var(--color-orange);
    font-weight: 500;
  }
`;

const ExternalLink = styled.a`
  color: var(--color-black);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
  display: block;
  padding: 0.25rem 0;

  &:hover {
    color: var(--color-orange);
    text-decoration: underline;
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: var(--color-gray-600);
  margin-top: 2rem;
  font-style: italic;
  font-size: 0.9rem;
`;

function Sitemap() {
  return (
    <SitemapContainer>
      <Title>Sitemap</Title>
      <Description>
        Find all the pages and resources available on our website. Navigate
        easily to any section of ANV Enterprise.
      </Description>

      <SectionContainer>
        <Section>
          <SectionTitle>Main Pages</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/">Home</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/aboutUs">About Us</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/favortie">Favorites</StyledLink>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Design Services</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/design/false-ceil">
                False Ceiling Design
              </StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/design/molding">Molding Design</StyledLink>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>User Account</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/login">Login</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/signup">Sign Up</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/my-account/profile">My Profile</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/my-account/order-history">
                Order History
              </StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/my-account/payment-history">
                Payment History
              </StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/my-account/password">Change Password</StyledLink>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Legal &amp; Support</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/terms-of-service">Terms of Service</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/sitemap">Sitemap</StyledLink>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <LinkList>
            <LinkItem>
              <ExternalLink href="tel:+919212233109">
                Phone: +91 92382375189
              </ExternalLink>
            </LinkItem>
            <LinkItem>
              <ExternalLink href="mailto:info@anventerprise.com">
                Email: info@anventerprise.com
              </ExternalLink>
            </LinkItem>
            <LinkItem>
              <span
                style={{
                  color: "var(--color-black)",
                  fontSize: "1rem",
                  padding: "0.25rem 0",
                  display: "block",
                }}
              >
                Address: New Delhi, India
              </span>
            </LinkItem>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Admin Panel</SectionTitle>
          <LinkList>
            <LinkItem>
              <StyledLink to="/dashboard">Dashboard</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/worker">Worker Management</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/site">Site Management</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/vendour">Vendor Management</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/setting">Settings</StyledLink>
            </LinkItem>
          </LinkList>
        </Section>
      </SectionContainer>

      <LastUpdated>Last updated: {new Date().toLocaleDateString()}</LastUpdated>
    </SitemapContainer>
  );
}

export default Sitemap;
