import styled, { keyframes } from "styled-components";

// Construction-themed animations
const buildUp = keyframes`
  0% { 
    height: 0%; 
    opacity: 0.3;
  }
  50% { 
    height: 70%; 
    opacity: 0.7;
  }
  100% { 
    height: 100%; 
    opacity: 1;
  }
`;

const craneRotate = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`;

const hammer = keyframes`
  0%, 50% { transform: rotate(-10deg); }
  25% { transform: rotate(10deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const brickMove = keyframes`
  0% { transform: translateX(-20px); opacity: 0; }
  50% { transform: translateX(0px); opacity: 1; }
  100% { transform: translateX(20px); opacity: 0; }
`;

const LoadingContainer = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1.5rem;
  background: linear-gradient(
    135deg,
    var(--color-background-0, #ffffff) 0%,
    var(--color-background-50, #f9fafb) 100%
  );
  border-radius: 8px;
`;

// Construction Site Animation
const ConstructionSite = styled.div`
  position: relative;
  width: 120px;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

// Building being constructed
const Building = styled.div`
  width: 40px;
  height: 60px;
  background: linear-gradient(
    45deg,
    var(--color-primary-500, #3b82f6) 0%,
    var(--color-primary-600, #2563eb) 100%
  );
  border-radius: 2px 2px 0 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      to top,
      var(--color-primary-700, #1d4ed8) 0%,
      var(--color-primary-500, #3b82f6) 100%
    );
    border-radius: 2px 2px 0 0;
    animation: ${buildUp} 2s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 8px;
    width: 6px;
    height: 6px;
    background: var(--color-background-0, #ffffff);
    border-radius: 1px;
    box-shadow: 0 12px 0 var(--color-background-0, #ffffff),
      0 24px 0 var(--color-background-0, #ffffff),
      12px 0 0 var(--color-background-0, #ffffff),
      12px 12px 0 var(--color-background-0, #ffffff),
      12px 24px 0 var(--color-background-0, #ffffff),
      24px 0 0 var(--color-background-0, #ffffff),
      24px 12px 0 var(--color-background-0, #ffffff),
      24px 24px 0 var(--color-background-0, #ffffff);
  }
`;

// Construction crane
const Crane = styled.div`
  position: absolute;
  right: -10px;
  top: -20px;
  width: 60px;
  height: 60px;

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 25px;
    width: 2px;
    height: 40px;
    background: var(--color-warning-600, #d97706);
  }

  &::after {
    content: "";
    position: absolute;
    top: 25px;
    left: 15px;
    width: 30px;
    height: 2px;
    background: var(--color-warning-600, #d97706);
    transform-origin: right center;
    animation: ${craneRotate} 3s linear infinite;
  }
`;

// Construction worker helmet
const Helmet = styled.div`
  position: absolute;
  left: -15px;
  top: 20px;
  width: 20px;
  height: 15px;
  background: var(--color-warning-400, #fbbf24);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

  &::before {
    content: "🔨";
    position: absolute;
    top: -5px;
    right: -15px;
    font-size: 12px;
    animation: ${hammer} 1.5s ease-in-out infinite;
    transform-origin: bottom center;
  }
`;

// Moving bricks animation
const BricksContainer = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  overflow: hidden;
`;

const Brick = styled.div`
  position: absolute;
  bottom: 0;
  width: 8px;
  height: 4px;
  background: var(--color-error-500, #ef4444);
  border-radius: 1px;
  animation: ${brickMove} 2s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.5s;
    background: var(--color-warning-500, #f59e0b);
  }

  &:nth-child(3) {
    animation-delay: 1s;
    background: var(--color-success-500, #10b981);
  }
`;

const LoadingText = styled.p`
  color: var(--color-text-700, #374151);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 6px;
  background: var(--color-background-200, #e5e7eb);
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 40%;
    background: linear-gradient(
      90deg,
      var(--color-primary-500, #3b82f6),
      var(--color-primary-600, #2563eb),
      var(--color-primary-500, #3b82f6)
    );
    border-radius: 3px;
    animation: ${keyframes`
      0% { transform: translateX(-100%); }
      50% { transform: translateX(250%); }
      100% { transform: translateX(-100%); }
    `} 2s ease-in-out infinite;
  }
`;

const LoadingDots = styled.span`
  &::after {
    content: "";
    animation: ${keyframes`
      0%, 20% { content: '.'; }
      40% { content: '..'; }
      60%, 100% { content: '...'; }
    `} 1.5s infinite;
  }
`;

function LoadingFallback({ message = "Loading" }) {
  return (
    <LoadingContainer>
      <ConstructionSite>
        <Building />
        <Crane />
        <Helmet />
        <BricksContainer>
          <Brick />
          <Brick />
          <Brick />
        </BricksContainer>
      </ConstructionSite>
      <LoadingText>
        🏗️ {message}
        <LoadingDots />
      </LoadingText>
      <ProgressBar />
    </LoadingContainer>
  );
}

// Specific loading components for different sections
export function PageLoadingFallback() {
  return <LoadingFallback message="Building your page" />;
}

export function AdminLoadingFallback() {
  return <LoadingFallback message="Constructing admin dashboard" />;
}

export function ComponentLoadingFallback() {
  return <LoadingFallback message="Assembling components" />;
}

export default LoadingFallback;
