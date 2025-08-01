import Logo from "../../component/navbar/Logo";
import Heading from "../../ui/Heading";
import {
  LoginContainer as ChangePasswordConatiner,
  LoginSignupContainer as Container,
  ForgotPasswordContainer,
  StyledInput,
  StyledOtpForm,
} from "../../component/LoginAndSignup/StyleLogin";
import { useForm } from "react-hook-form";
import {
  useResetPassword,
  useVeriftOtp,
} from "../../component/LoginAndSignup/useLogin";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ChangePassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location?.state?.email;
  const res = location?.state?.data;

  useEffect(() => {
    if (!email || !res) {
      navigate("/verifyOtp", { state: email });
    }
  }, [email, res, navigate]);

  const { register, handleSubmit, reset } = useForm();

  const { resetPassword, isLoading } = useResetPassword();

  const onSubmit = ({ email, newPassword, confirmedNewPassword }) => {
    resetPassword(
      { email, newPassword, confirmedNewPassword },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <Container>
      <ForgotPasswordContainer>
        <Logo />
        <Heading as="h2">Change Password</Heading>

        <StyledOtpForm onSubmit={handleSubmit(onSubmit)}>
          <p>
            <span>Email </span>
            <StyledInput
              type="email"
              placeholder="Email"
              hi="login"
              id="email"
              disabled
              value={email}
              {...register("email")}
            />
          </p>
          <p>
            <span> New password </span>
            <StyledInput
              type="password"
              placeholder="password"
              hi="login"
              id="password"
              {...register("newPassword")}
            />
          </p>
          <p>
            <span>Re-Enter password </span>
            <StyledInput
              type="password"
              placeholder="re-password"
              hi="login"
              id="re-password"
              {...register("confirmedNewPassword")}
            />
          </p>
          <StyledInput
            type="submit"
            value={isLoading ? "submiting..." : "submit"}
            disabled={isLoading}
          />
        </StyledOtpForm>

        <p>
          Already have an account? <NavLink to="/login"> Login </NavLink>
        </p>
      </ForgotPasswordContainer>
    </Container>
  );
}

export default ChangePassword;
