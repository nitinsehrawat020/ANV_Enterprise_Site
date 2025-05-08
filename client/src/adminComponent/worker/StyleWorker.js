import styled from "styled-components";
export const StyleActionButton = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.7rem 0.3rem 0rem;
`;
export const AttendanceContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
`;
export const AttendanceBox = styled.div`
  display: flex;
  background-color: var(--color-background-200);
  padding: 0.4rem;
  position: relative;
  border: 1px solid var(--color-background-500);
  border-radius: ${(props) =>
    props.attendanceDropdown ? "0.9rem 0.9rem 0rem 0rem " : "0.9rem"};
  gap: 0rem;

  @media (max-width: 768px) {
    gap: 0rem;
  }
`;

export const PendingListButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

export const PendingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  background-color: var(--color-background-200);
  border-radius: 0rem 0rem 0.9rem 0.9rem;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 10;
  @media (max-width: 768px) {
    padding: 0.2rem;
    gap: 0.2rem;
  }
`;
export const AttendanceButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 0.3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

// update button

export const UpdatePayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;
  background-color: var(--color-background-200);
  border-radius: var(--br-l);

  @media (max-width: 768px) {
    display: none;
  }
`;
export const PaymentHistory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;
  background-color: var(--color-background-200);
  border-radius: var(--br-l);
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Addworker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.3rem;
  text-align: center;
  cursor: pointer;
  background-color: var(--color-background-200);
  border-radius: var(--br-l);
  @media (max-width: 768px) {
    display: none;
  }
`;
export const FloatingIconButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    z-index: 1000;
  }
`;

// Category

export const StyleCategory = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem;
`;
export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  gap: 0.5rem;
  font-size: 1rem;
  background-color: var(--color-background-800);
  border-radius: var(--br-l);

  @media (max-width: 768px) {
    padding: 0.8rem 0.5rem;
    gap: 0.2rem;
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    padding: 0.8rem 0.5rem;
    gap: 0.2rem;
    font-size: 0.6rem;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const CategoryItem = styled.li`
  padding: 0.5rem;
  border-radius: var(--br-l);
  cursor: pointer;
  background-color: var(--color-background-200);
  &:hover {
    background-color: var(--color-background-500);
  }
  &.active {
    background-color: var(--color-primary-500);
  }

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

export const StyleWorkerList = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 0rem;
  gap: 1rem;
`;

export const WorkerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  padding: 1rem 0rem;
  gap: 1.5rem 3rem;
`;

export const StyledWorkerCard = styled.div`
  width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: var(--color-background-200);
  border-radius: var(--br-xl);
  box-shadow: var(--shadow-lg);
  font-size: 0.9rem;
`;

export const InnerBorder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  padding: 1rem;

  border: 1px solid var(--color-background-800);
  border-radius: var(--br-l);
`;

export const Switch = styled.div`
  position: absolute;
  top: 10px;
  right: 3px;
`;

export const Dropdown = styled.div`
  opacity: ${(props) => (props.overlay ? 1 : 0)};
  display: ${(props) => (props.overlay ? "flex" : "none")};
  position: absolute;
  top: 25px;
  right: 15px;
  /* display: none; */
  z-index: 10;
  background-color: var(--color-background-800);
  border-radius: var(--br-l) 0rem 0rem var(--br-l);
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const DropdownButton = styled.div``;

export const Name_Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 1.1rem;
  background-color: var(--color-background-700);

  padding: 0.5rem;
  border-radius: var(--br-l);
`;

export const LastPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Span = styled.div`
  text-align: center;
  min-width: 50px;
  padding: 0.4rem;
  background-color: var(--color-background-800);
  border-radius: var(--br-l);
  color: var(--color-white-500);
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  /* color: ${(props) => (props.color === "yellow" ? "yellow" : "")};
  color: ${(props) => (props.color === "red" ? "orange" : "")};
  color: ${(props) => (props.color === "green" ? "lightgreen" : "")}; */
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
