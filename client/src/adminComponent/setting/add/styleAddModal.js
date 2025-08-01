import styled from "styled-components";

// Modal Container and Title Components
export const StyleModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90vw;
  max-height: 60vh;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.2rem;
    max-width: 95vw;
    max-height: 50vh;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 0.1rem;
    max-width: 98vw;
    max-height: 50vh;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  h2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    margin: 0;
  }

  button {
    padding: 0.4rem 0.8rem;
    background: var(--color-red-300);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    white-space: nowrap;
    transition: background-color 0.2s ease;

    &:hover {
      background: var(--color-red-400);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.2rem;
    text-align: center;
    margin-bottom: 0.3rem;

    h2 {
      font-size: 1.1rem;
    }

    button {
      align-self: flex-end;
      font-size: 0.7rem;
      padding: 0.25rem 0.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1rem;
    }

    button {
      padding: 0.2rem 0.4rem;
      font-size: 0.65rem;
    }
  }
`;

// Form Container and Base Form Components
export const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0.8rem;
  margin-top: 0.3rem;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0.4rem;
    max-width: 100%;
    max-height: 80vh;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    max-height: 85vh;
  }

  @media (max-width: 320px) {
    padding: 0.2rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (max-width: 480px) {
    gap: 0.15rem;
  }
`;

export const FormLabel = styled.label`
  font-weight: 600;
  color: var(--color-grey-50);
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const FormInput = styled.input`
  padding: 0.6rem;
  border: 2px solid
    ${(props) =>
      props.hasError ? "var(--color-red-500)" : "var(--color-background-300)"};
  border-radius: 6px;
  font-size: 0.9rem;
  background: var(--color-background-100);
  color: var(--color-grey-50);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: var(--color-grey-300);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    font-size: 0.75rem;
    border-radius: 4px;
  }
`;

export const FormSelect = styled.select`
  padding: 0.6rem;
  border: 2px solid
    ${(props) =>
      props.hasError ? "var(--color-red-500)" : "var(--color-background-300)"};
  border-radius: 6px;
  font-size: 0.9rem;
  background: var(--color-background-100);
  color: var(--color-grey-50);
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  option {
    background: var(--color-background-100);
    color: var(--color-grey-50);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    font-size: 0.75rem;
    border-radius: 4px;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 0.6rem;
  border: 2px solid
    ${(props) =>
      props.hasError ? "var(--color-red-500)" : "var(--color-background-300)"};
  border-radius: 6px;
  font-size: 0.9rem;
  background: var(--color-background-100);
  color: var(--color-grey-50);
  transition: border-color 0.2s ease;
  resize: vertical;
  min-height: 60px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: var(--color-grey-300);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    min-height: 50px;
  }

  @media (max-width: 480px) {
    padding: 0.3rem;
    font-size: 0.75rem;
    min-height: 40px;
    border-radius: 4px;
  }
`;

export const FormFileInput = styled.input`
  padding: 0.8rem;
  border: 2px dashed var(--color-background-300);
  border-radius: 8px;
  background: var(--color-background-50);
  color: var(--color-grey-50);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary-400);
    background: var(--color-background-100);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    border-style: solid;
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--color-red-500);
  font-size: 0.8rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const FileHint = styled.span`
  color: var(--color-grey-300);
  font-size: 0.8rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${(props) =>
    props.disabled
      ? "var(--color-grey-400)"
      : "linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%)"};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-top: 0.5rem;
  transition: all 0.2s ease;
  width: 100%;

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      var(--color-primary-600) 0%,
      var(--color-primary-700) 100%
    );
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(59, 130, 246, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    margin-top: 0.4rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.7rem;
  }
`;

// Worker Modal Specific Components
export const WorkerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

// Site Modal Specific Components
export const SiteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const SiteFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.8rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;
  background: var(--color-background-50);
  border-radius: 8px;
  border: 1px solid var(--color-background-300);

  @media (max-width: 768px) {
    padding: 0.6rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
    gap: 0.4rem;
    border-radius: 6px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary-500);
  margin: 0 0 0.3rem 0;
  border-bottom: 1px solid var(--color-primary-200);
  padding-bottom: 0.3rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;
