import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const CardConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  justify-content: space-evenly;
  padding: 1rem;
  gap: 1rem;
  margin: 0rem 1rem;
`;
export const Card = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
  padding: 1rem;
  border-radius: 1rem;
  gap: 12px;
  @media ${device.tablet} {
    width: 100px;
    height: 70px;
    font-size: 0.6rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 6px;
  @media ${device.tablet} {
    gap: 3px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${(props) => props.background};
  border-radius: 8px;
  font-size: 40px;
  @media ${device.tablet} {
    font-size: 20px;
  }
`;
export const Conatiner = styled.div`
  width: 100%;
  height: min-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "alertBox pieChart"
    "LastDayUpdate pieChart";
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "alertBox"
      "LastDayUpdate"
      "pieChart";
  }
`;

export const StylePieChart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-area: pieChart;
  width: 100%;
  height: 100%;
  /* max-height: 610px; */
  gap: 1rem;
  flex-direction: column;
  background-color: var(--color-background-800);
  border-radius: 8px;
  padding: 1rem;
  overflow: visible;
  position: relative;

  h3 {
    padding: 0;
    margin: 0 0 1rem 0;
    align-self: flex-start;
    @media ${device.laptop} {
      align-self: center;
      max-height: 800px;
    }
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  background: var(--color-background-700, #2a2d3a);
  border: 1px solid var(--color-background-600, #3a3d4a);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    height: 700px;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  @media ${device.tablet} {
    flex-direction: row-reverse;
    height: auto;
    padding: 1.5rem;
    gap: 1.5rem;
  }
  @media ${device.mobile} {
    flex-direction: column;
    height: 700px;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

export const ChartWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--color-white, #fff);
  z-index: 5;

  .title {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--color-text-secondary, #8b9dc3);
  }

  .amount {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-white, #fff);
  }
`;

export const DataPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export const DataCard = styled.div`
  background: var(--color-background-600, #3a3d4a);
  border: 1px solid var(--color-background-500, #4a4d5a);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-background-500, #4a4d5a);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const DataInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DataIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background: ${(props) =>
    props.bgColor || "var(--color-background-500, #4a4d5a)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid
    ${(props) =>
      props.bgColor
        ? `${props.bgColor}40`
        : "var(--color-background-400, #5a5d6a)"};
`;

export const DataDetails = styled.div`
  .label {
    font-size: 0.9rem;
    color: var(--color-text-secondary, #8b9dc3);
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .value {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-white, #fff);
  }
`;

export const Percentage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-secondary, #8b9dc3);
  text-align: right;
`;
export const StyleAlertBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  grid-area: alertBox;
  width: 100%;
  height: 100%;
  max-height: 500px;
  flex-direction: column;
  background-color: var(--color-background-800);
  border: 1px solid var(--color-background-600, #262d4bff);
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const AlertHeader = styled.div`
  background: var(--color-background-300, #282b35ff);
  border-bottom: 1px solid var(--color-background-600, #3a3d4a);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin: 0;
    color: var(--color-white, #fff);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const AlertBadge = styled.span`
  background: var(--color-background-600, #3a3d4a);
  color: var(--color-white, #fff);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
  border: 1px solid var(--color-background-500, #4a4d5a);
`;

export const AlertList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-background-800, #1a1d29);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-background-600, #3a3d4a);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-background-500, #4a4d5a);
  }
`;

export const AlertItem = styled.div`
  background: var(--color-background-600, #3a3d4a);
  border: 1px solid var(--color-background-500, #4a4d5a);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: var(--color-white, #fff);
  line-height: 1.5;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-1px);
    background: var(--color-background-500, #4a4d5a);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--color-text-secondary, #8b9dc3);
  }
`;

export const AlertIcon = styled.span`
  font-size: 1.1rem;
  margin-right: 0.75rem;
  display: inline-block;
  vertical-align: middle;
`;

export const EmptyAlert = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  color: var(--color-text-secondary, #8b9dc3);

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.6;
  }

  .message {
    font-size: 0.95rem;
    font-weight: 500;
  }
`;

export const StyleLastDayUpdate = styled.div`
  grid-area: LastDayUpdate;
  background-color: var(--color-background-800);
  border: 1px solid var(--color-background-600, #3a3d4a);
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const UpdateHeader = styled.div`
  background: var(--color-background-300, #282b35ff);
  border-bottom: 1px solid var(--color-background-600, #3a3d4a);
  padding: 0.75rem 1rem;

  h4 {
    margin: 0;
    color: var(--color-white, #fff);
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .date {
    font-size: 0.7rem;
    color: var(--color-text-secondary, #8b9dc3);
    margin-top: 0.2rem;
  }
`;

export const UpdateList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 1rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-background-800, #1a1d29);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-background-600, #3a3d4a);
    border-radius: 2px;
  }
`;

export const UpdateItem = styled.div`
  background: var(--color-background-600, #3a3d4a);
  border: 1px solid var(--color-background-500, #4a4d5a);
  border-radius: 6px;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: var(--color-background-500, #4a4d5a);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }

  .worker-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.4rem;
  }

  .worker-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-white, #fff);
  }

  .attendance-status {
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  .worker-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: var(--color-text-secondary, #8b9dc3);
  }

  .site-info {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .time-info {
    font-size: 0.7rem;
  }
`;

export const AttendanceStatus = styled.span`
  background: ${(props) => {
    switch (props.status) {
      case "present":
        return "rgba(34, 197, 94, 0.2)";
      case "absent":
        return "rgba(239, 68, 68, 0.2)";
      case "not_available":
        return "rgba(156, 163, 175, 0.2)";
      case "half_day":
        return "rgba(245, 158, 11, 0.2)";
      default:
        return "rgba(156, 163, 175, 0.2)";
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "present":
        return "#22c55e";
      case "absent":
        return "#ef4444";
      case "not_available":
        return "#9ca3af";
      case "half_day":
        return "#f59e0b";
      default:
        return "#9ca3af";
    }
  }};
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap;
`;

export const EmptyUpdate = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  color: var(--color-text-secondary, #8b9dc3);

  .icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    opacity: 0.6;
  }

  .message {
    font-size: 0.85rem;
    font-weight: 500;
  }
`;
