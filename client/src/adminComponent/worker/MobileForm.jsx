import styled from "styled-components";
import { useState, useEffect } from "react";

const NumberSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: var(--color-background-600);
  border-radius: 8px;
  border: 1px solid var(--color-background-300);

  h3 {
    color: var(--color-white);
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.75rem;
    border: 1px solid var(--color-background-300);
    border-radius: 6px;
    background: var(--color-background-700);
    color: var(--color-white);
    font-size: 1rem;
    text-align: center;
    width: 150px;

    &:focus {
      outline: none;
      border-color: var(--color-primary-600);
    }
  }

  p {
    color: var(--color-background-200);
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  button {
    background: var(--color-primary-600);
    color: var(--color-white);
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: var(--color-primary-700);
      transform: translateY(-1px);
    }

    &:disabled {
      background: var(--color-background-400);
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

export const StyleMobileForm = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-size: 0.8rem;
    gap: 1rem;
  }
`;

const StyleForm = styled.div`
  width: 100%;
  max-width: 300px;
  background: var(--color-background-600);
  border: 1px solid var(--color-background-300);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 8px;

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    label {
      color: var(--color-white);
      font-weight: 500;
      font-size: 0.9rem;
    }

    select,
    input {
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid var(--color-background-300);
      background: var(--color-background-700);
      color: var(--color-white);
      font-size: 0.9rem;

      &:focus {
        outline: none;
        border-color: var(--color-primary-600);
      }
    }

    input[type="date"] {
      width: 100%;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;

  button {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &.submit {
      background: var(--color-primary-600);
      color: var(--color-white);

      &:hover {
        background: var(--color-primary-700);
        transform: translateY(-1px);
      }
    }

    &.wednesday {
      background: var(--color-background-600);
      border: 1px solid var(--color-background-300);
      color: var(--color-white);

      &:hover {
        background: var(--color-background-500);
      }
    }

    &.reset {
      background: var(--color-background-600);
      border: 1px solid var(--color-background-300);
      color: var(--color-white);

      &:hover {
        background: var(--color-background-500);
      }
    }
  }
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
  padding: 0.5rem;
`;

function MobileForm({
  register,
  workerData,
  today,
  updateWednesdayPayment,
  resetTrigger,
}) {
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
    <StyleMobileForm>
      {!showWorkerForms ? (
        // Step 1: Ask for number of workers
        <NumberSelector>
          <h3>How many worker payments do you want to update?</h3>
          <input
            type="number"
            min="1"
            max="10"
            value={numberOfWorkers === 0 ? "" : numberOfWorkers}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || value === "0") {
                setNumberOfWorkers(0);
              } else {
                const numValue = parseInt(value, 10);
                if (!isNaN(numValue) && numValue > 0 && numValue <= 10) {
                  setNumberOfWorkers(numValue);
                }
              }
            }}
            placeholder="Enter number"
          />
          <p>Selected: {numberOfWorkers} workers</p>
          <button
            type="button"
            onClick={handleNumberSubmit}
            disabled={numberOfWorkers <= 0}
          >
            Next
          </button>
        </NumberSelector>
      ) : (
        // Step 2: Show dynamic worker payment forms
        <>
          <FormContainer>
            {workerIndices.map((index) => (
              <StyleForm key={index}>
                <div className="form-field">
                  <label htmlFor={`worker_${index}`}>Worker Name</label>
                  <select
                    {...register(`workerId_${index}`)}
                    id={`worker_${index}`}
                  >
                    <option value="">Select Worker</option>
                    {workerData.map((worker, workerIndex) => (
                      <option value={worker._id} key={workerIndex}>
                        {worker.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor={`date_${index}`}>Payment Date</label>
                  <input
                    {...register(`date_${index}`)}
                    type="date"
                    defaultValue={today}
                    id={`date_${index}`}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor={`amount_${index}`}>Amount</label>
                  <input
                    {...register(`amount_${index}`)}
                    type="number"
                    placeholder="Enter amount"
                    id={`amount_${index}`}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor={`paymentFor_${index}`}>Payment For</label>
                  <select
                    {...register(`paymentFor_${index}`)}
                    id={`paymentFor_${index}`}
                  >
                    <option value="">Select Type</option>
                    <option value="weekly">Weekly</option>
                    <option value="salary">Salary</option>
                    <option value="advance">Advance</option>
                  </select>
                </div>
              </StyleForm>
            ))}
          </FormContainer>

          <ActionButtons>
            <button type="button" onClick={resetForm} className="reset">
              Change Number of Workers
            </button>
            <button
              type="button"
              onClick={updateWednesdayPayment}
              className="wednesday"
            >
              Update Wednesday Payment
            </button>
            <button type="submit" className="submit">
              Submit Payments
            </button>
          </ActionButtons>
        </>
      )}
    </StyleMobileForm>
  );
}

export default MobileForm;
