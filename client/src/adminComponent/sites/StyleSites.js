import styled from "styled-components";
export const StyleCategory = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  height: 30px;
  margin: 1rem auto;
  transition: transform 0.1s ease-in-out;
`;
export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  background-color: var(--color-background-800);
  color: var(--color-white-500);
  gap: 0.5rem;
  border-radius: var(--br-l);

  select {
    background-color: var(--color-background-400);
    border-radius: 8px;
    padding: 4px;
  }
`;
export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-m);
  cursor: pointer;
  &:hover {
    background-color: var(--color-background-700);
  }
`;

export const StyledSiteCard = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 30px;
`;
export const SiteCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 1rem;
  padding: 2rem;
`;

export const StyleSiteCard = styled.div`
  width: 350px;
  height: 400px;
  padding: 1rem;
  background-color: var(--color-background-800);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-background-500);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--color-primary-500);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--color-primary-600);
  }
`;

export const InnerBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-background-500);
  background: var(--color-background-300);
`;

export const Graphs = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-evenly;
`;
export const WorkProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
`;
export const InventoryStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
`;

export const LastPayment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.3rem;

  p {
    background-color: var(--color-background-500);
    padding: 0.4rem;
    border-radius: var(--br-l);
  }
`;
export const LastWorkerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  h4 {
    width: 50%;
    text-align: start;
  }
`;

export const LastWorkerList = styled.div`
  width: auto;
  max-height: 60px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 0.8rem;

  padding: 0.4rem;
  border-radius: var(--br-m);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  p {
    background-color: var(--color-background-500);
    padding: 0.4rem;
    border-radius: var(--br-m);
  }
`;

export const InformationSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-size: 0.7rem;
  gap: 0.8rem;

  border-radius: var(--br-m);
`;

export const Payment = styled.p`
  background-color: var(--color-background-500);
  padding: 0.4rem;
  border-radius: var(--br-m);
`;

export const LastWorkingDay = styled.p`
  background-color: var(--color-background-500);
  padding: 0.4rem;
  border-radius: var(--br-m);
`;
