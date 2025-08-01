import { useState } from "react";
import { useGetVendour } from "../../hooks/useVendour";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../util/helper";

const VendourSelectorContainer = styled.div`
  padding: 1rem;
  background: var(--color-background-100);
  border-radius: 8px;
  border: 1px solid var(--color-background-300);
`;

const VendourSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-background-400);
  border-radius: 6px;
  background: var(--color-background-200);
  color: var(--color-grey-50);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
  }

  option {
    background: var(--color-background-200);
    color: var(--color-grey-50);
  }
`;

const SelectedVendourName = styled.h3`
  color: var(--color-grey-50);
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--color-background-50);
  border: 1px solid var(--color-background-300);
  border-radius: 6px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ItemCostingContainer = styled.div`
  margin-top: 1.5rem;

  &::before {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--color-primary-500),
      var(--color-green-400)
    );
    border-radius: 2px;
    margin-bottom: 1rem;
  }
`;

const ItemCostingTitle = styled.h4`
  color: var(--color-grey-100);
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-bottom: 2px solid var(--color-background-400);
  padding-bottom: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const ItemCard = styled.div`
  background: linear-gradient(
    135deg,
    var(--color-background-50) 0%,
    var(--color-background-100) 100%
  );
  border: 1px solid var(--color-background-300);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--color-primary-500),
      var(--color-green-400)
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: var(--color-primary-400);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ItemName = styled.div`
  font-weight: 600;
  color: var(--color-grey-50);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-transform: capitalize;
  line-height: 1.4;
  letter-spacing: 0.3px;
`;

const ItemPrice = styled.div`
  color: var(--color-green-400);
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: "💰";
    font-size: 1.3rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;

    &::before {
      font-size: 1.1rem;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  color: var(--color-grey-300);
  padding: 3rem 1rem;
  font-style: italic;
  background: linear-gradient(
    135deg,
    var(--color-background-50) 0%,
    var(--color-background-75) 100%
  );
  border: 2px dashed var(--color-background-400);
  border-radius: 12px;
  font-size: 1rem;
  position: relative;

  &::before {
    content: "📦";
    display: block;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    opacity: 0.7;
  }
`;

const NoItemsMessage = styled.div`
  text-align: center;
  color: var(--color-grey-300);
  padding: 2.5rem 1rem;
  background: linear-gradient(
    135deg,
    var(--color-background-50) 0%,
    var(--color-background-75) 100%
  );
  border: 2px dashed var(--color-background-400);
  border-radius: 12px;
  font-style: italic;
  position: relative;

  &::before {
    content: "🏷️";
    display: block;
    font-size: 2rem;
    margin-bottom: 0.8rem;
    opacity: 0.7;
  }
`;

function VendourSelector() {
  const { vendour, isLoading } = useGetVendour();
  const [selectedVendourId, setSelectedVendourId] = useState("");

  const selectedVendour = vendour?.find((v) => v._id === selectedVendourId);

  const formatCurrency = (amount) => {
    if (!amount) return "₹0";
    return `₹${parseFloat(amount).toLocaleString("en-IN")}`;
  };

  if (isLoading) {
    return (
      <VendourSelectorContainer>
        <EmptyState>Loading vendours...</EmptyState>
      </VendourSelectorContainer>
    );
  }

  return (
    <VendourSelectorContainer>
      <VendourSelect
        value={selectedVendourId}
        onChange={(e) => setSelectedVendourId(e.target.value)}
      >
        <option value="">Select a vendour to view item costing</option>
        {vendour?.map((v) => (
          <option key={v._id} value={v._id}>
            {v.name}
          </option>
        ))}
      </VendourSelect>

      {selectedVendour && (
        <>
          <SelectedVendourName>
            {capitalizeFirstLetter(selectedVendour.name)}
          </SelectedVendourName>

          <ItemCostingContainer>
            <ItemCostingTitle>🏷️ Item Costing</ItemCostingTitle>

            {selectedVendour.itemCosting &&
            selectedVendour.itemCosting.length > 0 ? (
              <ItemGrid>
                {selectedVendour.itemCosting.map((item, index) => (
                  <ItemCard key={item._id || index}>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{formatCurrency(item.price)}</ItemPrice>
                  </ItemCard>
                ))}
              </ItemGrid>
            ) : (
              <NoItemsMessage>
                No item costing available for this vendour
              </NoItemsMessage>
            )}
          </ItemCostingContainer>
        </>
      )}

      {!selectedVendour && (
        <EmptyState>
          Please select a vendour to view their item costing
        </EmptyState>
      )}
    </VendourSelectorContainer>
  );
}

export default VendourSelector;
