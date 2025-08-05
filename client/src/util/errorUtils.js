/**
 * Error logging and reporting utilities
 */

/**
 * Log error to external service (e.g., Sentry, LogRocket, etc.)
 * This is a placeholder implementation
 */
export const logErrorToService = (
  error,
  errorInfo = null,
  additionalData = {}
) => {
  // In production, implement your error reporting service here
  if (import.meta.env.PROD) {
    // Example implementations:

    // Sentry
    // import * as Sentry from '@sentry/react';
    // Sentry.captureException(error, {
    //   tags: additionalData.tags,
    //   extra: { errorInfo, ...additionalData }
    // });

    // LogRocket
    // import LogRocket from 'logrocket';
    // LogRocket.captureException(error);

    // Custom API endpoint
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     message: error.message,
    //     stack: error.stack,
    //     errorInfo,
    //     timestamp: new Date().toISOString(),
    //     userAgent: navigator.userAgent,
    //     url: window.location.href,
    //     ...additionalData
    //   })
    // }).catch(err => console.error('Failed to log error:', err));

    console.warn("Error logging service not configured. Error:", error);
  } else {
    console.error("Development Error Log:", {
      error,
      errorInfo,
      additionalData,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    });
  }
};

/**
 * Format error for display
 */
export const formatError = (error) => {
  if (!error) return "Unknown error occurred";

  if (typeof error === "string") return error;

  if (error.message) return error.message;

  return String(error);
};

/**
 * Check if error is a network error
 */
export const isNetworkError = (error) => {
  return (
    error?.name === "NetworkError" ||
    error?.message?.includes("fetch") ||
    error?.message?.includes("network") ||
    error?.code === "NETWORK_ERROR"
  );
};

/**
 * Check if error is an authentication error
 */
export const isAuthError = (error) => {
  return (
    error?.status === 401 ||
    error?.status === 403 ||
    error?.message?.includes("unauthorized") ||
    error?.message?.includes("forbidden")
  );
};

/**
 * Get user-friendly error message
 */
export const getUserFriendlyErrorMessage = (error) => {
  if (isNetworkError(error)) {
    return "Network connection error. Please check your internet connection and try again.";
  }

  if (isAuthError(error)) {
    return "Authentication error. Please log in again.";
  }

  // Server errors
  if (error?.status >= 500) {
    return "Server error. Please try again later.";
  }

  // Client errors
  if (error?.status >= 400) {
    return (
      error?.message || "Request failed. Please check your input and try again."
    );
  }

  return formatError(error);
};

/**
 * Error boundary reset strategies
 */
export const getErrorBoundaryResetKeys = (location) => {
  // Reset error boundary when route changes
  return [location?.pathname];
};

export default {
  logErrorToService,
  formatError,
  isNetworkError,
  isAuthError,
  getUserFriendlyErrorMessage,
  getErrorBoundaryResetKeys,
};
