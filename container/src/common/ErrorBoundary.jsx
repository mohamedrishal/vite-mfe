import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error info (optional)
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleRetry = () => {
    // Reset error state to retry rendering the children components
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div style={{ textAlign: 'center', padding: '20px',color:'#fff' }}>
          <h2>Oops! Something went wrong.</h2>
          <p>We're working on fixing this issue. Please try again later.</p>
          <button onClick={this.handleRetry} style={{ padding: '10px 20px', marginTop: '10px' }}>
            Retry
          </button>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
