import styled, { keyframes } from "styled-components";

// Animation keyframes
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const construct = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
`;

const craneMove = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
`;

// Styled components
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: var(--padding-24);
  background: var(--color-whitesmoke);
  border-radius: var(--br-16);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 175, 15, 0.2),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const ConstructionScene = styled.div`
  position: relative;
  width: 200px;
  height: 120px;
  margin-bottom: var(--padding-24);
`;

const Crane = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  animation: ${craneMove} 3s ease-in-out infinite;

  &::before {
    content: "🏗️";
    font-size: 48px;
    display: block;
    animation: ${rotate} 4s linear infinite;
  }
`;

const Building = styled.div`
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 60px;
  height: 40px;
  background: var(--color-dimgray);
  border-radius: var(--br-8) var(--br-8) 0 0;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 10px;
    width: 40px;
    height: 20px;
    background: var(--color-orange);
    border-radius: var(--br-8);
    animation: ${construct} 3s ease-in-out infinite;
  }
`;

const WorkerContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
  display: flex;
  gap: 10px;
`;

const Worker = styled.div`
  font-size: 24px;
  animation: ${bounce} 2s infinite;
  animation-delay: ${(props) => props.$delay || "0s"};

  &::before {
    content: "👷";
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: var(--padding-16);
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--padding-4);
  font-size: var(--font-size-16);
  color: var(--color-black);
  font-weight: 500;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--color-gray-200);
  border-radius: var(--br-8);
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--color-orange),
    var(--color-floralwhite),
    var(--color-orange)
  );
  background-size: 200% 100%;
  border-radius: var(--br-8);
  width: ${(props) => props.$progress || 0}%;
  transition: width 0.3s ease;
  animation: ${shimmer} 1.5s infinite;
`;

const LoadingText = styled.div`
  font-size: var(--font-size-20);
  color: var(--color-black);
  font-weight: 600;
  margin-bottom: var(--padding-4);
  text-align: center;
`;

const LoadingSubtext = styled.div`
  font-size: var(--font-size-16);
  color: var(--color-dimgray);
  text-align: center;
  margin-bottom: var(--padding-16);
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: var(--color-orange);
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite both;
  animation-delay: ${(props) => props.$delay || "0s"};
`;

function ConstructionLoader({
  progress = null,
  message = "Building your experience...",
  subtext = "Please wait while we fetch the latest data",
  showProgress = false,
}) {
  return (
    <LoaderContainer>
      <ConstructionScene>
        <Crane />
        <Building />
        <WorkerContainer>
          <Worker $delay="0s" />
          <Worker $delay="0.5s" />
          <Worker $delay="1s" />
        </WorkerContainer>
      </ConstructionScene>

      <LoadingText>{message}</LoadingText>
      <LoadingSubtext>{subtext}</LoadingSubtext>

      {showProgress && progress !== null && (
        <ProgressBarContainer>
          <ProgressLabel>
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </ProgressLabel>
          <ProgressBar>
            <ProgressFill $progress={progress} />
          </ProgressBar>
        </ProgressBarContainer>
      )}

      <DotsContainer>
        <Dot $delay="0s" />
        <Dot $delay="0.2s" />
        <Dot $delay="0.4s" />
      </DotsContainer>
    </LoaderContainer>
  );
}

export default ConstructionLoader;
