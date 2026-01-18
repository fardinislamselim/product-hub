import { cookies } from "next/headers";

// Hardcoded credentials for demo purposes
const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "123456";

/**
 * Check if user is authenticated by reading the auth cookie
 * @returns {boolean} True if auth cookie exists and equals "true"
 */
export async function isAuthenticated() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");
  return authCookie?.value === "true";
}

/**
 * Validate credentials against hardcoded values
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {boolean} True if credentials match
 */
export function validateCredentials(email, password) {
  return email === VALID_EMAIL && password === VALID_PASSWORD;
}

/**
 * Set authentication cookie
 */
export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set("auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

/**
 * Clear authentication cookie
 */
export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set("auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });
}
