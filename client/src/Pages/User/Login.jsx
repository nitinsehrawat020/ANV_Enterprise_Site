import Logo from "../../component/navbar/Logo";
import Heading from "../../ui/Heading";
import {
  ForgotNavLink,
  LoginContainer,
  LoginSignupContainer,
  StyledInput,
  StyledLoginForm,
} from "../../component/LoginAndSignup/StyleLogin";
import { useForm } from "react-hook-form";
import { useLogin } from "../../component/LoginAndSignup/useLogin";
import { NavLink } from "react-router-dom";

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
    <LoginSignupContainer>
      <LoginContainer>
        <Logo />
        <Heading
          as="h3"
          style={{
            color: "var(--color-orange)",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          Welcome Back!
        </Heading>
        <Heading
          as="h4"
          style={{
            color: "var(--color-dimgray)",
            marginBottom: "1rem",
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          Login to your account
        </Heading>

        <StyledLoginForm onSubmit={handleSubmit(onSubmit)} type="fp">
          <StyledInput
            type="email"
            placeholder="Enter your email"
            hi="login"
            {...register("email", { required: "Email is required" })}
          />

          <StyledInput
            type="password"
            placeholder="Enter your password"
            hi="login"
            {...register("password", { required: "Password is required" })}
          />

          <p>
            <ForgotNavLink to="/forgotPassword">Forgot Password?</ForgotNavLink>
          </p>

          <StyledInput
            type="submit"
            value={isLoading ? "Logging in..." : "Login"}
            disabled={isLoading}
          />
        </StyledLoginForm>

        <p
          style={{
            color: "var(--color-dimgray)",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          Don&apos;t have an account?{" "}
          <NavLink
            to="/signup"
            style={{
              color: "var(--color-orange)",
              textDecoration: "none",
              fontWeight: "600",
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Sign up
          </NavLink>
        </p>
      </LoginContainer>
    </LoginSignupContainer>
  );
}

export default Login;
