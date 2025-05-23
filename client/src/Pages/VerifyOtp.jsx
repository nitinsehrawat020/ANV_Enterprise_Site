import Logo from "../component/navbar/Logo";
import Heading from "../ui/Heading";
import {
  ForgotPasswordContainer,
  LoginContainer,
  LoginSignupContainer,
  StyledInput,
  StyledOtpForm,
} from "../component/LoginAndSignup/StyleLogin";
import { useForm } from "react-hook-form";
import { useVeriftOtp } from "../component/LoginAndSignup/useLogin";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    <LoginSignupContainer>
      <ForgotPasswordContainer>
        <Logo />
        <Heading as="h2">Enter the otp</Heading>

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
            <span>Enter Otp </span>
            <StyledInput
              type="number"
              placeholder="otp"
              hi="login"
              id="otp"
              {...register("otp", { required: "Email is required" })}
            />
          </p>
          <StyledInput
            type="submit"
            value={isLoading ? "Submiting Otp..." : "Submit Otp"}
            disabled={isLoading}
          />
        </StyledOtpForm>

        <p>
          Already have an account? <NavLink to="/login"> Login </NavLink>
        </p>
      </ForgotPasswordContainer>
    </LoginSignupContainer>
  );
}

export default VerifyOtp;
