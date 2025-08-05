import { useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import { Main } from "./index";

const TestContainer = styled(Main)`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TestTitle = styled.h2`
  color: var(--color-text-900);
  margin-bottom: 1rem;
`;

const TestDescription = styled.p`
  color: var(--color-text-600);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

function ErrorTestComponent() {
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [testClickCount, setTestClickCount] = useState(0);

  // This will trigger the error boundary
  if (shouldThrowError) {
    throw new Error(
      "🚨 Test Error: This is a demonstration error to test the Error Boundary functionality!"
    );
  }

  const triggerError = () => {
    console.log("🔥 Triggering sync error...");
    setShouldThrowError(true);
  };

  const triggerAsyncError = () => {
    console.log("⚡ Starting async error countdown...");
    setCountdown(3);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        console.log("⏱️ Countdown:", prev - 1);
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Simulate an async error (this won't be caught by error boundary)
          setTimeout(() => {
            console.error(
              "🚨 Async Error: This error won't be caught by Error Boundary!"
            );
            alert(
              "Async Error thrown! Check console - this won't be caught by Error Boundary."
            );
          }, 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <TestContainer>
      <TestTitle>🧪 Error Boundary Test</TestTitle>
      <TestDescription>
        This component is for testing the Error Boundary functionality.
        <br />
        <br />
        <strong>Sync Error:</strong> Will be caught by Error Boundary and show
        the error page.
        <br />
        <strong>Async Error:</strong> Won&apos;t be caught by Error Boundary
        (React limitation) - will show an alert instead.
        <br />
        <br />
        <em>Note: This page is only available in development mode.</em>
      </TestDescription>

      <ButtonGroup>
        <Button
          variation="unfilled"
          onClick={() => {
            console.log("✅ Test button clicked! Count:", testClickCount + 1);
            setTestClickCount((prev) => prev + 1);
          }}
        >
          🧪 Test Button (Clicked: {testClickCount})
        </Button>
        <Button variation="filled" onClick={triggerError}>
          🔥 Trigger Sync Error (Will be caught)
        </Button>
        {countdown > 0 ? (
          <Button
            variation="unfilled"
            style={{ opacity: 0.6, cursor: "not-allowed" }}
          >
            ⏱️ Async Error in {countdown}s
          </Button>
        ) : (
          <Button variation="unfilled" onClick={triggerAsyncError}>
            ⚡ Trigger Async Error (Won&apos;t be caught)
          </Button>
        )}
      </ButtonGroup>
    </TestContainer>
  );
}

export default ErrorTestComponent;
