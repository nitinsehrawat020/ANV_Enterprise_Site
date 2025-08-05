import styled from "styled-components";
import { device } from "../../Styles/Theme";

const TermsContainer = styled.div`
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

const HighlightBox = styled.div`
  background-color: var(--color-floralwhite);
  padding: 1rem;
  border-radius: var(--br-8);
  border-left: 4px solid var(--color-orange);
  margin: 1rem 0;
`;

function TermsOfService() {
  return (
    <TermsContainer>
      <Title>Terms of Service</Title>
      <LastUpdated>Last updated: {new Date().toLocaleDateString()}</LastUpdated>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing and using the services provided by ANV Enterprise
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), you (&quot;User,&quot; &quot;you,&quot; or
          &quot;your&quot;) agree to be bound by these Terms of Service
          (&quot;Terms&quot;). If you do not agree to these Terms, please do not
          use our services.
        </Paragraph>
        <Paragraph>
          These Terms constitute a legally binding agreement between you and ANV
          Enterprise regarding your use of our website and interior design
          services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Description of Services</SectionTitle>
        <Paragraph>
          ANV Enterprise provides interior design services including but not
          limited to:
        </Paragraph>
        <List>
          <ListItem>Interior design consultation and planning</ListItem>
          <ListItem>False ceiling design and installation</ListItem>
          <ListItem>Molding and trim work</ListItem>
          <ListItem>Custom design solutions</ListItem>
          <ListItem>Project management and coordination</ListItem>
          <ListItem>Design visualization and 3D rendering</ListItem>
        </List>
        <Paragraph>
          We reserve the right to modify, suspend, or discontinue any aspect of
          our services at any time without prior notice.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. User Responsibilities</SectionTitle>

        <SubsectionTitle>3.1 Account Registration</SubsectionTitle>
        <Paragraph>
          To access certain features of our services, you may be required to
          create an account. You agree to:
        </Paragraph>
        <List>
          <ListItem>Provide accurate and complete information</ListItem>
          <ListItem>Maintain the security of your account credentials</ListItem>
          <ListItem>Notify us immediately of any unauthorized access</ListItem>
          <ListItem>
            Be responsible for all activities under your account
          </ListItem>
        </List>

        <SubsectionTitle>3.2 Prohibited Uses</SubsectionTitle>
        <Paragraph>You agree not to:</Paragraph>
        <List>
          <ListItem>Use our services for any unlawful purpose</ListItem>
          <ListItem>Interfere with or disrupt our website or services</ListItem>
          <ListItem>
            Attempt to gain unauthorized access to our systems
          </ListItem>
          <ListItem>Upload or transmit harmful or malicious content</ListItem>
          <ListItem>Violate any applicable laws or regulations</ListItem>
          <ListItem>Infringe upon intellectual property rights</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Service Terms and Conditions</SectionTitle>

        <SubsectionTitle>4.1 Project Agreements</SubsectionTitle>
        <Paragraph>
          All design projects are subject to separate written agreements that
          will include:
        </Paragraph>
        <List>
          <ListItem>Scope of work and project specifications</ListItem>
          <ListItem>Timeline and milestones</ListItem>
          <ListItem>Payment terms and schedule</ListItem>
          <ListItem>Material and labor specifications</ListItem>
          <ListItem>Change order procedures</ListItem>
        </List>

        <SubsectionTitle>4.2 Design Ownership</SubsectionTitle>
        <Paragraph>
          Custom designs created by ANV Enterprise remain our intellectual
          property until full payment is received. Upon full payment, you
          receive a license to use the designs for the specified project only.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Payment Terms</SectionTitle>
        <HighlightBox>
          <Paragraph style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
            Important Payment Information:
          </Paragraph>
          <List style={{ marginBottom: "0" }}>
            <ListItem>All prices are subject to change without notice</ListItem>
            <ListItem>
              Payment schedules will be outlined in project agreements
            </ListItem>
            <ListItem>Late payments may incur additional charges</ListItem>
            <ListItem>Refunds are subject to our refund policy</ListItem>
          </List>
        </HighlightBox>

        <SubsectionTitle>5.1 Payment Methods</SubsectionTitle>
        <Paragraph>
          We accept various payment methods including cash, bank transfers, and
          digital payments. All payments must be made in Indian Rupees (INR).
        </Paragraph>

        <SubsectionTitle>5.2 Cancellation and Refunds</SubsectionTitle>
        <Paragraph>
          Cancellation and refund policies vary by project stage and will be
          detailed in individual project agreements. Generally:
        </Paragraph>
        <List>
          <ListItem>Design consultation fees are non-refundable</ListItem>
          <ListItem>Material costs may be non-refundable once ordered</ListItem>
          <ListItem>Labor costs for completed work are non-refundable</ListItem>
          <ListItem>Cancellations must be made in writing</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>6. Warranties and Disclaimers</SectionTitle>

        <SubsectionTitle>6.1 Service Warranty</SubsectionTitle>
        <Paragraph>
          We warrant that our services will be performed with professional skill
          and care. Any defects in workmanship will be corrected at no
          additional cost within the warranty period specified in your project
          agreement.
        </Paragraph>

        <SubsectionTitle>6.2 Material Warranty</SubsectionTitle>
        <Paragraph>
          Materials are warranted according to manufacturer specifications. We
          do not provide additional warranties beyond those provided by material
          manufacturers.
        </Paragraph>

        <SubsectionTitle>6.3 Disclaimers</SubsectionTitle>
        <Paragraph>
          EXCEPT AS EXPRESSLY STATED, OUR SERVICES ARE PROVIDED &quot;AS
          IS&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Limitation of Liability</SectionTitle>
        <Paragraph>
          To the maximum extent permitted by law, ANV Enterprise shall not be
          liable for any indirect, incidental, special, or consequential damages
          arising from the use of our services.
        </Paragraph>
        <Paragraph>
          Our total liability for any claim shall not exceed the amount paid by
          you for the specific service giving rise to the claim.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Intellectual Property</SectionTitle>
        <Paragraph>
          All content on our website, including text, graphics, logos, and
          software, is owned by ANV Enterprise and protected by intellectual
          property laws. You may not reproduce, distribute, or create derivative
          works without our written permission.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Privacy and Data Protection</SectionTitle>
        <Paragraph>
          Your privacy is important to us. Please review our Privacy Policy,
          which also governs your use of our services, to understand our
          practices regarding the collection and use of your information.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Force Majeure</SectionTitle>
        <Paragraph>
          We shall not be liable for any delay or failure in performance due to
          events beyond our reasonable control, including but not limited to
          acts of God, natural disasters, government actions, or supply chain
          disruptions.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>11. Governing Law and Jurisdiction</SectionTitle>
        <Paragraph>
          These Terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising under these Terms shall be subject
          to the exclusive jurisdiction of the courts in New Delhi, India.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>12. Modifications to Terms</SectionTitle>
        <Paragraph>
          We reserve the right to modify these Terms at any time. Changes will
          be effective immediately upon posting on our website. Your continued
          use of our services after any changes constitutes acceptance of the
          new Terms.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>13. Severability</SectionTitle>
        <Paragraph>
          If any provision of these Terms is found to be unenforceable or
          invalid, the remaining provisions shall remain in full force and
          effect.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>14. Contact Information</SectionTitle>
        <ContactInfo>
          <Paragraph style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
            For questions about these Terms of Service, please contact us:
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
    </TermsContainer>
  );
}

export default TermsOfService;
