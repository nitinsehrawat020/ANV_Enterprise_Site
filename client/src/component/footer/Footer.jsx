import { NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaUser,
  FaHeart,
  FaInfoCircle,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  CompanySection,
  FooterSection,
  FooterLogo,
  CompanyName,
  FooterTitle,
  FooterDescription,
  FooterList,
  FooterListItem,
  ContactInfo,
  ContactItem,
  SocialMedia,
  SocialIcon,
  FooterBottom,
  FooterBottomContent,
  Copyright,
  FooterLinks,
} from "./StyleFooter";
import { useUser } from "../LoginAndSignup/useUser";

function Footer() {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleConsultationClick = () => {
    navigate("/");
    // Scroll to contact us section after navigation
    setTimeout(() => {
      const contactSection = document.querySelector("#contact-us");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <FooterContainer>
      <FooterContent>
        {/* Company Information */}
        <CompanySection>
          <FooterLogo>
            <img src="/pictures/logo/Logo.png" alt="ANV Enterprise" />
            <CompanyName>ANV Enterprise</CompanyName>
          </FooterLogo>
          <FooterDescription>
            Transforming spaces with innovative interior design solutions. We
            specialize in false ceiling, molding, and complete interior
            renovations that bring your vision to life.
          </FooterDescription>
          <SocialMedia>
            <SocialIcon href="#" aria-label="Facebook">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </SocialIcon>
          </SocialMedia>
        </CompanySection>

        {/* Quick Links */}
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterList>
            <FooterListItem>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink to="/aboutUs">
                <FaInfoCircle /> About Us
              </NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink to="/design/false-ceil">False Ceiling</NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink to="/design/molding">Molding Design</NavLink>
            </FooterListItem>
            {user && (
              <FooterListItem>
                <NavLink to="/my-account/profile">
                  <FaUser /> My Account
                </NavLink>
              </FooterListItem>
            )}
            <FooterListItem>
              <NavLink to="/favortie">
                <FaHeart /> Favorites
              </NavLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        {/* Services */}
        <FooterSection>
          <FooterTitle>Our Services</FooterTitle>
          <FooterList>
            <FooterListItem>Interior Design</FooterListItem>
            <FooterListItem>False Ceiling</FooterListItem>
            <FooterListItem>Molding & Trim</FooterListItem>
            <FooterListItem>
              <button
                onClick={handleConsultationClick}
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  font: "inherit",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                }}
              >
                Consultation
              </button>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        {/* Contact & Newsletter */}
        <FooterSection>
          <FooterTitle>Get In Touch</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>New Delhi, India</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+91 9212233109</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>anventerprises11@gmail.com</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterBottomContent>
          <Copyright>
            © {new Date().getFullYear()} ANV Enterprise. All rights reserved.
          </Copyright>
          <FooterLinks>
            <NavLink
              to="/privacy-policy"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/sitemap"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Sitemap
            </NavLink>
          </FooterLinks>
        </FooterBottomContent>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
