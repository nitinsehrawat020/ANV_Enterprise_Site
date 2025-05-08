import styled from "styled-components";
import { useEffect, useState } from "react";

import { IoMdArrowRoundBack } from "react-icons/io";
import { useForm } from "react-hook-form";

const StyledUpdateDetails = styled.div`
  width: 100%;
  height: 180px;
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

function UpdateInventory({ onUpdateContent, site }) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: site.inventory[0].name,
    },
  });
  const [quantity, setQuantity] = useState("");

  const watchselect = watch("name");

  useEffect(() => {
    const item = site.inventory.find((item) => item.name === watchselect);
    if (item) {
      setQuantity(item.quantity);
    }
  }, [watchselect, site.inventory]);

  const onSubmit = (data) => {
    const itemIndex = site.inventory.findIndex(
      (item) => item.name === data.name
    );
    const newSite = { ...site };
    newSite.inventory[itemIndex].quantity = data.quantity;
    onUpdateContent("Details");
  };
  return (
    <StyledUpdateDetails>
      <BackButton>
        <IoMdArrowRoundBack onClick={() => onUpdateContent("Details")} />
      </BackButton>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <label htmlFor="name">Select Item</label>
            <select {...register("name")} defaultValue={site.inventory[0].name}>
              {site.inventory.map((item, index) => (
                <option key={index}>{item.name}</option>
              ))}
            </select>
          </p>
          <p>
            <label htmlFor="quantity">Current Quantity</label>
            <input type="text" defaultValue={quantity} disabled />
          </p>
          <p>
            <label htmlFor="quantity">New Quantity</label>
            <input
              type="text"
              {...register("quantity")}
              placeholder="Enter new quantity"
            />
          </p>

          <input type="submit" value="Update Inventory" />
        </form>
      </FormContainer>
    </StyledUpdateDetails>
  );
}

export default UpdateInventory;
