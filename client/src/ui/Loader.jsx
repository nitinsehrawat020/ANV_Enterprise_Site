import styled, { keyframes } from "styled-components";

// Simple animations
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// Mini loader for inline usage
const MiniLoaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--gap-8);
`;

const MiniSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-gray-200);
  border-top: 2px solid var(--color-orange);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const MiniText = styled.span`
  font-size: var(--font-size-16);
  color: var(--color-dimgray);
`;

// Full page loader overlay
const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(245, 243, 239, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--padding-16);
  background: var(--color-white);
  padding: var(--padding-24);
  border-radius: var(--br-16);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-gray-200);
  border-top: 4px solid var(--color-orange);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoaderText = styled.div`
  font-size: var(--font-size-16);
  color: var(--color-black);
  font-weight: 500;
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Skeleton loader for content placeholders
const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-16);
  padding: var(--padding-16);
`;

const SkeletonLine = styled.div`
  height: 16px;
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 25%,
    var(--color-white) 50%,
    var(--color-gray-200) 75%
  );
  background-size: 200% 100%;
  border-radius: var(--br-8);
  animation: ${pulse} 1.5s ease-in-out infinite;
  width: ${(props) => props.$width || "100%"};
`;

const SkeletonCard = styled.div`
  background: var(--color-white);
  border-radius: var(--br-16);
  padding: var(--padding-16);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

// Button loading state
const LoadingButton = styled.button`
  position: relative;
  padding: var(--padding-16) var(--padding-24);
  background: var(--color-orange);
  color: var(--color-white);
  border: none;
  border-radius: var(--br-8);
  font-size: var(--font-size-16);
  cursor: not-allowed;
  opacity: 0.7;

  &::after {
    content: "";
    position: absolute;
    right: var(--padding-16);
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid var(--color-white);
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;

// Export individual components
export function MiniLoader({ text = "Loading..." }) {
  return (
    <MiniLoaderContainer>
      <MiniSpinner />
      <MiniText>{text}</MiniText>
    </MiniLoaderContainer>
  );
}

export function FullPageLoader({ text = "Loading..." }) {
  return (
    <OverlayContainer>
      <SpinnerContainer>
        <Spinner />
        <LoaderText>{text}</LoaderText>
      </SpinnerContainer>
    </OverlayContainer>
  );
}

export function SkeletonLoader({ lines = 3, showCard = true }) {
  const LineComponent = () => (
    <SkeletonContainer>
      {Array.from({ length: lines }, (_, i) => (
        <SkeletonLine key={i} $width={i === lines - 1 ? "70%" : "100%"} />
      ))}
    </SkeletonContainer>
  );

  if (showCard) {
    return (
      <SkeletonCard>
        <LineComponent />
      </SkeletonCard>
    );
  }

  return <LineComponent />;
}

export function ButtonLoader({ children, isLoading, ...props }) {
  if (isLoading) {
    return <LoadingButton {...props}>{children}</LoadingButton>;
  }

  return <button {...props}>{children}</button>;
}
