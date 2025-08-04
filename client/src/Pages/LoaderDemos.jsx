import { useState, useEffect } from "react";
import styled from "styled-components";
import ConstructionLoader from "../ui/ConstructionLoader";
import {
  MiniLoader,
  FullPageLoader,
  SkeletonLoader,
  ButtonLoader,
} from "../ui/Loader";
import {
  ConstructionSpinner,
  ConstructionIcon,
  ConstructionText,
} from "../ui/Spinner";

const DemoContainer = styled.div`
  padding: var(--padding-24);
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--gap-24);
`;

const Section = styled.div`
  background: var(--color-white);
  padding: var(--padding-24);
  border-radius: var(--br-16);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: var(--font-size-24);
  color: var(--color-black);
  margin-bottom: var(--padding-16);
`;

const Description = styled.p`
  font-size: var(--font-size-16);
  color: var(--color-dimgray);
  margin-bottom: var(--padding-16);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--gap-16);
  flex-wrap: wrap;
  margin-bottom: var(--padding-16);
`;

const Button = styled.button`
  padding: var(--padding-16) var(--padding-24);
  background: var(--color-orange);
  color: var(--color-white);
  border: none;
  border-radius: var(--br-8);
  font-size: var(--font-size-16);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-dimgray);
    transform: translateY(-2px);
  }
`;

const LoaderDemos = () => {
  const [showFullPageLoader, setShowFullPageLoader] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  // Simulate progress
  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setShowProgress(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [showProgress]);

  const handleFullPageLoader = () => {
    setShowFullPageLoader(true);
    setTimeout(() => setShowFullPageLoader(false), 3000);
  };

  const handleButtonLoader = () => {
    setLoadingButton(true);
    setTimeout(() => setLoadingButton(false), 2000);
  };

  const handleProgressLoader = () => {
    setProgress(0);
    setShowProgress(true);
  };

  return (
    <DemoContainer>
      <Section>
        <Title>🏗️ Construction Loading Effects</Title>
        <Description>
          Construction-themed loading components perfect for a construction
          company website. These loaders provide visual feedback while data is
          being fetched from the server.
        </Description>
      </Section>

      <Section>
        <Title>Full Construction Scene Loader</Title>
        <Description>
          Complete construction scene with animated crane, building
          construction, and workers. Perfect for major data loading operations.
        </Description>
        <ButtonGroup>
          <Button onClick={handleProgressLoader}>Show with Progress Bar</Button>
        </ButtonGroup>
        {showProgress && (
          <ConstructionLoader
            progress={progress}
            message="Building your dashboard..."
            subtext="Loading projects and site data"
            showProgress={true}
          />
        )}
        {!showProgress && (
          <ConstructionLoader
            message="Preparing your workspace..."
            subtext="Fetching the latest construction data"
          />
        )}
      </Section>

      <Section>
        <Title>Mini Loaders</Title>
        <Description>
          Small inline loaders for buttons, form submissions, and quick
          operations.
        </Description>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <MiniLoader text="Saving changes..." />
          <MiniLoader text="Uploading blueprints..." />
          <MiniLoader text="Processing payment..." />
        </div>
      </Section>

      <Section>
        <Title>Construction Spinner</Title>
        <Description>
          Alternative construction-themed spinner with bouncing crane icon.
        </Description>
        <ConstructionSpinner>
          <ConstructionIcon />
          <ConstructionText>Building in progress...</ConstructionText>
        </ConstructionSpinner>
      </Section>

      <Section>
        <Title>Skeleton Loaders</Title>
        <Description>
          Content placeholders that show the structure while loading actual
          data. Great for project cards, user profiles, and content lists.
        </Description>
        <div style={{ display: "grid", gap: "16px" }}>
          <SkeletonLoader lines={3} showCard={true} />
          <SkeletonLoader lines={2} showCard={true} />
          <SkeletonLoader lines={4} showCard={false} />
        </div>
      </Section>

      <Section>
        <Title>Interactive Demos</Title>
        <Description>
          Try out different loading states and interactions.
        </Description>
        <ButtonGroup>
          <Button onClick={handleFullPageLoader}>Show Full Page Loader</Button>
          <ButtonLoader
            isLoading={loadingButton}
            onClick={handleButtonLoader}
            style={{
              padding: "var(--padding-16) var(--padding-24)",
              background: "var(--color-orange)",
              color: "var(--color-white)",
              border: "none",
              borderRadius: "var(--br-8)",
              fontSize: "var(--font-size-16)",
              cursor: loadingButton ? "not-allowed" : "pointer",
            }}
          >
            {loadingButton ? "Processing..." : "Submit Project"}
          </ButtonLoader>
        </ButtonGroup>
      </Section>

      {/* Usage Examples */}
      <Section>
        <Title>Usage Examples</Title>
        <Description>
          Here&apos;s how to implement these loaders in your components:
        </Description>
        <pre
          style={{
            background: "var(--color-floralwhite)",
            padding: "var(--padding-16)",
            borderRadius: "var(--br-8)",
            fontSize: "14px",
            overflow: "auto",
          }}
        >
          {`// For data fetching
const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState(null);

const fetchData = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('/api/projects');
    const result = await response.json();
    setData(result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};

// In your component render
{isLoading ? (
  <ConstructionLoader 
    message="Loading projects..."
    subtext="Please wait while we fetch your data"
  />
) : (
  <ProjectList data={data} />
)}

// For form submissions
<ButtonLoader 
  isLoading={isSubmitting}
  onClick={handleSubmit}
>
  Submit Application
</ButtonLoader>`}
        </pre>
      </Section>

      {showFullPageLoader && (
        <FullPageLoader text="Loading your construction dashboard..." />
      )}
    </DemoContainer>
  );
};

export default LoaderDemos;
