import styled from "styled-components";
import { device } from "../../Styles/Theme";

const PrivacyPolicyContainer = styled.div`
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

const LastUpdated = styled.p`
  text-align: center;
  color: var(--color-gray-600);
  margin-bottom: 2rem;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: var(--color-dimgray);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SubsectionTitle = styled.h3`
  color: var(--color-dimgray);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-weight: 500;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--color-black);
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: var(--color-black);
`;

const ContactInfo = styled.div`
  background-color: var(--color-whitesmoke);
  padding: 1.5rem;
  border-radius: var(--br-8);
  margin-top: 2rem;
  border-left: 4px solid var(--color-orange);
`;

function PrivacyPolicy() {
  return (
    <PrivacyPolicyContainer>
      <Title>Privacy Policy</Title>
      <LastUpdated>Last updated: {new Date().toLocaleDateString()}</LastUpdated>

      <Section>
        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Welcome to ANV Enterprise (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;). We are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website or use our interior design
          services.
        </Paragraph>
        <Paragraph>
          By accessing or using our services, you agree to the collection and
          use of information in accordance with this policy.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Information We Collect</SectionTitle>

        <SubsectionTitle>2.1 Personal Information</SubsectionTitle>
        <Paragraph>
          We may collect the following types of personal information:
        </Paragraph>
        <List>
          <ListItem>
            Name and contact information (email, phone number, address)
          </ListItem>
          <ListItem>Project details and preferences</ListItem>
          <ListItem>
            Payment information (processed securely through third-party
            providers)
          </ListItem>
          <ListItem>Account credentials and profile information</ListItem>
          <ListItem>Communication preferences</ListItem>
        </List>

        <SubsectionTitle>
          2.2 Automatically Collected Information
        </SubsectionTitle>
        <Paragraph>
          When you visit our website, we automatically collect:
        </Paragraph>
        <List>
          <ListItem>IP address and browser information</ListItem>
          <ListItem>Pages visited and time spent on our site</ListItem>
          <ListItem>Device information and operating system</ListItem>
          <ListItem>Cookies and similar tracking technologies</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. How We Use Your Information</SectionTitle>
        <Paragraph>We use the collected information for:</Paragraph>
        <List>
          <ListItem>
            Providing and improving our interior design services
          </ListItem>
          <ListItem>Processing orders and managing projects</ListItem>
          <ListItem>Communicating with you about services and updates</ListItem>
          <ListItem>Personalizing your experience on our website</ListItem>
          <ListItem>
            Analyzing website usage and improving functionality
          </ListItem>
          <ListItem>
            Marketing and promotional activities (with your consent)
          </ListItem>
          <ListItem>Complying with legal obligations</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Information Sharing and Disclosure</SectionTitle>
        <Paragraph>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties except in the following circumstances:
        </Paragraph>
        <List>
          <ListItem>With your explicit consent</ListItem>
          <ListItem>
            To trusted service providers who assist in our operations (subject
            to confidentiality agreements)
          </ListItem>
          <ListItem>
            To comply with legal requirements or protect our rights
          </ListItem>
          <ListItem>In connection with a business transfer or merger</ListItem>
          <ListItem>
            To protect the safety and security of our users and the public
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. Data Security</SectionTitle>
        <Paragraph>
          We implement appropriate technical and organizational security
          measures to protect your personal information against unauthorized
          access, alteration, disclosure, or destruction. These measures
          include:
        </Paragraph>
        <List>
          <ListItem>
            Encryption of sensitive data in transit and at rest
          </ListItem>
          <ListItem>Regular security assessments and updates</ListItem>
          <ListItem>Access controls and authentication mechanisms</ListItem>
          <ListItem>Employee training on data protection practices</ListItem>
        </List>
        <Paragraph>
          However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Cookies and Tracking Technologies</SectionTitle>
        <Paragraph>
          We use cookies and similar technologies to enhance your browsing
          experience, analyze site traffic, and personalize content. You can
          control cookie preferences through your browser settings, though
          disabling cookies may affect site functionality.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Your Rights and Choices</SectionTitle>
        <Paragraph>You have the right to:</Paragraph>
        <List>
          <ListItem>Access and review your personal information</ListItem>
          <ListItem>Request correction of inaccurate data</ListItem>
          <ListItem>Request deletion of your personal information</ListItem>
          <ListItem>
            Object to processing of your data for marketing purposes
          </ListItem>
          <ListItem>Request data portability</ListItem>
          <ListItem>Withdraw consent at any time</ListItem>
        </List>
        <Paragraph>
          To exercise these rights, please contact us using the information
          provided below.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Data Retention</SectionTitle>
        <Paragraph>
          We retain your personal information only as long as necessary to
          fulfill the purposes outlined in this policy, comply with legal
          obligations, resolve disputes, and enforce our agreements. When data
          is no longer needed, we securely delete or anonymize it.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Third-Party Links</SectionTitle>
        <Paragraph>
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices or content of these external
          sites. We encourage you to review the privacy policies of any
          third-party sites you visit.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Children&apos;s Privacy</SectionTitle>
        <Paragraph>
          Our services are not intended for children under 13 years of age. We
          do not knowingly collect personal information from children under 13.
          If we discover that we have collected information from a child under
          13, we will promptly delete such information.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>11. Changes to This Privacy Policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. We will notify you of any
          material changes by posting the updated policy on our website and
          updating the &quot;Last updated&quot; date.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>12. Contact Information</SectionTitle>
        <ContactInfo>
          <Paragraph style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </Paragraph>
          <Paragraph style={{ marginBottom: "0.5rem" }}>
            <strong>ANV Enterprise</strong>
          </Paragraph>
          <Paragraph style={{ marginBottom: "0.5rem" }}>
            Email: info@anventerprise.com
          </Paragraph>
          <Paragraph style={{ marginBottom: "0.5rem" }}>
            Phone: +91 92382375189
          </Paragraph>
          <Paragraph style={{ marginBottom: "0" }}>
            Address: New Delhi, India
          </Paragraph>
        </ContactInfo>
      </Section>
    </PrivacyPolicyContainer>
  );
}

export default PrivacyPolicy;
