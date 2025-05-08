import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import Logo from "../navbar/Logo";
import { Label, SignupContainer, StyledFrom, StyledInput } from "./StyleLogin";

function Signup({ onFlip, active }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.repassword) {
      alert("Password not match");
      return;
    }

    const { firstName, lastName, mobile, email, password, addresss } = data;

    const registerData = {
      name: `${firstName} ${lastName}`,
      mobile,
      email,
      password,
      addresss,
    };

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
        credentials: "include",
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Signup failed");
      }
      console.log("Signup successful:", result);
      alert("Signup successful");
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message || "An error occurred during signup");
    }
  };
  return (
    <SignupContainer active={active}>
      <Logo />
      <Heading as="h2">Welcome!</Heading>
      <Heading as="h5">Enter details to become a part of us </Heading>
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
            {...register("mobile")}
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
            {...register("adress_details")}
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
          <Label htmlFor="ReenterPassword">Re enter Password</Label>
          <StyledInput
            type="password"
            placeholder="Re-Password"
            id="ReenterPassword"
            {...register("repassword")}
          />
        </p>
        <StyledInput type="submit" value="Sign up" />
      </StyledFrom>
      <p>
        Already have an account? <span onClick={() => onFlip(true)}>Login</span>
      </p>
    </SignupContainer>
  );
}

export default Signup;
