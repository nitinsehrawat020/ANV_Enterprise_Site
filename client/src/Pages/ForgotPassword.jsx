import Logo from "../component/navbar/Logo";
import Heading from "../ui/Heading";
import {
  EmailLabel,
  Label,
  LoginContainer,
  LoginSignupContainer,
  StyledInput,
  StyledLoginForm,
} from "../component/LoginAndSignup/StyleLogin";
import { useForm } from "react-hook-form";
import { useForgotPassword } from "../component/LoginAndSignup/useLogin";
import { NavLink } from "react-router-dom";

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
    <LoginSignupContainer>
      <LoginContainer>
        <Logo />
        <Heading as="h2">Forgot Your Password?</Heading>

        <StyledLoginForm onSubmit={handleSubmit(onSubmit)} type="fp">
          <EmailLabel htmlFor="email">Enter the email</EmailLabel>
          <StyledInput
            type="email"
            placeholder="Email"
            hi="login"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          <StyledInput
            type="submit"
            value={isLoading ? "Logging in..." : "Login"}
            disabled={isLoading}
          />
        </StyledLoginForm>

        <p>
          Already have an account? <NavLink to="/login"> Login </NavLink>
        </p>
      </LoginContainer>
    </LoginSignupContainer>
  );
}

export default ForgotPassword;
