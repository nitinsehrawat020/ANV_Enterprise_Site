import styled from "styled-components";
import { device } from "../../Styles/Theme";

export const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    var(--color-black) 0%,
    var(--color-dimgray) 100%
  );
  color: var(--color-white);
  padding: 60px 0 20px;
  margin-top: auto;

  @media ${device.tablet} {
    padding: 40px 0 20px;
  }

  @media ${device.mobile} {
    padding: 30px 0 15px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 25px;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CompanySection = styled(FooterSection)`
  @media ${device.mobile} {
    align-items: center;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;

  img {
    height: 50px;
    width: auto;

    @media ${device.mobile} {
      height: 40px;
    }
  }
`;

export const CompanyName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-orange);
  margin: 0;
  font-family: var(--font-poppins);

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-orange);
  margin: 0 0 15px 0;
  font-family: var(--font-poppins);

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const FooterDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-whitesmoke);
  margin: 0;
  max-width: 300px;

  @media ${device.mobile} {
    max-width: 100%;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterListItem = styled.li`
  font-size: 14px;
  color: var(--color-whitesmoke);
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-orange);
    transform: translateX(5px);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-orange);
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--color-whitesmoke);

  svg {
    color: var(--color-orange);
    font-size: 16px;
    flex-shrink: 0;
  }

  @media ${device.mobile} {
    justify-content: center;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media ${device.mobile} {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-dimgray);
  border-radius: 50%;
  color: var(--color-white);
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-orange);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 140, 0, 0.3);
  }
`;

export const FooterBottom = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--color-dimgray);
  text-align: center;

  @media ${device.mobile} {
    margin-top: 30px;
    padding-top: 15px;
  }
`;

export const FooterBottomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: var(--color-whitesmoke);
  margin: 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  @media ${device.mobile} {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FooterLink = styled.a`
  font-size: 14px;
  color: var(--color-whitesmoke);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-orange);
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 15px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid var(--color-dimgray);
  border-radius: 25px;
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--color-orange);
  }

  &::placeholder {
    color: var(--color-dimgray);
  }

  @media ${device.mobile} {
    width: 100%;
    max-width: 300px;
  }
`;

export const NewsletterButton = styled.button`
  padding: 12px 20px;
  background-color: var(--color-orange);
  color: var(--color-white);
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-dimgray);
    transform: translateY(-2px);
  }

  @media ${device.mobile} {
    width: 100%;
    max-width: 200px;
  }
`;
