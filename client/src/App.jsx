import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { PrimeReactProvider } from "primereact/api";
import { initializeImagePreloading } from "./util/imagePreloader";
import { initializePerformanceOptimizations } from "./util/performanceOptimization";

// Layouts - Keep these as regular imports since they're critical
import UserAppLayout from "./ui/AppLayout";
import AdminAppLayout from "./ui/AdminAppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminProtectedRoute from "./ui/AdminProtectedRoute";
import ErrorBoundary from "./ui/ErrorBoundary";

// Lazy load admin pages for code splitting
const Dashboard = lazy(() => import("./Pages/admin/Dashboard"));
const Workers = lazy(() => import("./Pages/admin/Workers"));
const Sites = lazy(() => import("./Pages/admin/Sites"));
const Vendours = lazy(() => import("./Pages/admin/Vendours"));
const Setting = lazy(() => import("./Pages/admin/Setting"));

// Lazy load user pages for code splitting
const Home = lazy(() => import("./Pages/User/Home"));
const Login = lazy(() => import("./Pages/User/Login"));
const Signup = lazy(() => import("./Pages/User/Signup"));
const FalseCeilDesign = lazy(() => import("./Pages/User/FalseCeilDesign"));
const MoldingDesign = lazy(() => import("./Pages/User/MoldingDesign"));
const MyAccount = lazy(() => import("./Pages/User/MyAccount"));
const AboutUs = lazy(() => import("./Pages/User/AboutUs"));
const Favorite = lazy(() => import("./Pages/User/Favorite"));
const PrivacyPolicy = lazy(() => import("./Pages/User/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./Pages/User/TermsOfService"));
const Sitemap = lazy(() => import("./Pages/User/Sitemap"));
const ForgotPassword = lazy(() => import("./Pages/User/ForgotPassword"));
const VerifyOtp = lazy(() => import("./Pages/User/VerifyOtp"));
const ChangePassword = lazy(() => import("./Pages/User/ChangePassword"));
const ErrorTestComponent = lazy(() => import("./Pages/User/ErrorTest"));

// Keep error/fallback components as regular imports for immediate availability
import SimpleNotFound from "./Pages/User/SimpleNotFound";
import {
  PageLoadingFallback,
  AdminLoadingFallback,
} from "./ui/LoadingFallback";
// import MyAccount from "./Pages/MyAccount";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  // Initialize critical image preloading on app mount
  useEffect(() => {
    // Initialize performance optimizations
    initializePerformanceOptimizations();

    // Initialize image preloading
    initializeImagePreloading();
  }, []);

  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <PrimeReactProvider>
            <ErrorBoundary>
              <BrowserRouter>
                <Routes>
                  <Route
                    element={
                      <ProtectedRoute>
                        <UserAppLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route
                      path="/"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <Home />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/design/false-ceil"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <FalseCeilDesign />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/my-account/:ActiveButton"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <MyAccount />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/design/molding"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <MoldingDesign />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/aboutUs"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <AboutUs />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/favortie"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <Favorite />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/privacy-policy"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <PrivacyPolicy />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/terms-of-service"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <TermsOfService />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/sitemap"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <Sitemap />
                        </Suspense>
                      }
                    />
                    {/* Development/Testing route - Remove in production */}
                    {import.meta.env.DEV && (
                      <Route
                        path="/error-test"
                        element={
                          <Suspense fallback={<PageLoadingFallback />}>
                            <ErrorTestComponent />
                          </Suspense>
                        }
                      />
                    )}
                  </Route>
                  <Route element={<UserAppLayout />}>
                    <Route
                      path="/login"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <Login />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/signup"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <Signup />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/forgotPassword"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <ForgotPassword />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/verifyOtp"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <VerifyOtp />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/changePassword"
                      element={
                        <Suspense fallback={<PageLoadingFallback />}>
                          <ChangePassword />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route
                    element={
                      <AdminProtectedRoute>
                        <AdminAppLayout />
                      </AdminProtectedRoute>
                    }
                  >
                    <Route
                      path="/dashboard"
                      element={
                        <Suspense fallback={<AdminLoadingFallback />}>
                          <Dashboard />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/worker"
                      element={
                        <Suspense fallback={<AdminLoadingFallback />}>
                          <Workers />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/site"
                      element={
                        <Suspense fallback={<AdminLoadingFallback />}>
                          <Sites />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/vendour"
                      element={
                        <Suspense fallback={<AdminLoadingFallback />}>
                          <Vendours />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/setting"
                      element={
                        <Suspense fallback={<AdminLoadingFallback />}>
                          <Setting />
                        </Suspense>
                      }
                    />
                  </Route>
                  {/* 404 Page - OUTSIDE layout for testing */}
                  <Route path="*" element={<SimpleNotFound />} />
                </Routes>
              </BrowserRouter>
            </ErrorBoundary>
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
                  zIndex: "999",
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
