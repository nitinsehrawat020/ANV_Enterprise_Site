import styled from "styled-components";
import { useState, useEffect } from "react";
import { device } from "../../Styles/Theme";

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
export const WorkerForm = styled.div`
  display: flex;

  @media ${device.tablet} {
    display: none;
  }
`;

function DesktopTable({ register, workerData, today, resetTrigger }) {
  const [numberOfWorkers, setNumberOfWorkers] = useState(0);
  const [showWorkerForms, setShowWorkerForms] = useState(false);

  const handleNumberSubmit = () => {
    if (numberOfWorkers > 0) {
      setShowWorkerForms(true);
    }
  };

  const resetForm = () => {
    setNumberOfWorkers(0);
    setShowWorkerForms(false);
  };

  // Reset form when resetTrigger changes (after successful submission)
  useEffect(() => {
    if (resetTrigger > 0) {
      resetForm();
    }
  }, [resetTrigger]);

  // Generate array of worker indices for dynamic form generation
  const workerIndices = Array.from(
    { length: numberOfWorkers },
    (_, i) => i + 1
  );

  return (
    <WorkerForm>
      {!showWorkerForms ? (
        // Step 1: Ask for number of workers
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h3 style={{ marginBottom: "1rem" }}>
            How many worker payments do you want to update?
          </h3>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="number"
              min="1"
              max="10"
              value={numberOfWorkers === 0 ? "" : numberOfWorkers}
              onChange={(e) => {
                const value = e.target.value;
                console.log("Input value:", value); // Debug log

                if (value === "" || value === "0") {
                  setNumberOfWorkers(0);
                } else {
                  const numValue = parseInt(value, 10);
                  console.log("Parsed value:", numValue); // Debug log

                  if (!isNaN(numValue) && numValue > 0 && numValue <= 10) {
                    setNumberOfWorkers(numValue);
                  }
                }
              }}
              placeholder="Enter number of workers"
              style={{
                padding: "0.5rem",
                fontSize: "1rem",
                width: "200px",
                textAlign: "center",
                border: "1px solid var(--color-background-500)",
                borderRadius: "5px",
                backgroundColor: "var(--color-background-800)",
                color: "white",
              }}
            />
          </div>
          <p
            style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "#666" }}
          >
            Selected: {numberOfWorkers} workers
          </p>
          <button
            type="button"
            onClick={handleNumberSubmit}
            disabled={numberOfWorkers <= 0}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              backgroundColor:
                numberOfWorkers > 0
                  ? "var(--color-primary-700)"
                  : "var(--color-background-500)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: numberOfWorkers > 0 ? "pointer" : "not-allowed",
            }}
          >
            Next
          </button>
        </div>
      ) : (
        // Step 2: Show dynamic worker payment forms
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
            {workerIndices.map((index) => (
              <tr key={index}>
                <td>
                  <select {...register(`workerId_${index}`)}>
                    <option value="">Select Worker</option>
                    {workerData.map((worker, workerIndex) => (
                      <option value={worker._id} key={workerIndex}>
                        {worker.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    {...register(`date_${index}`)}
                    type="date"
                    defaultValue={today}
                  />
                </td>
                <td>
                  <input
                    {...register(`amount_${index}`)}
                    type="number"
                    placeholder="Amount"
                  />
                </td>
                <td>
                  <select {...register(`paymentFor_${index}`)}>
                    <option value="">Select</option>
                    <option value="weekly">Weekly</option>
                    <option value="salary">Salary</option>
                    <option value="advance">Advance</option>
                  </select>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <button
                  type="button"
                  onClick={resetForm}
                  style={{
                    padding: "0.3rem 0.8rem",
                    backgroundColor: "var(--color-background-600)",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Change Number
                </button>
              </td>
              <td></td>
              <td></td>
              <td>
                <input type="submit" value="Submit Payments" />
              </td>
            </tr>
          </tbody>
        </StyledTable>
      )}
    </WorkerForm>
  );
}

export default DesktopTable;
