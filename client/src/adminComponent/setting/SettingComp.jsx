import styled from "styled-components";
import Heading from "../../ui/Heading";
export const StyledSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-background-800);
  color: var(--color-text-100);
  padding: 2rem;
`;

function SettingComp() {
  return (
    <StyledSetting>
      <Heading>Change Worker Payment</Heading>
    </StyledSetting>
  );
}

export default SettingComp;
