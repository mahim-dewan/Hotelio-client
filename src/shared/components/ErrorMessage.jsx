"use client";

import { AlertTriangle } from "lucide-react";

const ErrorMessage = ({
  message = "Something went wrong",
  title = "",
  onRetry,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-4 p-6 min-h-64 ${className}`}
    >
      <AlertTriangle size={40} className="text-highlight" />

      <h2 className="text-2xl font-semibold text-highlight">{title}</h2>
      <p className="text-xl font-semibold -mt-4 text-highlight">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
