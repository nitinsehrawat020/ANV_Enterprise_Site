import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const StyleMyAccount = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  max-width: 1200px;

  @media ${device.laptop} {
    height: 550px;
    gap: 16px;
  }

  @media ${device.tablet} {
    height: auto;
    min-height: 400px;
    flex-direction: column;
    gap: 12px;
    padding: 1rem;
  }

  @media ${device.mobile} {
    height: auto;
    min-height: 350px;
    flex-direction: column;
    gap: 8px;
    padding: 0.5rem;
  }
`;

export const SelectContentContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  gap: 12px;
  background-color: var(--color-floralwhite);
  border-radius: 24px;
`;

export const SelectButton = styled(NavLink)`
  width: 288px;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem 1.5rem;
  gap: 8px;
  font-size: 24px;
  font-weight: 400;
  border: 3px solid var(--color-black);
  border-radius: 8px;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;

  &.active {
    background-color: var(--color-orange);
  }

  &:not(.active) {
    background-color: transparent;
  }

  &:hover:not(.active) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media ${device.laptop} {
    font-size: 16px;
    width: 210px;
  }
`;

export const SelectedContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--color-floralwhite);
  border-radius: 24px;
  padding: 24px;
  overflow-y: auto;

  @media ${device.laptop} {
    padding: 18px;
    border-radius: 20px;
  }

  @media ${device.tablet} {
    padding: 16px;
    border-radius: 16px;
  }

  @media ${device.mobile} {
    padding: 12px;
    border-radius: 12px;
  }
`;

export const AccountHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;

  @media ${device.laptop} {
    font-size: 28px;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const ProfileGroup = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileContainer = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: var(--color-whitesmoke);
  border-radius: 8px;
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--color-floralwhite);
`;
export const IconBackground = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px;
  background-color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
  }
`;

// Image Upload Modal Styles
export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  min-width: 400px;
  background-color: var(--color-floralwhite);
  border-radius: 16px;

  @media ${device.tablet} {
    min-width: 350px;
    gap: 20px;
    border-radius: 12px;
  }

  @media ${device.mobile} {
    min-width: 300px;
    gap: 16px;
    border-radius: 8px;
  }
`;

export const UploadTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-gray-100);
  margin: 0;
  text-align: center;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const ImagePreview = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--color-whitesmoke);
  border: 3px solid var(--color-gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--color-gray-100);
  text-align: center;

  @media ${device.mobile} {
    width: 150px;
    height: 150px;
    font-size: 12px;
  }
`;

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FileInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
`;

export const FileInput = styled.input`
  position: absolute;
  left: -9999px;
  opacity: 0;
`;

export const FileInputButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: var(--color-orange);
  color: var(--color-white);
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--color-orange);

  &:hover {
    background-color: #ff8c42;
    border-color: #ff8c42;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 140, 66, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media ${device.mobile} {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const UploadButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;

export const UploadButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  @media ${device.mobile} {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const ConfirmButton = styled(UploadButton)`
  background-color: var(--color-orange);
  color: var(--color-white);
  border: 2px solid var(--color-orange);

  &:hover:not(:disabled) {
    background-color: #ff8c42;
    border-color: #ff8c42;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 140, 66, 0.3);
  }

  &:disabled {
    background-color: #cccccc;
    border-color: #cccccc;
    color: #888888;
    cursor: not-allowed;
    transform: none;
    opacity: 0.6;
    box-shadow: none;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const CancelButton = styled(UploadButton)`
  background-color: var(--color-whitesmoke);
  color: var(--color-gray-100);
  border: 2px solid var(--color-gray-100);

  &:hover {
    background-color: #e8e8e8;
    border-color: #1a1a1a;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StyledButtonLoader = styled.div`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: ${(props) =>
    !props.$hasFile || props.$isLoading ? "not-allowed" : "pointer"};
  transition: all 0.3s ease;
  flex: 1;
  background-color: var(--color-orange);
  color: var(--color-white);
  opacity: ${(props) => (!props.$hasFile || props.$isLoading ? "0.6" : "1")};
  border: 2px solid var(--color-orange);

  &:hover:not(:disabled) {
    background-color: #ff8c42;
    border-color: #ff8c42;
    transform: ${(props) =>
      !props.$hasFile || props.$isLoading ? "none" : "translateY(-2px)"};
    box-shadow: ${(props) =>
      !props.$hasFile || props.$isLoading
        ? "none"
        : "0 4px 12px rgba(255, 140, 66, 0.3)"};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media ${device.mobile} {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const ProfileForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  p {
    width: 80%;
  }
  span {
    font-size: 20px;
    color: var(--color-orange);
  }
`;
export const StyleLabel = styled.label`
  width: auto;
  height: fit-content;
  font-size: 24px;
  font-weight: 500;
`;

export const StyleInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 24px;
  font-weight: 500;
  padding: 0rem 1rem;
  background-color: var(--color-whitesmoke);
  border-radius: 8px;
  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
  }
`;

export const StyleSubmitFormButton = styled.input.attrs({ type: "submit" })`
  width: fit-content;
  position: relative;
  border-radius: 16px;
  background-color: var(--color-white);
  border: 3px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
  font-weight: 500;
  transition: all 0.2s ease;
  gap: 1rem;

  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0.25rem 1rem;
  }
  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 0.25rem 1.1rem;
  }

  &:hover {
    border: 3px solid var(--color-gray-100);
    background-color: var(--color-orange);
  }
`;

export const StyleSubmitFilledButton = styled.input.attrs({ type: "submit" })`
  position: relative;
  border-radius: 16px;
  background-color: var(--color-orange);
  border: 3px solid var(--color-orange);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1.5rem;
  text-align: left;
  font-size: 1.5rem;
  color: var(--color-gray-100);
  font-family: var(--font-poppins);
  font-weight: 500;
  transition: all 0.2s ease;
  gap: 1rem;

  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0.25rem 1rem;
  }

  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 0.25rem 1.1rem;
  }

  &:hover {
    border: 3px solid var(--color-gray-100);
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1rem;
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
export const EditProfileButton = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  gap: 8px;
  border: 2px solid var(--color-black);
  border-radius: 8px;
  font-size: 24px;
  cursor: pointer;
`;

// order History
export const TWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 24px;
  background-color: var(--color-whitesmoke);
  overflow-x: auto;

  @media ${device.laptop} {
    padding: 0.75rem;
  }

  @media ${device.tablet} {
    padding: 0.5rem;
    border-radius: 16px;
  }

  @media ${device.mobile} {
    padding: 0.25rem;
    border-radius: 12px;
  }
`;

export const TConatiner = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: var(--color-whitesmoke);
  min-width: 600px; /* Minimum width to prevent cramping */

  @media ${device.laptop} {
    min-width: 500px;
  }

  @media ${device.tablet} {
    min-width: 450px;
  }

  @media ${device.mobile} {
    min-width: 400px;
  }
`;

export const THeader = styled.thead``;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  border-bottom: 1px solid var(--color-whitesmoke);
  border-bottom: 1px solid var(--color-black);

  &:last-child {
    border-bottom: 1px solid var(--color-black);
  }

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export const TH = styled.th`
  padding: var(--padding-16) var(--gap-8);
  text-align: left;
  font-weight: 600;
  font-size: var(--font-size-20);
  color: var(--color-gray-100);
  background-color: transparent;
  font-family: var(--font-poppins);

  &:first-child {
    width: auto; /* Takes available space */
  }

  &:nth-child(2),
  &:nth-child(3) {
    width: 120px; /* Status and Amount */
  }

  &:nth-child(4) {
    width: 60px; /* Details column - smaller for icon */
    text-align: center;
  }

  @media ${device.laptop} {
    padding: 12px 6px;
    font-size: 18px;

    &:nth-child(2),
    &:nth-child(3) {
      width: 100px;
    }

    &:nth-child(4) {
      width: 50px;
    }
  }

  @media ${device.tablet} {
    padding: 10px 4px;
    font-size: 16px;

    &:nth-child(2),
    &:nth-child(3) {
      width: 80px;
    }

    &:nth-child(4) {
      width: 40px;
    }
  }

  @media ${device.mobile} {
    padding: 8px 4px;
    font-size: 14px;

    &:nth-child(2),
    &:nth-child(3) {
      width: 70px;
    }

    &:nth-child(4) {
      width: 35px;
    }
  }
`;
export const TD = styled.td`
  padding: var(--padding-16) var(--gap-8);
  text-align: left;
  font-size: var(--font-size-16);
  color: var(--color-dimgray);
  background-color: transparent;
  vertical-align: middle;
  font-family: var(--font-poppins);

  &:first-child {
    width: auto; /* Takes available space */
    font-weight: 500;
    color: var(--color-black);
  }

  &:nth-child(2),
  &:nth-child(3) {
    width: 120px; /* Status and Amount */
  }

  &:nth-child(4) {
    width: 60px; /* Details column - smaller for icon */
    text-align: center;
  }

  &:last-child {
    color: ${(props) => (props.color ? "var(--color-orange)" : "")};
    cursor: pointer;
    font-weight: 500;

    &:hover {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }

  @media ${device.laptop} {
    padding: 12px 6px;
    font-size: 14px;

    &:nth-child(2),
    &:nth-child(3) {
      width: 100px;
    }

    &:nth-child(4) {
      width: 50px;
    }
  }

  @media ${device.tablet} {
    padding: 10px 4px;
    font-size: 12px;

    &:nth-child(2),
    &:nth-child(3) {
      width: 80px;
    }

    &:nth-child(4) {
      width: 40px;
    }

    &:first-child {
      font-size: 13px;
    }
  }

  @media ${device.mobile} {
    padding: 8px 4px;
    font-size: 11px;
    line-height: 1.3;

    &:nth-child(2),
    &:nth-child(3) {
      width: 70px;
    }

    &:nth-child(4) {
      width: 35px;
    }

    &:first-child {
      font-size: 12px;
    }
  }
`;
