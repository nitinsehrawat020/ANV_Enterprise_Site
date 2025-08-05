import { useForm } from "react-hook-form";
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
import { useForgotPassword } from "../../component/LoginAndSignup/useLogin";

function ForgotPassword() {
  const { register, handleSubmit, reset } = useForm();
  const { forgotPassword, isLoading } = useForgotPassword();

  const onSubmit = ({ email }) => {
    forgotPassword(
      { email },
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
          <FormTitle>Reset Your Password</FormTitle>
          <FormSubtitle>
            Enter your email address and we&apos;ll send you a verification code
            to reset your password.
          </FormSubtitle>
        </FormHeader>

        <ModernForm onSubmit={handleSubmit(onSubmit)}>
          <InputGroup marginBottom="2rem">
            <ModernLabel htmlFor="email">Email Address</ModernLabel>
            <ModernInput
              type="email"
              placeholder="Enter your email address"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            <HelpText>
              We&apos;ll send a 6-digit verification code to this email address.
            </HelpText>
          </InputGroup>

          <ModernSubmitButton
            type="submit"
            value={isLoading ? "Sending Code..." : "Send Verification Code"}
            disabled={isLoading}
          />
        </ModernForm>

        <FormFooter>
          <FooterText>
            Remember your password? <FooterLink to="/login">Login</FooterLink>
          </FooterText>
          <SecondaryFooterText>
            Don&apos;t have an account?{" "}
            <FooterLink to="/signup">Sign Up</FooterLink>
          </SecondaryFooterText>
        </FormFooter>
      </ModernFormContainer>
    </Container>
  );
}

export default ForgotPassword;
