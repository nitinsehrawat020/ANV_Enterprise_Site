import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./Styles/GlobalStyle";
import UserStyle from "./Styles/UserStyle";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { PrimeReactProvider } from "primereact/api";

import UserAppLayout from "./ui/AppLayout";
import AdminAppLayout from "./ui/AdminAppLayout";

import Dashboard from "./Pages/admin/Dashboard";
import Workers from "./Pages/admin/Workers";
import Sites from "./Pages/admin/Sites";
import Vendours from "./Pages/admin/Vendours";
import Setting from "./Pages/admin/Setting";

import Login from "./Pages/User/Login";
import Signup from "./Pages/User/Signup";

import ProtectedRoute from "./ui/ProtectedRoute";
import AdminProtectedRoute from "./ui/AdminProtectedRoute";
import Home from "./Pages/User/Home";
import FalseCeilDesign from "./Pages/User/FalseCeilDesign";
import MoldingDesign from "./Pages/User/MoldingDesign";
import MyAccount from "./Pages/User/MyAccount";
import AboutUs from "./Pages/User/AboutUs";
import Favorite from "./Pages/User/Favorite";
import PrivacyPolicy from "./Pages/User/PrivacyPolicy";
import TermsOfService from "./Pages/User/TermsOfService";
import Sitemap from "./Pages/User/Sitemap";
import ForgotPassword from "./Pages/User/ForgotPassword";
import VerifyOtp from "./Pages/User/VerifyOtp";
import ChangePassword from "./Pages/User/ChangePassword";
// import MyAccount from "./Pages/MyAccount";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <GlobalStyle />
        <UserStyle />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <PrimeReactProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <UserAppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route path="*" element={<Home />} />
                  <Route
                    path="/design/false-ceil"
                    element={<FalseCeilDesign />}
                  />
                  <Route
                    path="/my-account/:ActiveButton"
                    element={<MyAccount />}
                  />
                  <Route path="/design/molding" element={<MoldingDesign />} />
                  <Route path="/aboutUs" element={<AboutUs />} />
                  <Route path="/favortie" element={<Favorite />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route
                    path="/terms-of-service"
                    element={<TermsOfService />}
                  />
                  <Route path="/sitemap" element={<Sitemap />} />
                </Route>
                <Route element={<UserAppLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgotPassword" element={<ForgotPassword />} />
                  <Route path="/verifyOtp" element={<VerifyOtp />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                </Route>
                <Route
                  element={
                    <AdminProtectedRoute>
                      <AdminAppLayout />
                    </AdminProtectedRoute>
                  }
                >
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/worker" element={<Workers />} />
                  <Route path="/site" element={<Sites />} />
                  <Route path="/vendour" element={<Vendours />} />
                  <Route path="/setting" element={<Setting />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 7000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-background-200)",
                  color: "var(--color-white-200)",
                },
              }}
            />
          </PrimeReactProvider>
        </QueryClientProvider>
      </StyleSheetManager>
    </>
  );
}

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    return isPropValid(propName);
  }

  return true;
}

export default App;
