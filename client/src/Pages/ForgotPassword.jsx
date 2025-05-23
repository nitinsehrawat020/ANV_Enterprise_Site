import Logo from "../component/navbar/Logo";
import Heading from "../ui/Heading";
import {
  EmailLabel,
  ForgotPasswordContainer,
  LoginSignupContainer,
  StyledForgotPasswordForm,
  StyledInput,
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
      <ForgotPasswordContainer>
        <Logo />
        <Heading as="h2">Forgot Your Password?</Heading>

        <StyledForgotPasswordForm onSubmit={handleSubmit(onSubmit)} type="fp">
          <p>
            <EmailLabel htmlFor="email">Enter Email</EmailLabel>
            <StyledInput
              type="email"
              placeholder="Email"
              hi="login"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
          </p>
          <StyledInput
            type="submit"
            value={isLoading ? "Sending Otp..." : "Send Otp"}
            disabled={isLoading}
          />
        </StyledForgotPasswordForm>

        <p>
          Already have an account? <NavLink to="/login"> Login </NavLink>
        </p>
      </ForgotPasswordContainer>
    </LoginSignupContainer>
  );
}

export default ForgotPassword;
