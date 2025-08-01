import { OperationButton, ResetButton } from "./styleSetting";

function OperationSelector({ selectedOperation, onOperationSelect, onReset }) {
  const operations = [
    { key: "add", label: "➕ Add New", description: "Create new records" },

    { key: "delete", label: "🗑️ Delete", description: "Remove records" },
  ];

  // If an operation is selected, show back button instead of operation buttons
  if (selectedOperation) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
            padding: "0.8rem",
            backgroundColor: "var(--color-background-300)",
            borderRadius: "8px",
            border: "1px solid var(--color-background-400)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.1rem" }}>
              {
                operations
                  .find((op) => op.key === selectedOperation)
                  ?.label.split(" ")[0]
              }
            </span>
            <span style={{ color: "var(--color-grey-100)", fontWeight: "600" }}>
              {selectedOperation.charAt(0).toUpperCase() +
                selectedOperation.slice(1)}{" "}
              Operation
            </span>
          </div>
          <ResetButton
            onClick={onReset}
            style={{
              width: "auto",
              padding: "0.4rem 0.8rem",
              margin: "0",
              fontSize: "0.8rem",
            }}
          >
            ← Back
          </ResetButton>
        </div>
      </div>
    );
  }

  // Show operation selection if no operation is selected
  return (
    <div>
      <p
        style={{
          marginBottom: "1rem",
          color: "var(--color-grey-200)",
          fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        Choose the type of operation you want to perform
      </p>

      {operations.map((operation) => (
        <OperationButton
          key={operation.key}
          selected={selectedOperation === operation.key}
          onClick={() => onOperationSelect(operation.key)}
        >
          <div>
            <div style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>
              {operation.label}
            </div>
            <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>
              {operation.description}
            </div>
          </div>
        </OperationButton>
      ))}
    </div>
  );
}

export default OperationSelector;
