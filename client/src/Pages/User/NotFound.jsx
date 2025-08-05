import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { TbError404 } from "react-icons/tb";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import { Main } from "./index";

const NotFoundContainer = styled(Main)`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const NotFoundContent = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  background: var(--color-white, #ffffff);
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-background-100, #ccc);
  margin: 0 auto;
`;

const ErrorIcon = styled.div`
  font-size: 6rem;
  color: var(--color-primary-600);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const ErrorCode = styled.div`
  font-size: 8rem;
  font-weight: 900;
  color: var(--color-primary-700);
  line-height: 0.8;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ErrorTitle = styled(Heading)`
  color: var(--color-black-500, #000);
  margin-bottom: 1rem;
`;

const ErrorDescription = styled.p`
  color: var(--color-background-100, #666);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const SuggestionsList = styled.div`
  text-align: left;
  background: var(--color-background-100, #f5f5f5);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid var(--color-background-100, #ddd);
  margin-top: 2rem;
`;

const SuggestionTitle = styled.h3`
  color: var(--color-black-500, #333);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SuggestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SuggestionItem = styled.li`
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SuggestionLink = styled(Link)`
  color: var(--color-primary-600);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary, #e3f2fd);
    color: var(--color-primary-700, #1976d2);
    text-decoration: none;
  }
`;

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <ErrorIcon>
          <TbError404 />
        </ErrorIcon>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle as="h1">🏗️ Page Not Found</ErrorTitle>
        <ErrorDescription>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. It might have been deleted, renamed, or you entered the wrong
          URL.
          <br />
          <br />
          Don&apos;t worry - let&apos;s get you back to exploring our
          construction designs and services!
        </ErrorDescription>

        <ButtonGroup>
          <Button variation="filled" onClick={handleGoHome}>
            <FiHome style={{ marginRight: "0.5rem" }} />
            Go to Home
          </Button>
          <Button variation="unfilled" onClick={handleGoBack}>
            <FiArrowLeft style={{ marginRight: "0.5rem" }} />
            Go Back
          </Button>
        </ButtonGroup>

        <SuggestionsList>
          <SuggestionTitle>
            <BiSearchAlt />
            Popular Pages
          </SuggestionTitle>
          <SuggestionList>
            <SuggestionItem>
              <SuggestionLink to="/">
                🏠 Home - Browse our construction designs
              </SuggestionLink>
            </SuggestionItem>
            <SuggestionItem>
              <SuggestionLink to="/design/false-ceil">
                🎨 False Ceiling Designs
              </SuggestionLink>
            </SuggestionItem>
            <SuggestionItem>
              <SuggestionLink to="/design/molding">
                🏗️ Molding Designs
              </SuggestionLink>
            </SuggestionItem>
            <SuggestionItem>
              <SuggestionLink to="/aboutUs">
                ℹ️ About Us - Learn about ANV Enterprise
              </SuggestionLink>
            </SuggestionItem>
            <SuggestionItem>
              <SuggestionLink to="/login">
                🔐 Login - Access your account
              </SuggestionLink>
            </SuggestionItem>
            <SuggestionItem>
              <SuggestionLink to="/signup">
                📝 Sign Up - Create a new account
              </SuggestionLink>
            </SuggestionItem>
          </SuggestionList>
        </SuggestionsList>
      </NotFoundContent>
    </NotFoundContainer>
  );
}

export default NotFound;
