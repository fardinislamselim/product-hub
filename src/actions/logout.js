"use server";

import { clearAuthCookie } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Server action to handle logout
 */
export async function logoutAction() {
  await clearAuthCookie();
  redirect("/login");
}
