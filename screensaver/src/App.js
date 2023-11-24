// App.js
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import RippleAnimation from "./components/RippleAnimation";
import QuoteGenerator from "./components/QuoteGenerator";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <RippleAnimation />
        <QuoteGenerator />
      </div>
    </ErrorBoundary>
  );
}

export default App;
