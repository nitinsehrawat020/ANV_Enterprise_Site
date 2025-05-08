import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  height: 50%;

  border-collapse: collapse;
  border-spacing: 1;
  border: 2px solid var(--color-background-800);
  margin-top: 2rem;

  thead tr {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-800);
    border: 1px solid var(--color-background-800);
  }
  thead th {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-300);
    border: 1px solid var(--color-background-800);
  }

  td {
    text-align: center;
    padding: 0.7rem;
    border: 1px solid var(--color-background-500);
  }
  select {
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-background-800);
  }
  input {
    width: 80px;
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-background-800);
  }

  input[type="date"] {
    width: 80%;
  }

  select:focus,
  input:focus {
    outline: 2px solid var(--color-background-800);
    outline-offset: -1px;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-background-200);
    color: var(--color-background-500);
  }

  input[type="submit"] {
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-primary-700);
    color: var(--color-white-500);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-primary-500);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function DesktopTable({ register, workerData, today }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Worker Name</th>
          <th>Payment Date</th>
          <th>Amount</th>
          <th>Payment For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select {...register("workerId_4")}>
              <option value="">Select Worker</option>
              {workerData.map((worker, index) => (
                <option value={worker.id} key={index}>
                  {worker.name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input {...register("date_4")} type="date" defaultValue={today} />
          </td>
          <td>
            <input {...register("amount_4")} type="number" />
          </td>
          <td>
            <select {...register("paymentFor_4")}>
              <option value="">Select </option>
              <option value="weekly">Weekly</option>
              <option value="salary">Salary</option>
              <option value="advance">Advance</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <select {...register("workerId_5")}>
              <option value="">Select Worker</option>
              {workerData.map((worker, index) => (
                <option value={worker.id} key={index}>
                  {worker.name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input {...register("date_5")} type="date" defaultValue={today} />
          </td>
          <td>
            <input type="number" {...register("amount_5")} />
          </td>
          <td>
            <select {...register("paymentFor_5")}>
              <option value="">Select </option>
              <option value="weekly">Weekly</option>
              <option value="salary">Salary</option>
              <option value="advance">Advance</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <select {...register("workerId_6")}>
              <option value="">Select Worker</option>
              {workerData.map((worker, index) => (
                <option value={worker.id} key={index}>
                  {worker.name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input {...register("date_6")} type="date" defaultValue={today} />
          </td>
          <td>
            <input type="number" {...register("amount_6")} />
          </td>
          <td>
            <select {...register("paymentFor_6")}>
              <option value="">Select </option>
              <option value="weekly">Weekly</option>
              <option value="salary">Salary</option>
              <option value="advance">Advance</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <input type="submit" value="Submit" />
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
}

export default DesktopTable;
