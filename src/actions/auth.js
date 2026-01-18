"use server";

import { setAuthCookie, validateCredentials } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Server action to handle login form submission
 * @param {FormData} formData - Form data containing email and password
 * @returns {Object} Result object with success status and message
 */
export async function loginAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Validate input
  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required.",
    };
  }

  // Check if credentials are valid
  if (!validateCredentials(email, password)) {
    return {
      success: false,
      message: "Invalid email or password. Try admin@example.com / 123456",
    };
  }

  // Set auth cookie
  await setAuthCookie();

  // Redirect to products page
  redirect("/products");
}
