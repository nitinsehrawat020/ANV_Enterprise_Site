import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../component/navbar/Logo";
import {
  LoginSignupContainer as Container,
  ModernFormContainer,
  FormHeader,
  FormTitle,
  ModernForm,
  InputGroup,
  ModernLabel,
  ModernInput,
  ModernErrorMessage,
  PasswordStrengthContainer,
  StrengthBar,
  StrengthBarItem,
  StrengthText,
  PasswordRequirements,
  RequirementItem,
  ModernSubmitButton,
  FormFooter,
  FooterText,
  FooterLink,
  WeakPasswordMessage,
  LogoContainer,
} from "../../component/LoginAndSignup/StyleLogin";
import { useResetPassword } from "../../component/LoginAndSignup/useLogin";

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const { resetPassword, isLoading } = useResetPassword();

  // Password strength functionality
  const [passwordStrength, setPasswordStrength] = useState(0);
  const password = watch("newPassword", "");

  useEffect(() => {
    // Password strength calculator
    const calculateStrength = (pwd) => {
      if (!pwd) return 0;
      let strength = 0;
      if (pwd.length >= 8) strength += 1;
      if (pwd.match(/[A-Z]/)) strength += 1;
      if (pwd.match(/[0-9]/)) strength += 1;
      if (pwd.match(/[^A-Za-z0-9]/)) strength += 1;
      return strength;
    };

    setPasswordStrength(calculateStrength(password));
  }, [password]);

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

  // Helper functions
  const getPasswordStrengthText = (strength) => {
    const texts = ["Very weak", "Weak", "Medium", "Strong", "Very strong"];
    return texts[strength] || "Very weak";
  };

  const checkPasswordRequirement = (password, type) => {
    switch (type) {
      case "length":
        return password.length >= 8;
      case "uppercase":
        return /[A-Z]/.test(password);
      case "number":
        return /[0-9]/.test(password);
      case "special":
        return /[^A-Za-z0-9]/.test(password);
      default:
        return false;
    }
  };

  const isPasswordTooWeak = passwordStrength < 2 && password;

  return (
    <Container>
      <ModernFormContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <FormHeader>
          <FormTitle>Change Your Password</FormTitle>
        </FormHeader>

        <ModernForm onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <ModernLabel htmlFor="email">Email</ModernLabel>
            <ModernInput
              type="email"
              placeholder="Email"
              id="email"
              disabled
              value={email}
              {...register("email")}
            />
          </InputGroup>

          <InputGroup>
            <ModernLabel htmlFor="password">New Password</ModernLabel>
            <ModernInput
              type="password"
              placeholder="Enter new password"
              id="password"
              hasError={errors.newPassword}
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: {
                  hasUpperCase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain at least one uppercase letter",
                  hasNumber: (value) =>
                    /[0-9]/.test(value) ||
                    "Password must contain at least one number",
                  hasSpecialChar: (value) =>
                    /[^A-Za-z0-9]/.test(value) ||
                    "Password must contain at least one special character",
                },
              })}
            />

            {password && (
              <PasswordStrengthContainer>
                <StrengthBar>
                  {[...Array(4)].map((_, i) => (
                    <StrengthBarItem
                      key={i}
                      index={i}
                      strength={passwordStrength}
                    />
                  ))}
                </StrengthBar>
                <StrengthText>
                  {getPasswordStrengthText(passwordStrength)}
                </StrengthText>
              </PasswordStrengthContainer>
            )}

            <PasswordRequirements>
              Password must contain:
              <ul>
                <RequirementItem
                  isValid={checkPasswordRequirement(password, "length")}
                >
                  At least 8 characters
                </RequirementItem>
                <RequirementItem
                  isValid={checkPasswordRequirement(password, "uppercase")}
                >
                  One uppercase letter
                </RequirementItem>
                <RequirementItem
                  isValid={checkPasswordRequirement(password, "number")}
                >
                  One number
                </RequirementItem>
                <RequirementItem
                  isValid={checkPasswordRequirement(password, "special")}
                >
                  One special character
                </RequirementItem>
              </ul>
            </PasswordRequirements>

            {errors.newPassword && (
              <ModernErrorMessage>
                {errors.newPassword.message}
              </ModernErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <ModernLabel htmlFor="re-password">Confirm Password</ModernLabel>
            <ModernInput
              type="password"
              placeholder="Re-enter your new password"
              id="re-password"
              hasError={errors.confirmedNewPassword}
              {...register("confirmedNewPassword", {
                required: "Please confirm your password",
                validate: (value, formValues) =>
                  value === formValues.newPassword || "Passwords don't match",
              })}
            />
            {errors.confirmedNewPassword && (
              <ModernErrorMessage>
                {errors.confirmedNewPassword.message}
              </ModernErrorMessage>
            )}
          </InputGroup>

          <ModernSubmitButton
            type="submit"
            value={
              isLoading
                ? "Changing Password..."
                : isPasswordTooWeak
                ? "Password Too Weak"
                : "Change Password"
            }
            disabled={isLoading || isPasswordTooWeak}
          />

          {isPasswordTooWeak && (
            <WeakPasswordMessage>
              Please create a stronger password to continue
            </WeakPasswordMessage>
          )}
        </ModernForm>

        <FormFooter>
          <FooterText>
            Already have an account? <FooterLink to="/login">Login</FooterLink>
          </FooterText>
        </FormFooter>
      </ModernFormContainer>
    </Container>
  );
}

export default ChangePassword;
