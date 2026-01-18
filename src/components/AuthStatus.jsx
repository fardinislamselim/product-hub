"use client";

import { logoutAction } from "@/actions/logout";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Auth status component - shows login/logout button based on cookie
 */
export default function AuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check for auth cookie on client side
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));
    setIsLoggedIn(!!authCookie);
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);
    await logoutAction();
  };

  return (
    <>
      {!isLoggedIn ? (
        <Link
          href="/login"
          className="btn btn-primary rounded-xl px-7 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
        >
          Login
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          disabled={isLoading}
          className="btn btn-error rounded-xl px-7 font-bold shadow-lg shadow-error/20 hover:shadow-error/40 transition-all disabled:opacity-50"
        >
          {isLoading ? "Logging out..." : "Logout"}
        </button>
      )}
    </>
  );
}
