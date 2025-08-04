import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const constructionBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
`;

// Original spinner with construction theme colors
const Spinner = styled.div`
  margin: 4.8rem auto;
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-orange) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-orange));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

// Construction themed spinner alternative
export const ConstructionSpinner = styled.div`
  margin: 4.8rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ConstructionIcon = styled.div`
  font-size: 4rem;
  animation: ${constructionBounce} 2s infinite;

  &::before {
    content: "🏗️";
  }
`;

export const ConstructionText = styled.div`
  font-size: var(--font-size-16);
  color: var(--color-dimgray);
  text-align: center;
  font-weight: 500;
`;

export default Spinner;
