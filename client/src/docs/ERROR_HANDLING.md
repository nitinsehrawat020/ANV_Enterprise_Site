# Error Handling Documentation

## Overview

This documentation covers the error handling implementation for the ANV Enterprise application, including Error Boundaries, 404 pages, and error utilities.

## Components

### 1. ErrorBoundary (`/ui/ErrorBoundary.jsx`)

A React Error Boundary component that catches JavaScript errors anywhere in the component tree and displays a fallback UI.

**Features:**

- Catches and displays React component errors
- Shows detailed error information in development mode
- Provides refresh and navigation options
- Logs errors to external services in production
- Responsive design with professional styling

**Usage:**

```jsx
import ErrorBoundary from "./ui/ErrorBoundary";

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>;
```

### 2. NotFound (`/Pages/User/NotFound.jsx`)

A 404 page component for handling invalid routes.

**Features:**

- Professional 404 error page design
- Navigation options (Go Back, Go Home)
- Quick links to popular pages
- Responsive layout
- SEO-friendly structure

**Usage:**
The component is automatically used for unmatched routes in the React Router configuration.

### 3. RouterErrorBoundary (`/ui/RouterErrorBoundary.jsx`)

An enhanced Error Boundary that resets when the route changes, preventing error states from persisting across navigation.

**Usage:**

```jsx
import RouterErrorBoundary from "./ui/RouterErrorBoundary";

<RouterErrorBoundary>
  <Routes>{/* Your routes */}</Routes>
</RouterErrorBoundary>;
```

## Hooks

### useErrorHandler (`/hooks/useErrorHandler.js`)

A custom hook for handling errors in React components.

**Features:**

- Error state management
- Toast notifications
- Console logging (development)
- External service logging (production)
- Error clearing functionality

**Usage:**

```jsx
import useErrorHandler from "../hooks/useErrorHandler";

function MyComponent() {
  const { error, isError, handleError, clearError } = useErrorHandler();

  const fetchData = async () => {
    try {
      // Your API call
    } catch (error) {
      handleError(error, {
        showToast: true,
        customMessage: "Failed to load data",
      });
    }
  };

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Your component content</div>;
}
```

## Utilities

### Error Utils (`/util/errorUtils.js`)

Utility functions for error handling and reporting.

**Functions:**

- `logErrorToService()` - Log errors to external services
- `formatError()` - Format errors for display
- `isNetworkError()` - Check if error is network-related
- `isAuthError()` - Check if error is authentication-related
- `getUserFriendlyErrorMessage()` - Get user-friendly error messages
- `getErrorBoundaryResetKeys()` - Get keys for resetting error boundaries

## Implementation in App.jsx

The main App component is wrapped with the ErrorBoundary to catch all unhandled errors:

```jsx
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* Protected routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
```

## Testing

### ErrorTestComponent (`/Pages/User/ErrorTest.jsx`)

A test component for demonstrating error boundary functionality (development only).

**Access:** `/error-test` (only available in development mode)

**Features:**

- Trigger synchronous errors (caught by Error Boundary)
- Trigger asynchronous errors (not caught by Error Boundary)
- Educational examples

## Error Logging Strategy

### Development

- Errors logged to browser console
- Detailed error information displayed
- Stack traces available

### Production

- Errors logged to external service (configurable)
- User-friendly error messages
- Minimal information exposure

## Configuration

### Environment Variables

Add these to your `.env` files for error reporting services:

```bash
# Example for Sentry
VITE_SENTRY_DSN=your_sentry_dsn_here

# Example for custom error API
VITE_ERROR_API_URL=https://your-api.com/errors
```

### External Services Integration

To integrate with error reporting services, update `/util/errorUtils.js`:

```javascript
// Example: Sentry integration
import * as Sentry from "@sentry/react";

export const logErrorToService = (error, errorInfo, additionalData) => {
  if (import.meta.env.PROD) {
    Sentry.captureException(error, {
      tags: additionalData.tags,
      extra: { errorInfo, ...additionalData },
    });
  }
};
```

## Best Practices

1. **Error Boundary Placement:**

   - Wrap the entire app with a top-level error boundary
   - Consider additional boundaries for critical sections
   - Use RouterErrorBoundary for route-based resets

2. **Error Messages:**

   - Show user-friendly messages in production
   - Provide actionable solutions when possible
   - Log detailed information for developers

3. **Error Recovery:**

   - Provide clear recovery options (refresh, go back, go home)
   - Reset error states when appropriate
   - Maintain app functionality outside error areas

4. **Testing:**
   - Use ErrorTestComponent for development testing
   - Test error scenarios manually
   - Consider automated error testing

## Accessibility

- Error messages are properly labeled
- Keyboard navigation supported for error page actions
- Screen reader compatible error descriptions
- High contrast error indicators

## Performance

- Error boundaries have minimal performance impact
- Error logging is asynchronous in production
- Error components are optimized for quick rendering

## Browser Support

- Works in all modern browsers
- Graceful degradation for older browsers
- No external dependencies for core functionality
