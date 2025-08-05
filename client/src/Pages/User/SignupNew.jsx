import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Logo from "../../component/navbar/Logo";
import {
  LoginSignupContainer as Container,
  SignupContainer,
  SignupHeaderContainer,
  SignupTitle,
  SignupSubtitle,
  SignupDivider,
  ModernForm as StyledFrom,
  InputGroup,
  ModernLabel as Label,
  ModernInput as StyledInput,
  ModernErrorMessage as ErrorMessage,
  PasswordStrengthContainer,
  StrengthBar,
  StrengthBarItem,
  StrengthText,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  TermsLink,
  ModernSubmitButton,
  SignupFooterContainer,
  SignupFooterText,
  SignupFooterLink,
  LogoContainer,
  AddressInputGroup,
  AddressInput,
  LocationButton,
} from "../../component/LoginAndSignup/StyleLogin";
import { useSignup } from "../../component/LoginAndSignup/useSignup";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { registerUser, isLoading } = useSignup();
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const password = watch("password", "");

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

  const onSubmit = async (data) => {
    registerUser(data, {
      onSettle: () => {
        reset();
      },
    });
  };

  const getPasswordStrengthText = (strength) => {
    const texts = ["Very weak", "Weak", "Medium", "Strong", "Very strong"];
    return texts[strength] || "Very weak";
  };

  const handleLocationClick = () => {
    setIsLoadingLocation(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
            );
            const data = await response.json();

            if (data.display_name) {
              const addressInput = document.getElementById("address");
              if (addressInput) {
                addressInput.value = data.display_name;
                addressInput.dispatchEvent(
                  new Event("change", { bubbles: true })
                );
              }
            }
          } catch (error) {
            console.error("Error fetching address:", error);
            alert("Unable to fetch address. Please enter manually.");
          } finally {
            setIsLoadingLocation(false);
          }
        },
        () => {
          alert("Location access denied. Please enter address manually.");
          setIsLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setIsLoadingLocation(false);
    }
  };

  return (
    <Container>
      <SignupContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <SignupHeaderContainer>
          <SignupTitle>Join Our Community</SignupTitle>
          <SignupSubtitle>
            Create your account and start your journey with us
          </SignupSubtitle>
          <SignupDivider />
        </SignupHeaderContainer>

        <StyledFrom onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label htmlFor="firstName">First Name</Label>
            <StyledInput
              type="text"
              placeholder="e.g., John"
              id="firstName"
              hasError={errors.firstName}
              {...register("firstName", { required: true, minLength: 2 })}
            />
            {errors.firstName && (
              <ErrorMessage>First name is required</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <StyledInput
              type="text"
              placeholder="e.g., Smith"
              id="lastName"
              hasError={errors.lastName}
              {...register("lastName", { required: true, minLength: 2 })}
            />
            {errors.lastName && (
              <ErrorMessage>Last name is required</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <StyledInput
              type="tel"
              placeholder="e.g., +1 (555) 123-4567"
              id="phoneNumber"
              hasError={errors.mobileNumber}
              {...register("mobileNumber", { required: true })}
            />
            {errors.mobileNumber && (
              <ErrorMessage>Phone number is required</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <StyledInput
              type="email"
              placeholder="e.g., john.smith@email.com"
              id="email"
              hasError={errors.email}
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            {errors.email && (
              <ErrorMessage>Valid email is required</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup
            style={{
              position: "relative",
              width: "calc(90% + 2.2rem)",
              marginRight: 0,
              flex: "0 0 calc(90% + 2.2rem)",
            }}
          >
            <Label htmlFor="address">Home Address</Label>
            <AddressInputGroup>
              <AddressInput
                type="text"
                placeholder="e.g., 123 Main Street, City, State"
                id="address"
                hasError={errors.addressDetails}
                {...register("addressDetails", { required: true })}
              />
              <LocationButton
                type="button"
                onClick={handleLocationClick}
                disabled={isLoadingLocation}
              >
                {isLoadingLocation ? "📍" : "📍"}
              </LocationButton>
            </AddressInputGroup>
            {errors.addressDetails && (
              <ErrorMessage>Address is required</ErrorMessage>
            )}
          </InputGroup>

          <div
            style={{
              width: "100%",
              flexBasis: "100%",
              height: "0",
              margin: "0",
            }}
          />

          <InputGroup>
            <Label htmlFor="password">Create Password</Label>
            <StyledInput
              type="password"
              placeholder="Choose a strong password"
              id="password"
              hasError={errors.password}
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
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

            {errors.password && (
              <ErrorMessage>
                {errors.password.message || "Password is required"}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="ReenterPassword">Confirm Password</Label>
            <StyledInput
              type="password"
              placeholder="Re-enter your password"
              id="ReenterPassword"
              hasError={errors.confirmedPassword}
              {...register("confirmedPassword", {
                required: true,
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords don't match",
              })}
            />
            {errors.confirmedPassword && (
              <ErrorMessage>
                {errors.confirmedPassword.message ||
                  "Please confirm your password"}
              </ErrorMessage>
            )}
          </InputGroup>

          <CheckboxContainer>
            <CheckboxInput
              type="checkbox"
              id="terms"
              {...register("terms", { required: true })}
            />
            <CheckboxLabel htmlFor="terms">
              I agree to the{" "}
              <TermsLink to="/terms-of-service">Terms of Service</TermsLink> and{" "}
              <TermsLink to="/privacy-policy">Privacy Policy</TermsLink>
              {errors.terms && (
                <ErrorMessage>You must agree to the terms</ErrorMessage>
              )}
            </CheckboxLabel>
          </CheckboxContainer>

          <ModernSubmitButton
            type="submit"
            value={isLoading ? "Creating Account..." : "Create Account"}
            disabled={isLoading}
          />
        </StyledFrom>

        <SignupFooterContainer>
          <SignupFooterText>
            Already have an account?{" "}
            <SignupFooterLink to="/login">Sign in here</SignupFooterLink>
          </SignupFooterText>
        </SignupFooterContainer>
      </SignupContainer>
    </Container>
  );
}

export default Signup;
