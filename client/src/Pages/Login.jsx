import Logo from "../component/navbar/Logo";
import Heading from "../ui/Heading";
import {
  LoginContainer,
  LoginSignupContainer,
  StyledFrom,
  StyledInput,
  StyledLoginForm,
} from "../component/LoginAndSignup/StyleLogin";
import { useForm } from "react-hook-form";
import { useLogin } from "../component/LoginAndSignup/useLogin";
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
        <Heading as="h2">Welcome Back!</Heading>
        <Heading as="h3">Login to your account</Heading>

        <StyledLoginForm onSubmit={handleSubmit(onSubmit)} type="fp">
          <StyledInput
            type="email"
            placeholder="Email"
            hi="login"
            {...register("email", { required: "Email is required" })}
          />

          <StyledInput
            type="password"
            placeholder="Password"
            hi="login"
            {...register("password", { required: "Password is required" })}
          />

          <p>
            <NavLink to="/forgotPassword"> Forgot Password?</NavLink>{" "}
          </p>
          <StyledInput
            type="submit"
            value={isLoading ? "Logging in..." : "Login"}
            disabled={isLoading}
          />
        </StyledLoginForm>

        <p>
          Don&apos;t have an account? <NavLink to="/signup"> Sign up</NavLink>
        </p>
      </LoginContainer>
    </LoginSignupContainer>
  );
}

export default Login;
