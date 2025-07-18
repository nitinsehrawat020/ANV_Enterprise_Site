import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAddSiteInventory } from "../../../hooks/useSite";

const StyledUpdateDetails = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 13px;
  left: 20px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  input {
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    background-color: var(--color-background-200);
  }

  input[type="submit"] {
    width: 50%;
    background-color: var(--color-primary-500);
    color: var(--color-white-500);
    cursor: pointer;
    transition: all 0.3s;
  }

  input[type="submit"]:hover {
    background-color: var(--color-primary-600);
  }

  input[type="submit"]:active {
    background-color: var(--color-primary-700);
  }

  input[type="submit"]:disabled {
    background-color: var(--color-background-200);
    color: var(--color-background-500);
    cursor: not-allowed;
  }

  input[type="submit"]:disabled:hover {
    background-color: var(--color-background-200);
  }

  input[type="text"] {
    width: 50%;
    &:disabled {
      background-color: var(--color-background-200);
      color: var(--color-white-500);
      cursor: not-allowed;
    }
  }

  select {
    padding: 0.5rem;
    border-radius: var(--br-l);
    border: none;
    background-color: var(--color-background-200);
  }

  select:focus {
    outline: none;
  }
`;

function AddInventory({ site }) {
  const { register, handleSubmit } = useForm();
  const { addInventoryItem, isLoading } = useAddSiteInventory();

  const onSubmit = (data) => {
    addInventoryItem({ data, siteId: site._id });
  };
  return (
    <StyledUpdateDetails>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" {...register("name")} />
          </p>
          <p>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" {...register("quantity")} />
          </p>
          <input type="submit" value="Add" />
        </form>
      </FormContainer>
    </StyledUpdateDetails>
  );
}

export default AddInventory;
