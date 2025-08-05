import React from "react";
import styled from "styled-components";
import { BiError } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import Button from "./Button";
import Heading from "./Heading";
import { logErrorToService } from "../util/errorUtils";

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--color-background-100) 0%,
    var(--color-background-200) 100%
  );
  padding: 2rem;
`;

const ErrorContent = styled.div`
  max-width: 600px;
  text-align: center;
  background: var(--color-white-100);
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border-100);
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: var(--color-red-700);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ErrorTitle = styled(Heading)`
  color: var(--color-text-900);
  margin-bottom: 1rem;
`;

const ErrorDescription = styled.p`
  color: var(--color-text-600);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ErrorDetails = styled.details`
  text-align: left;
  margin: 2rem 0;
  background: var(--color-background-100);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--color-border-200);
`;

const ErrorSummary = styled.summary`
  cursor: pointer;
  font-weight: 600;
  color: var(--color-text-700);
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--color-primary-600);
  }
`;

const ErrorStack = styled.pre`
  background: var(--color-background-200);
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--color-text-800);
  border: 1px solid var(--color-border-200);
  margin-top: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error to console for development
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    // Log to external service
    logErrorToService(error, errorInfo, {
      component: "ErrorBoundary",
      timestamp: new Date().toISOString(),
    });
  }

  handleRefresh = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorContent>
            <ErrorIcon>
              <BiError />
            </ErrorIcon>
            <ErrorTitle as="h1">Oops! Something went wrong</ErrorTitle>
            <ErrorDescription>
              We&apos;re sorry, but something unexpected happened. This error
              has been logged and our team will investigate it. Please try
              refreshing the page or go back to home.
            </ErrorDescription>

            {import.meta.env.DEV && this.state.error && (
              <ErrorDetails>
                <ErrorSummary>
                  Technical Details (Development Mode)
                </ErrorSummary>
                <div>
                  <strong>Error:</strong> {this.state.error.toString()}
                  {this.state.errorInfo && (
                    <ErrorStack>
                      {this.state.errorInfo.componentStack}
                    </ErrorStack>
                  )}
                </div>
              </ErrorDetails>
            )}

            <ButtonGroup>
              <Button variation="filled" onClick={this.handleRefresh}>
                <MdRefresh style={{ marginRight: "0.5rem" }} />
                Refresh Page
              </Button>
              <ErrorBoundaryHomeButton />
            </ButtonGroup>
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

// Separate component to use React hooks
function ErrorBoundaryHomeButton() {
  const handleGoHome = () => {
    // Use window.location instead of useNavigate to avoid Router context issues
    window.location.href = "/";
  };

  return (
    <Button variation="unfilled" onClick={handleGoHome}>
      <FiHome style={{ marginRight: "0.5rem" }} />
      Go to Home
    </Button>
  );
}

export default ErrorBoundary;
