"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { IoRefresh, IoWarningOutline } from "react-icons/io5";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#fcfcfd] text-center px-4">
      <div className="bg-red-50 p-6 rounded-full mb-6 animate-pulse">
        <IoWarningOutline className="text-6xl text-red-500" />
      </div>
      <h2 className="text-4xl font-black text-[#111827] mb-3">Something went wrong!</h2>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      
      <div className="flex gap-4">
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="btn btn-primary px-6 rounded-xl shadow-lg shadow-primary/30 flex items-center gap-2"
        >
          <IoRefresh className="text-xl" />
          Try Again
        </button>
        
        <a href="/" className="btn btn-ghost hover:bg-gray-100 px-6 rounded-xl">
            Return Home
        </a>
      </div>
    </div>
  );
}
