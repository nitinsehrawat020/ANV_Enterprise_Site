import { useForm } from "react-hook-form";
import Logo from "../../component/navbar/Logo";
import {
  LoginSignupContainer as Container,
  LoginContainer,
  FormHeader,
  FormTitle,
  FormSubtitle,
  ModernForm as StyledLoginForm,
  InputGroup,
  ModernInput as StyledInput,
  ModernSubmitButton,
  FormFooter,
  FooterText,
  FooterLink,
  ForgotNavLink,
  LogoContainer,
} from "../../component/LoginAndSignup/StyleLogin";
import { useLogin } from "../../component/LoginAndSignup/useLogin";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { login, isLoading } = useLogin();

  const onSubmit = async ({ email, password }) => {
    login(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        
        <FormHeader>
          <FormTitle style={{ color: "var(--color-orange)" }}>
            Welcome Back!
          </FormTitle>
          <FormSubtitle style={{ color: "var(--color-dimgray)" }}>
            Login to your account
          </FormSubtitle>
        </FormHeader>

        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <StyledInput
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
          </InputGroup>

          <InputGroup>
            <StyledInput
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
          </InputGroup>

          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <ForgotNavLink to="/forgotPassword">Forgot Password?</ForgotNavLink>
          </div>

          <ModernSubmitButton
            type="submit"
            value={isLoading ? "Logging in..." : "Login"}
            disabled={isLoading}
          />
        </StyledLoginForm>

        <FormFooter>
          <FooterText style={{ color: "var(--color-dimgray)" }}>
            Don&apos;t have an account?{" "}
            <FooterLink
              to="/signup"
              style={{ color: "var(--color-orange)" }}
              onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Sign up
            </FooterLink>
          </FooterText>
        </FormFooter>
      </LoginContainer>
    </Container>
  );
}

export default Login;
