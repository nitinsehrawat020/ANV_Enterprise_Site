import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const ActionCategoryConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
`;
export const StyleActionButton = styled.div`
  width: 100%;

  align-self: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border-radius: 12px; */
  gap: 1rem;
  padding: 0px 1rem;
  /* border-top: 3px solid var(--color-background-800);
  border-bottom: 3px solid var(--color-background-800); */
`;
export const AttendanceContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 8px;
  @media ${device.tablet} {
    padding: 0.2rem;
    gap: 4px;
  }
  @media ${device.mobile} {
    padding: 3px;
  }
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

  @media ${device.tablet} {
    gap: 0rem;
    font-size: 12px;
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

  @media ${device.tablet} {
    padding: 0.2rem;
  }
  @media ${device.mobile} {
    padding: 0.1rem;
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

  @media ${device.tablet} {
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0rem;
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

  select {
    background-color: var(--color-background-800);
    border-radius: 8px;
    padding: 4px;
  }

  @media (max-width: 768px) {
    /* padding: 0.8rem 0.5rem; */
    gap: 0.2rem;
    /* font-size: 0.8rem; */
  }
  @media (max-width: 480px) {
    padding: 0.8rem 0.5rem;
    gap: 0.2rem;
    font-size: 0.8rem;
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
  background: var(--color-background-800);
  border: 1px solid var(--color-background-500);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--color-primary-500);
    z-index: 10;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--color-primary-600);
  }

  &:active {
    transform: translateY(-2px);
  }

  @media ${device.mobile} {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  @media (max-height: 700px) {
    width: 260px;
  }
`;

export const InnerBorder = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  height: 100%;
  background: var(--color-background-300);
  border: 1px solid var(--color-background-500);
  border-radius: 8px;
  margin: 0.5rem;

  @media ${device.mobile} {
    padding: 0.8rem;
    gap: 0.6rem;
    margin: 0.3rem;
  }

  @media (max-height: 700px) {
    padding: 0.8rem;
    gap: 0.6rem;
    margin: 0.3rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, var(--color-succes), #22c55e)"
      : "linear-gradient(135deg, var(--color-red-500), var(--color-red-600))"};
  color: var(--color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 5;

  @media ${device.mobile} {
    top: 0.6rem;
    left: 0.6rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.65rem;
  }
`;

export const Switch = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  padding: 0.4rem;
  border-radius: var(--br-m);
  background: var(--color-background-500);
  border: 1px solid var(--color-background-400);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: var(--color-primary-600);
    border-color: var(--color-primary-500);
    transform: scale(1.05) rotate(90deg);
  }

  svg {
    color: var(--color-white);
    font-size: 1.1rem;
    display: block;
  }

  @media ${device.mobile} {
    top: 0.6rem;
    right: 0.6rem;
    padding: 0.3rem;

    svg {
      font-size: 1rem;
    }
  }
`;

export const Dropdown = styled.div`
  opacity: ${(props) => (props.overlay ? 1 : 0)};
  visibility: ${(props) => (props.overlay ? "visible" : "hidden")};
  transform: ${(props) =>
    props.overlay ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.95)"};
  position: absolute;
  top: 70px;
  right: 1rem;
  z-index: 20;
  background: var(--color-background-800);
  border: 2px solid var(--color-background-500);
  border-radius: var(--br-l);
  padding: 0.5rem;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 160px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 0.8rem 1rem;
  background: transparent;
  border: none;
  color: var(--color-white);
  text-align: left;
  cursor: pointer;
  border-radius: var(--br-m);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary-600);
    color: var(--color-white);
    transform: translateX(4px);
  }
`;

export const Name_Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2rem;
  text-align: center;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--br-m);
  border: 1px solid var(--color-background-500);

  h3 {
    color: var(--color-white);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.2;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  span {
    color: var(--color-white-100);
    font-size: 0.8rem;
    text-transform: capitalize;
    background: var(--color-background-500);
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    display: inline-block;
    font-weight: 500;
  }

  @media ${device.mobile} {
    margin-top: 1.5rem;
    padding: 0.6rem;
    gap: 0.3rem;

    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;
      padding: 0.15rem 0.5rem;
    }
  }

  @media (max-height: 700px) {
    margin-top: 1.5rem;
    padding: 0.6rem;
    gap: 0.3rem;
  }
`;

export const LastPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem;
  background: linear-gradient(
    135deg,
    var(--color-background-500),
    var(--color-background-400)
  );
  border-radius: var(--br-m);
  border-left: 3px solid var(--color-secondary);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  span:first-child {
    color: var(--color-white-100);
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media ${device.mobile} {
    padding: 0.5rem;

    span:first-child {
      font-size: 0.75rem;
    }
  }

  @media (max-height: 700px) {
    padding: 0.5rem;
  }
`;

export const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem;

  @media ${device.mobile} {
    gap: 0.5rem;
  }

  @media (max-height: 700px) {
    gap: 0.5rem;
  }
`;

export const PaymentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;

  @media ${device.mobile} {
    gap: 0.5rem;
  }

  @media (max-height: 700px) {
    gap: 0.5rem;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.6rem;
  background: linear-gradient(
    135deg,
    var(--color-background-500),
    var(--color-background-400)
  );
  border-radius: var(--br-m);
  border-left: 3px solid
    ${(props) => {
      if (props.color === "yellow") return "var(--color-secondary)";
      if (props.color === "red") return "var(--color-red-500)";
      if (props.color === "green") return "var(--color-succes)";
      return "var(--color-background-100)";
    }};
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    background: linear-gradient(
      135deg,
      var(--color-background-400),
      var(--color-background-500)
    );
  }

  .label {
    font-size: 0.7rem;
    color: var(--color-white-100);
    text-transform: uppercase;
    letter-spacing: 0.3px;
    font-weight: 600;
    opacity: 0.8;
  }

  .value {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-white);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1.2;
  }

  @media ${device.mobile} {
    padding: 0.5rem;
    gap: 0.25rem;

    .label {
      font-size: 0.65rem;
    }

    .value {
      font-size: 0.85rem;
    }
  }

  @media (max-height: 700px) {
    padding: 0.5rem;
    gap: 0.25rem;

    .label {
      font-size: 0.65rem;
    }

    .value {
      font-size: 0.85rem;
    }
  }
`;

export const Span = styled.span`
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-background-800);
  padding: 0.2rem 0.5rem;
  border-radius: var(--br-s);
  display: inline-block;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;

  @media ${device.mobile} {
    padding: 0.15rem 0.4rem;
    font-size: 0.75rem;
  }

  @media (max-height: 700px) {
    padding: 0.15rem 0.4rem;
    font-size: 0.75rem;
  }
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
