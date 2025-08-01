import { useForm } from "react-hook-form";
import {
  Label,
  LoginSignupContainer,
  SignupContainer,
  StyledFrom,
  StyledInput,
} from "../../component/LoginAndSignup/StyleLogin";
import Heading from "../../ui/Heading";
import Logo from "../../component/navbar/Logo";
import { NavLink } from "react-router-dom";

import { useSignup } from "../../component/LoginAndSignup/useSignup";

function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const { registerUser, isLoading } = useSignup();

  const onSubmit = async (data) => {
    registerUser(data),
      {
        onSettle: () => {
          reset();
        },
      };
  };
  return (
    <LoginSignupContainer>
      <SignupContainer>
        <Logo />
        <Heading as="h2">Welcome!</Heading>
        <Heading as="h4">Enter details to become a part of us </Heading>
        <StyledFrom onSubmit={handleSubmit(onSubmit)}>
          <p>
            <Label htmlFor="firstName">First Name</Label>
            <StyledInput
              type="text"
              placeholder="First Name"
              id="firstName"
              {...register("firstName")}
            />
          </p>
          <p>
            <Label htmlFor="lastName">Last Name</Label>
            <StyledInput
              type="text"
              placeholder="Last Name"
              id="lastName"
              {...register("lastName")}
            />
          </p>
          <p>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <StyledInput
              type="number"
              placeholder="Phone Number"
              id="phoneNumber"
              {...register("mobileNumber")}
            />
          </p>
          <p>
            <Label htmlFor="email">Email</Label>
            <StyledInput
              type="email"
              placeholder="Email"
              id="email"
              {...register("email")}
            />
          </p>
          <span>
            <Label htmlFor="address">Address</Label>
            <StyledInput
              type="text"
              placeholder="Address"
              id="address"
              {...register("addressDetails")}
            />
          </span>

          <p>
            <Label htmlFor="password">Password</Label>
            <StyledInput
              type="password"
              placeholder="Password"
              id="password"
              {...register("password")}
            />
          </p>
          <p>
            <Label htmlFor="ReenterPassword">Re-enter Password</Label>
            <StyledInput
              type="password"
              placeholder="Re-Password"
              id="ReenterPassword"
              {...register("confirmedPassword")}
            />
          </p>
          <StyledInput type="submit" value="Sign up" disabled={isLoading} />
        </StyledFrom>
        <p>
          Already have an account? <NavLink to="/login"> Login </NavLink>
        </p>
      </SignupContainer>
    </LoginSignupContainer>
  );
}

export default Signup;
