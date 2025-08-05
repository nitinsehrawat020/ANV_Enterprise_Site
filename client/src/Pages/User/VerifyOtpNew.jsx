import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../component/navbar/Logo";
import {
  LoginSignupContainer as Container,
  ModernFormContainer,
  FormHeader,
  FormTitle,
  FormSubtitle,
  ModernForm,
  InputGroup,
  ModernLabel,
  ModernInput,
  HelpText,
  ModernSubmitButton,
  FormFooter,
  FooterText,
  FooterLink,
  SecondaryFooterText,
  LogoContainer,
} from "../../component/LoginAndSignup/StyleLogin";
import { useVeriftOtp } from "../../component/LoginAndSignup/useLogin";

function VerifyOtp() {
  const location = useLocation();
  const email = location?.state || "";
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/forgotPassword");
    }
    return;
  }, [email, navigate]);

  const { register, handleSubmit, reset } = useForm();
  const { verifyOtp, isLoading } = useVeriftOtp();

  const onSubmit = ({ email, otp }) => {
    verifyOtp(
      { email, otp },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <Container>
      <ModernFormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <FormHeader>
          <FormTitle>Verify Your Email</FormTitle>
        </FormHeader>

        <ModernForm onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <ModernLabel htmlFor="email">Email Address</ModernLabel>
            <ModernInput
              type="email"
              placeholder="Email"
              id="email"
              disabled
              value={email}
              {...register("email")}
            />
          </InputGroup>

          <InputGroup marginBottom="2rem">
            <ModernLabel htmlFor="otp">Enter Verification Code</ModernLabel>
            <ModernInput
              type="number"
              placeholder="Enter the 6-digit code sent to your email"
              id="otp"
              fontSize="1.1rem"
              letterSpacing="0.1rem"
              textAlign="center"
              {...register("otp", { required: "OTP is required" })}
            />
            <HelpText>
              Please check your email inbox and enter the 6-digit verification
              code.
            </HelpText>
          </InputGroup>

          <ModernSubmitButton
            type="submit"
            value={isLoading ? "Verifying..." : "Verify Code"}
            disabled={isLoading}
          />
        </ModernForm>

        <FormFooter>
          <FooterText>
            Already have an account? <FooterLink to="/login">Login</FooterLink>
          </FooterText>
          <SecondaryFooterText>
            Didn&apos;t receive the code?{" "}
            <FooterLink to="/forgotPassword">Resend Code</FooterLink>
          </SecondaryFooterText>
        </FormFooter>
      </ModernFormContainer>
    </Container>
  );
}

export default VerifyOtp;
