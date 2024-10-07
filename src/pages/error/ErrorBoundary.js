// src/pages/error/ErrorBoundary.js
import React from "react";
import NotFound from "./NotFound"; // تأكد من وجود هذا المكون
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />; // عرض صفحة 404 عند حدوث خطأ
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
