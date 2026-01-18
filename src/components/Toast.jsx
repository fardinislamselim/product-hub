"use client";

import { useEffect } from "react";

/**
 * Simple toast notification component
 * @param {Object} props - Component props
 * @param {string} props.message - Toast message
 * @param {string} props.type - Toast type: 'success', 'error', 'info'
 * @param {function} props.onClose - Callback when toast closes
 */
export default function Toast({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type];

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg animate-pulse`}
      role="alert"
    >
      {message}
    </div>
  );
}
