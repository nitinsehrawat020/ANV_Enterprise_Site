import { useState } from "react";
import Logo from "../navbar/Logo";
import Heading from "../../ui/Heading";
import { LoginContainer, StyledFrom, StyledInput } from "./StyleLogin";
import { useForm } from "react-hook-form";

function Login({ onFlip, active }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include", // This ensures cookies are sent with the request
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      console.log("Login successful:", result);

      // Handle successful login here
      // For example, redirect to dashboard or set user state
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer active={active}>
      <Logo />
      <Heading as="h2">Welcome Back!</Heading>
      <Heading as="h3">Login to your account</Heading>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <StyledFrom onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="email"
          placeholder="Email"
          hi="login"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p style={{ color: "red", margin: "0" }}>{errors.email.message}</p>
        )}

        <StyledInput
          type="password"
          placeholder="Password"
          hi="login"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p style={{ color: "red", margin: "0" }}>{errors.password.message}</p>
        )}

        <StyledInput
          type="submit"
          value={isLoading ? "Logging in..." : "Login"}
          disabled={isLoading}
        />
      </StyledFrom>

      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => onFlip(false)}>Sign up</span>
      </p>
    </LoginContainer>
  );
}

export default Login;
