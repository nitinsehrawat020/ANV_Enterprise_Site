import { useState } from "react";
import OperationSelector from "./OperationSelector";
import EntitySelector from "./EntitySelector";
import VendourSelector from "./VendourSelector";
import { SettingContainer, SettingGrid, SettingCard } from "./styleSetting";
import Heading from "../../ui/Heading";
import WorkerModal from "./add/WorkerModal";
import AddSiteModal from "./add/AddSiteModal";
import AddVendourModal from "./add/AddVendourModal";
import AddDesignModal from "./add/AddDesignModal";
import DeleteDesignModal from "./delete/DeleteDesignModal";
import DeleteSiteModal from "./delete/DeleteSiteModal";
import DeleteVendourModal from "./delete/DeleteVendourModal";

function SettingMain() {
  const [selectedOperation, setSelectedOperation] = useState("");
  const [selectedEntity, setSelectedEntity] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Define available operations and their corresponding entities
  const operationConfig = {
    add: ["worker", "site", "vendour", "design"],

    delete: ["design", "site", "vendour"],
  };

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
    setSelectedEntity(""); // Reset entity selection
    setShowModal(false);
  };

  const handleEntitySelect = (entity) => {
    setSelectedEntity(entity);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEntity("");
  };

  const resetSelection = () => {
    setSelectedOperation("");
    setSelectedEntity("");
    setShowModal(false);
  };

  return (
    <SettingContainer>
      <Heading as="h1">Admin Settings</Heading>

      <SettingGrid>
        <SettingCard>
          <Heading as="h3">
            {selectedOperation
              ? `🔧 ${
                  selectedOperation.charAt(0).toUpperCase() +
                  selectedOperation.slice(1)
                } Operation`
              : "🔧 Operations"}
          </Heading>
          <OperationSelector
            selectedOperation={selectedOperation}
            onOperationSelect={handleOperationSelect}
            onReset={resetSelection}
          />

          {selectedOperation && (
            <div
              style={{
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--color-background-400)",
              }}
            >
              <Heading
                as="h4"
                style={{
                  marginBottom: "1rem",
                  color: "var(--color-grey-200)",
                  fontSize: "1.1rem",
                }}
              >
                📋 Select Target for{" "}
                {selectedOperation.charAt(0).toUpperCase() +
                  selectedOperation.slice(1)}
              </Heading>
              <EntitySelector
                operation={selectedOperation}
                availableEntities={operationConfig[selectedOperation]}
                selectedEntity={selectedEntity}
                onEntitySelect={handleEntitySelect}
              />
            </div>
          )}
        </SettingCard>

        {/* Vendour Item Costing Card */}
        <SettingCard>
          <Heading as="h3">🏷️ Vendour Item Costing</Heading>
          <VendourSelector />
        </SettingCard>
      </SettingGrid>

      {/* Modal Trigger Info */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              background: "var(--color-background-200)",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              border: "1px solid var(--color-background-400)",
              color: "var(--color-grey-50)",
              maxHeight: "90vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedOperation === "add" && selectedEntity === "worker" && (
              <WorkerModal onClick={handleCloseModal} />
            )}
            {selectedOperation === "add" && selectedEntity === "site" && (
              <AddSiteModal onClick={handleCloseModal} />
            )}
            {selectedOperation === "add" && selectedEntity === "vendour" && (
              <AddVendourModal onClick={handleCloseModal} />
            )}
            {selectedOperation === "add" && selectedEntity === "design" && (
              <AddDesignModal onClick={handleCloseModal} />
            )}
            {selectedOperation === "delete" && selectedEntity === "design" && (
              <DeleteDesignModal onClick={handleCloseModal} />
            )}
            {selectedOperation === "delete" && selectedEntity === "site" && (
              <DeleteSiteModal onClick={handleCloseModal} />
            )}
            {selectedOperation === "delete" && selectedEntity === "vendour" && (
              <DeleteVendourModal onClick={handleCloseModal} />
            )}
          </div>
        </div>
      )}
    </SettingContainer>
  );
}

export default SettingMain;
