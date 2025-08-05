import { useLocation } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { getErrorBoundaryResetKeys } from "../util/errorUtils";

/**
 * Enhanced Error Boundary that resets when location changes
 * Useful for preventing error states from persisting across route changes
 */
function RouterErrorBoundary({ children }) {
  const location = useLocation();
  const resetKeys = getErrorBoundaryResetKeys(location);

  return <ErrorBoundary key={resetKeys.join(",")}>{children}</ErrorBoundary>;
}

export default RouterErrorBoundary;
