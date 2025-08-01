import { EntityButton } from "./styleSetting";

function EntitySelector({
  operation,
  availableEntities,
  selectedEntity,
  onEntitySelect,
}) {
  const entityInfo = {
    worker: { icon: "👷", description: "Manage worker records" },
    site: { icon: "🏗️", description: "Handle construction sites" },
    vendour: { icon: "🏪", description: "Vendor and supplier data" },
    design: { icon: "🎨", description: "Design templates & patterns" },
  };

  const getOperationDescription = (operation, entity) => {
    const actions = {
      add: `Create new ${entity} record`,

      delete: `Remove ${entity} from system`,
    };
    return actions[operation] || "";
  };

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
        Select what you want to {operation}
      </p>

      {availableEntities.map((entity) => (
        <EntityButton
          key={entity}
          selected={selectedEntity === entity}
          onClick={() => onEntitySelect(entity)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.2rem" }}>
              {entityInfo[entity]?.icon || "📄"}
            </span>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontWeight: "600", marginBottom: "0.2rem" }}>
                {entity.charAt(0).toUpperCase() + entity.slice(1)}
              </div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                {getOperationDescription(operation, entity)}
              </div>
            </div>
          </div>
        </EntityButton>
      ))}

      {availableEntities.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "1rem",
            color: "var(--color-grey-300)",
            fontStyle: "italic",
          }}
        >
          No entities available for {operation} operation
        </div>
      )}
    </div>
  );
}

export default EntitySelector;
