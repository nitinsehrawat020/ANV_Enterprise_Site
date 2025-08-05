import { Img, StyleNavBarLogo } from "./StyleNavBar";

function Logo({ parent }) {
  return (
    <StyleNavBarLogo to="/" parent={parent}>
      <Img src="\pictures\logo\Logo.png" alt="the Logo" />
    </StyleNavBarLogo>
  );
}

export default Logo;
