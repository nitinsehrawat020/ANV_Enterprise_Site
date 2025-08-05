import { useState, useCallback } from "react";
import toast from "react-hot-toast";

/**
 * Custom hook for handling errors in React components
 * Provides error state management and error logging
 */
function useErrorHandler() {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleError = useCallback((error, options = {}) => {
    const {
      showToast = true,
      logToConsole = true,
      customMessage = null,
    } = options;

    setError(error);
    setIsError(true);

    // Log to console in development
    if (logToConsole && import.meta.env.DEV) {
      console.error("Error handled by useErrorHandler:", error);
    }

    // Show toast notification
    if (showToast) {
      const message =
        customMessage || error?.message || "An unexpected error occurred";
      toast.error(message);
    }

    // In production, you might want to log to an error reporting service
    if (import.meta.env.PROD) {
      // Example: logErrorToService(error);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    setIsError(false);
  }, []);

  const resetErrorBoundary = useCallback(() => {
    clearError();
    // Force re-render by changing key or state
  }, [clearError]);

  return {
    error,
    isError,
    handleError,
    clearError,
    resetErrorBoundary,
  };
}

export default useErrorHandler;
