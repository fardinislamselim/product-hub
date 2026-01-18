"use client";

import { loginAction } from "@/actions/auth";
import Toast from "@/components/Toast";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      const result = await loginAction(formData);

      if (!result.success) {
        setError(result.message);
        setToast({
          message: result.message,
          type: "error",
        });
      }
    } catch (err) {
      const errorMessage = err.message || "An error occurred during login";
      setError(errorMessage);
      setToast({
        message: errorMessage,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm">
          <p className="font-semibold mb-1">Demo Credentials:</p>
          <p>Email: <code className="bg-gray-200 px-2 py-1 rounded">admin@example.com</code></p>
          <p>Password: <code className="bg-gray-200 px-2 py-1 rounded">123456</code></p>
        </div>
      </form>
    </>
  );
}
