import { useState } from "react";
import { Main } from ".";
import Login from "../component/LoginAndSignup/Login";
import Signup from "../component/LoginAndSignup/Signup";

import {
  LoginSignupContainer,
  OverlayContainer,
} from "../component/LoginAndSignup/StyleLogin";

function LoginAndSignup() {
  const [active, setActive] = useState(true);

  function toggleActive() {
    setActive((prevActive) => !prevActive);
  }

  return (
    <>
      <Main>
        <LoginSignupContainer>
          <Login onFlip={toggleActive} active={active} />
          <Signup onFlip={toggleActive} active={active} />
          <OverlayContainer active={active}>
            <div className="image-container">
              <img
                src="/pictures/illustrate/undraw_fingerprint-login_19qv.svg"
                alt="login"
                className={active ? "active" : ""}
              />
              <img
                src="/pictures/illustrate/undraw_sign-up_z2ku.svg"
                alt="register"
                className={!active ? "active" : ""}
              />
            </div>
          </OverlayContainer>
        </LoginSignupContainer>
      </Main>
    </>
  );
}

export default LoginAndSignup;
