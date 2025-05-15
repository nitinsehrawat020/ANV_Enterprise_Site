import Logo from "../component/navbar/Logo";
import Heading from "../ui/Heading";
import {
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
  console.log(email);

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
      <LoginContainer>
        <Logo />
        <Heading as="h2">Enter the otp</Heading>

        <StyledOtpForm onSubmit={handleSubmit(onSubmit)}>
          <p>
            <span>Reseting Password for :- </span>
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
            <span>Enter the otp :- </span>
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
            value={isLoading ? "Logging in..." : "Submit Otp"}
            disabled={isLoading}
          />
        </StyledOtpForm>

        <p>
          Already have an account? <NavLink to="/login"> Login </NavLink>
        </p>
      </LoginContainer>
    </LoginSignupContainer>
  );
}

export default VerifyOtp;
