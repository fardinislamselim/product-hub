import { clearAuthCookie, isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Items",
  description: "View and manage items",
};

export default async function ItemsPage() {
  // Check if user is authenticated
  const authenticated = await isAuthenticated();

  // Redirect to login if not authenticated
  if (!authenticated) {
    redirect("/login");
  }

  async function handleLogout() {
    "use server";
    await clearAuthCookie();
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Items
          </h1>
          <p className="text-gray-600 mb-6">
            You have successfully logged in! This page is only accessible to authenticated users.
          </p>

          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            ✓ You are authenticated
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Items List
            </h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-600">No items yet. Add your first item!</p>
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Add New Item
            </button>
          </div>

          <form action={handleLogout} className="mt-6">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
