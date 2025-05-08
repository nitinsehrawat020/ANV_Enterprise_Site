import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAppLayout from "./ui/AppLayout";
import Home from "./Pages/Home";
import GlobalStyle from "./Styles/GlobalStyle";

import { PrimeReactProvider } from "primereact/api";

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import DesignForeCeil from "./Pages/DesignForeCeil";
import DesignMolding from "./Pages/DesignMolding";
import AboutUs from "./Pages/AboutUs";
import LoginAndSignup from "./Pages/LoginAndSignup";
import Dashboard from "./Pages/admin/Dashboard";
import AdminAppLayout from "./ui/AdminAppLayout";
import Workers from "./Pages/admin/Workers";
import Sites from "./Pages/admin/Sites";
import Vendours from "./Pages/admin/Vendours";
import Setting from "./Pages/admin/Setting";

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <GlobalStyle />
        <PrimeReactProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<UserAppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/designFalseCeil" element={<DesignForeCeil />} />
                <Route path="/designMolding" element={<DesignMolding />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/login" element={<LoginAndSignup />} />
                <Route path="*" element={<Home />} />
              </Route>
              <Route element={<AdminAppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/worker" element={<Workers />} />
                <Route path="/site" element={<Sites />} />
                <Route path="/vendour" element={<Vendours />} sites={sites} />
                <Route path="/setting" element={<Setting />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PrimeReactProvider>
      </StyleSheetManager>
    </>
  );
}

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

export default App;
