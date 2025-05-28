import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAppLayout from "./ui/AppLayout";
import Home from "./Pages/Home";
import GlobalStyle from "./Styles/GlobalStyle";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { PrimeReactProvider } from "primereact/api";

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import DesignForeCeil from "./Pages/DesignForeCeil";
import DesignMolding from "./Pages/DesignMolding";
import AboutUs from "./Pages/AboutUs";
import Dashboard from "./Pages/admin/Dashboard";
import AdminAppLayout from "./ui/AdminAppLayout";
import Workers from "./Pages/admin/Workers";
import Sites from "./Pages/admin/Sites";
import Vendours from "./Pages/admin/Vendours";
import Setting from "./Pages/admin/Setting";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import VerifyOtp from "./Pages/VerifyOtp";
import ChangePassword from "./Pages/ChangePassword";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminProtectedRoute from "./ui/AdminProtectedRoute";
import Favorite from "./Pages/Favorite";
// import MyAccount from "./Pages/MyAccount";
import MyAccountLayout from "./ui/MyAccountLayout";
import AccountInfo from "./component/myAccount/AccountInfo";
import LoginChangePassword from "./component/myAccount/LoginChangePassword";
import DeleteUserAccount from "./component/myAccount/DeleteUserAccount";

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
                  <Route path="/" element={<Home />} />
                  <Route path="/designFalseCeil" element={<DesignForeCeil />} />
                  <Route path="/designMolding" element={<DesignMolding />} />
                  <Route path="/aboutUs" element={<AboutUs />} />

                  <Route path="*" element={<Home />} />
                  <Route path="/forgotPassword" element={<ForgotPassword />} />
                  <Route path="/verifyOtp" element={<VerifyOtp />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                  <Route path="/favorite" element={<Favorite />} />
                  <Route element={<MyAccountLayout />}>
                    <Route path="/MyAccount/info" element={<AccountInfo />} />
                    <Route
                      path="/MyAccount/changePassword"
                      element={<LoginChangePassword />}
                    />
                  </Route>
                </Route>
                <Route element={<UserAppLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
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
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

export default App;
