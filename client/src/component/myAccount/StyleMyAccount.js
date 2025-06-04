import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "../../Styles/Theme";
export const AccountContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "navigate content";
  justify-content: center;
  align-items: start;
`;

export const StyleAccountNavigation = styled.div`
  grid-area: "navigate";
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: var(--color-background-200);
`;

export const StyleAccountContent = styled.div`
  grid-area: "content";
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
`;

export const AccountNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  /* background-color: var(--color-background-800); */
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 4rem 1.5rem;
  text-align: left;
  background-color: var(--color-background-800);
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  border-radius: 0.8rem;
`;
export const StyleAccountLink = styled(NavLink)`
  width: 180px;
  display: flex;

  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 0.5rem;
  color: var(--color-white-500);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--color-background-200);
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: var(--color-primary-200);
  }

  &.active {
    background-color: var(--color-background-800);
    border: 2px solid var(--color-primary-700);
  }
  @media (max-width: 768px) {
    width: auto;
    gap: 0.2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    font-size: 0.7rem;
    gap: 0.2rem;
  }
`;

export const StyleAccountInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  //prettier-ignore
  grid-template-areas: 
  "title title"
  "avatar changeInfo"
  ;
`;

export const Header = styled.div`
  grid-area: title;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 12px;
  border-bottom: 2px solid var(--color-white-100);

  h2 {
    background-color: var(--color-background-800);
    padding: 8px;
    border-radius: 8px;
  }
`;

export const ChangeAvatarConatiner = styled.div`
  grid-area: avatar;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;
export const StyleAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  width: 500px;
  height: 300px;
  border-radius: 8px;
  background-color: var(--color-background-200);
  box-shadow: var(--shadow-md);
`;

export const AvatarDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
  }
  form {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ChangeAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 400px;
  height: 300px;
`;
export const AvatarButton = styled.div`
  width: 140px;
  background-color: var(--color-primary);
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    background-color: transparent;
    color: var(--color-primary);
  }
`;

export const ChnageInfoDiv = styled.div`
  grid-area: changeInfo;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const EditFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  background-color: var(--color-background-200);
  border-radius: 8px;
  gap: 8px;
`;
export const EditButton = styled.button`
  ${(props) =>
    props.variant === "filled" &&
    css`
      & {
        align-self: flex-end;
        border-radius: var(--br-m);
        background-color: ${props.color ? props.color : "var(--color-primary)"};
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: var(--padding-xs-1) var(--padding-xs-1);
        cursor: pointer;
        font-size: ${props.size ? `${props.size}rem` : "1rem"};
        border: none;
        transition: all 0.3s ease;
        margin-right: 0px;

        @media ${device.laptop} {
          font-size: ${props.size ? `${props.size / 1.5}rem` : "0.75rem"};
        }
        @media ${device.tablet} {
          font-size: ${props.size ? `${props.size / 1.5}rem` : "0.75rem"};
        }
        @media ${device.mobile} {
          font-size: ${props.size ? `${props.size / 2}rem` : "0.75rem"};
        }
      }
      &:hover {
        background-color: ${props.hoverColor
          ? props.hoverColor
          : "var(--color-primary)"};
        border: 2px solid var(--color-primary);
        background-color: transparent;
        color: var(--color-primary);
      }
    `}
`;
export const InfoForm = styled.form`
  width: min-content;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 1rem;
  border: 2px solid var(--color-background-800);
  border-radius: 8px;
  p {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 40%;

    ${(props) => {
      props.type === "address" &&
        `
        width: 80%;
      `;
    }}
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  @media ${device.laptop} {
    /* width: 90%; */
  }

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    flex-direction: column;

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      text-align: start;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
    }
  }

  @media ${device.mobile} {
    width: 90%;

    p {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 90%;
      text-align: center;
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 90%;
    }
  }
`;

export const StyleChangePassword = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const StylePasswordHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  gap: 12px;
  border-bottom: 2px solid var(--color-white-100);

  h2 {
    background-color: var(--color-background-800);
    padding: 8px;
    border-radius: 8px;
  }
`;
export const ChangePasswordFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ChangePasswordForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
