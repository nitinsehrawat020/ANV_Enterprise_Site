import styled from "styled-components";

const Inventorycontainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  /* padding: 2rem; */
  gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  background-color: var(--color-background-500);
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    background-color: var(--color-background-700);
  }

  th {
    background-color: var(--color-background-800);
    color: var(--color-white-500);
    font-weight: bold;
    padding: 0.5rem;
  }

  td {
    padding: 0.5rem;
    text-align: center;
  }
`;

const DeleteButton = styled.div`
  background-color: red;
  color: var(--color-white-500);
  padding: 5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  &:hover {
    background-color: lightred;
  }
`;

function InventoryDetails({ worker }) {
  const handleDelete = (id) => {
    const newInventory = worker.inventory.filter((item) => item.id !== id);
    worker.inventory = newInventory;
  };

  return (
    <Inventorycontainer>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {worker.inventory?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <DeleteButton onClick={() => handleDelete(item.id)}>
                  x
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Inventorycontainer>
  );
}

export default InventoryDetails;
