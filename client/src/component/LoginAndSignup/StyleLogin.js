import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const LoginSignupContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: radial-gradient(
      circle at 20% 10%,
      rgba(255, 175, 15, 0.15) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 90%,
      rgba(255, 175, 15, 0.12) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 40% 60%,
      rgba(255, 255, 255, 0.6) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 60% 30%,
      rgba(255, 255, 255, 0.6) 0%,
      transparent 50%
    ),
    linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 175, 15, 0.04),
        transparent
      ),
      linear-gradient(
        -45deg,
        transparent,
        rgba(255, 175, 15, 0.06),
        transparent
      );
    animation: float 20s ease-in-out infinite;
    z-index: 0;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const SignupContainer = styled.div`
  display: flex;
  width: fit-content;
  min-width: 700px;
  max-width: 900px;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.95);
  padding: 3.5rem 3rem;
  border-radius: 24px;
  gap: 2.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1), 0 12px 30px rgba(0, 0, 0, 0.08),
    0 8px 20px rgba(255, 175, 15, 0.08), inset 0 2px 0 rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(
      125deg,
      var(--color-orange),
      #e6a00e,
      #ffcc80,
      var(--color-orange)
    );
    border-radius: var(--br-32);
    z-index: -1;
    opacity: 0.85;
    animation: borderRotate 8s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 24px;
    z-index: -1;
  }

  @keyframes borderRotate {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 1024px) {
    min-width: 600px;
    padding: 3rem 2.5rem;
  }

  @media ${device.tablet} {
    min-width: 500px;
    padding: 2.5rem 2rem;
    margin: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 25px rgba(0, 0, 0, 0.06),
      0 6px 15px rgba(255, 175, 15, 0.08);
  }

  @media ${device.mobile} {
    min-width: 330px;
    padding: 2rem 1.5rem;
    margin: 0.5rem;
    border-radius: 24px;
    gap: 1.8rem;

    &::before {
      border-radius: var(--br-24);
    }

    &::after {
      border-radius: calc(var(--br-24) - 1px);
    }
  }
`;

export const StyledFrom = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2.2rem;
  background: linear-gradient(145deg, #f8f8f8, #ffffff);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.9);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 5% 10%,
        rgba(255, 175, 15, 0.03) 0%,
        transparent 25%
      ),
      radial-gradient(
        circle at 95% 90%,
        rgba(255, 175, 15, 0.03) 0%,
        transparent 25%
      );
    border-radius: var(--br-24);
    z-index: -1;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 45%;
    min-width: 200px;
    position: relative;

    @media ${device.tablet} {
      width: 100%;
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    position: relative;

    @media ${device.tablet} {
      width: 100%;
    }
  }

  input[type="submit"] {
    width: 100%;
    margin-top: 2rem;
    height: 56px;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  height: 56px;
  padding: 0 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: #fdfdfd;
  border-radius: var(--br-16);
  color: var(--color-black);
  font-size: var(--font-size-16);
  font-family: var(--font-poppins);
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03), inset 0 1px 2px rgba(0, 0, 0, 0.01);

  &:focus {
    outline: none;
    transform: translateY(-2px);
    border: 1px solid var(--color-orange);
    box-shadow: 0 6px 16px rgba(255, 175, 15, 0.15),
      0 3px 10px rgba(0, 0, 0, 0.04);
    background-color: #fff;
  }

  &::placeholder {
    color: var(--color-dimgray);
    font-weight: 400;
  }

  &:hover:not(:focus) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 175, 15, 0.15);
  }

  &:disabled {
    color: var(--color-dimgray);
    background-color: var(--color-whitesmoke);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  ${(props) =>
    props.type === "submit" &&
    `
    background-color: var(--color-orange);
    color: var(--color-white);
    cursor: pointer;
    font-weight: 600;
    border: none;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    box-shadow: 0 4px 16px rgba(255, 175, 15, 0.25);
    max-width: 100%;
    margin-top: 1.5rem;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: all 0.6s ease;
    }
    
    &:hover:not(:disabled) {
      background-color: #e6a00e;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(255, 175, 15, 0.35);
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 12px rgba(255, 175, 15, 0.25);
    }
    
    &:disabled {
      background: var(--color-dimgray);
      transform: none;
      box-shadow: none;
    }
  `}

  ${(props) =>
    props.hi === "login" &&
    `
    margin-bottom: 1rem;
  `}

  @media ${device.tablet} {
    max-width: 280px;
    height: 48px;
    padding: 0 1rem;
    font-size: 0.95rem;
  }

  @media ${device.mobile} {
    max-width: 250px;
    height: 46px;
    padding: 0 0.9rem;
    font-size: 0.9rem;
  }
`;

export const FullWidthWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const AddressInputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const AddressInput = styled(StyledInput)`
  max-width: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  flex: 1;
`;

export const LocationButton = styled.button`
  height: 56px;
  background-color: var(--color-orange);
  color: white;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e69500;
  }

  &:active {
    transform: translateY(1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorMessage = styled.small`
  color: #ff3b30;
  margin-top: 0.3rem;
  font-size: 0.8rem;
  display: block;
`;

export const Label = styled.label`
  color: var(--color-black);
  font-size: var(--font-size-16);
  font-family: var(--font-poppins);
  font-weight: 500;
  margin-bottom: 0.8rem;
  position: relative;
  display: inline-block;
  transition: all 0.2s ease;
  padding-left: 0.8rem;
  border-left: 3px solid var(--color-orange);

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-orange);
    transition: all 0.3s ease;
  }

  &:hover {
    color: var(--color-orange);

    &::after {
      width: 100%;
    }
  }

  @media ${device.mobile} {
    font-size: 0.95rem;
  }
`;

export const LoginContainer = styled.div`
  height: fit-content;
  width: fit-content;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-white);
  padding: 3rem;
  border-radius: var(--br-24);
  gap: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--color-orange);

  @media (max-width: 1024px) {
    min-width: 350px;
    padding: 2.5rem;
  }

  @media ${device.tablet} {
    min-width: 320px;
    padding: 2rem;
    margin: 1rem;
  }

  @media ${device.mobile} {
    min-width: 280px;
    padding: 1.5rem;
    margin: 0.5rem;
  }
`;

export const ForgotNavLink = styled(NavLink)`
  display: block;
  text-align: right;
  color: var(--color-orange);
  text-decoration: none;
  font-size: var(--font-size-16);
  transition: all 0.3s ease;

  &:hover {
    color: #e6a00e;
    text-decoration: underline;
  }

  @media ${device.mobile} {
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;

  p {
    color: var(--color-dimgray);
    font-size: var(--font-size-16);
    margin: 0;
    width: 100%;
    max-width: 300px;

    @media ${device.tablet} {
      max-width: 280px;
    }

    @media ${device.mobile} {
      max-width: 250px;
      font-size: 0.9rem;
    }
  }
`;

export const StyledOtpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 1rem;
  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border: 2px solid var(--color-background-400);
    border-radius: 5px;
  }
  span {
    width: 150px;
    text-align: center;
  }
  input {
    color: var(--color-white-50);
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    p {
      flex-direction: column;
      gap: 0.8rem;
      justify-content: start;
      align-items: start;
      padding: 0.6rem;
    }
    span {
      text-align: start;
    }
  }
`;

export const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-800);
  padding: 5rem 1rem;
  border-radius: var(--br-l);
  gap: 0.5rem;
  @media (max-width: 1024px) {
    border-radius: var(--br-l) var(--br-l);
  }
  @media ${device.tablet} {
    padding: 4rem 1rem;
    width: 400px;

    h2 {
      font-size: 1.4rem;
      text-align: center;
    }
  }
  @media ${device.mobile} {
    width: 300px;
    padding: 2rem;

    input {
      width: 150px;
    }
  }
`;

export const StyledForgotPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 1rem;
  p {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }

  input {
    color: var(--color-white-50);
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    width: 350px;
  }
`;

export const EmailLabel = styled.label`
  color: var(--color-white-500);

  align-self: flex-start;

  font-size: 1rem;
  font-family: var(--font-roboto);
  padding: 0.5rem;
`;

// Enhanced styled components for modern authentication forms
export const ModernFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(255, 175, 15, 0.12),
    0 2px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const FormTitle = styled.h2`
  color: #333;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

export const FormSubtitle = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

export const ModernForm = styled.form`
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: ${(props) => props.marginBottom || "1.5rem"};
`;

export const ModernLabel = styled.label`
  color: #333;
  padding-left: 0.8rem;
  display: block;
  margin-bottom: 0.8rem;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const ModernInput = styled(StyledInput)`
  max-width: 100%;
  border-radius: 12px;
  background-color: #ffffff;
  color: #555;
  border: 1px solid
    ${(props) => (props.hasError ? "#e53935" : "rgba(0, 0, 0, 0.1)")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1rem 1.2rem;
  font-size: ${(props) => props.fontSize || "1rem"};
  letter-spacing: ${(props) => props.letterSpacing || "normal"};
  text-align: ${(props) => props.textAlign || "left"};

  &:focus {
    border-color: var(--color-orange, #ffaf0f);
    box-shadow: 0 0 0 3px rgba(255, 175, 15, 0.1);
  }
`;

export const ModernErrorMessage = styled.div`
  color: #e53935;
  font-size: 0.8rem;
  padding-left: 0.8rem;
  margin-top: 0.4rem;
`;

export const HelpText = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  line-height: 1.4;
`;

export const PasswordStrengthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0.5rem;
  padding-left: 0.8rem;
`;

export const StrengthBar = styled.div`
  flex: 1;
  display: flex;
  gap: 4px;
  height: 4px;
`;

export const StrengthBarItem = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background-color: ${(props) => {
    if (props.index < props.strength) {
      switch (props.index) {
        case 0:
          return "#ff3b30";
        case 1:
          return "#ff9500";
        case 2:
          return "#ffcc00";
        case 3:
          return "#34c759";
        default:
          return "#e0e0e0";
      }
    }
    return "#e0e0e0";
  }};
`;

export const StrengthText = styled.small`
  font-size: 0.75rem;
  color: #666;
  width: 90px;
  text-align: right;
  font-weight: 500;
`;

export const PasswordRequirements = styled.div`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  line-height: 1.4;

  ul {
    margin: 0.3rem 0;
    padding-left: 1.2rem;
  }

  li {
    color: ${(props) => (props.isValid ? "#34c759" : "#666")};
    margin-bottom: 0.2rem;
  }
`;

export const RequirementItem = styled.li`
  color: ${(props) => (props.isValid ? "#34c759" : "#666")};
  margin-bottom: 0.2rem;
`;

export const ModernSubmitButton = styled(StyledInput)`
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  background-color: ${(props) =>
    props.disabled ? "#ccc" : "var(--color-orange, #ffaf0f)"};
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0 4px 16px rgba(255, 175, 15, 0.25)"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #e6a00e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 175, 15, 0.3);
  }
`;

export const FormFooter = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

export const FooterLink = styled(NavLink)`
  color: var(--color-orange, #ffaf0f);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const SecondaryFooterText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #888;
`;

export const WeakPasswordMessage = styled.div`
  text-align: center;
  margin-top: 0.8rem;
  font-size: 0.85rem;
  color: #ff9500;
  font-weight: 500;
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SignupHeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const SignupTitle = styled.h1`
  color: var(--color-black);
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(255, 175, 15, 0.2);
  background-color: rgba(255, 175, 15, 0.05);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 175, 15, 0.1);
`;

export const SignupSubtitle = styled.h4`
  color: var(--color-dimgray);
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 1.1rem;
`;

export const SignupDivider = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, var(--color-orange), #e6a00e);
  margin: 0 auto;
  border-radius: 2px;
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
  padding-left: 1rem;
`;

export const CheckboxInput = styled.input`
  margin-right: 0.8rem;
  margin-top: 0.2rem;
  width: 16px;
  height: 16px;
  accent-color: var(--color-orange);
`;

export const CheckboxLabel = styled.label`
  font-size: 0.85rem;
  color: var(--color-dimgray);
  line-height: 1.4;
`;

export const TermsLink = styled(NavLink)`
  color: var(--color-orange);
  text-decoration: none;
  font-weight: 500;
`;

export const SignupFooterContainer = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  padding: 1rem;
  border-top: 1px solid rgba(255, 175, 15, 0.2);
`;

export const SignupFooterText = styled.p`
  color: var(--color-dimgray);
  text-align: center;
  margin: 0;
  font-size: 0.95rem;
`;

export const SignupFooterLink = styled(NavLink)`
  color: var(--color-black);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
