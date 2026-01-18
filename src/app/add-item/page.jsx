import { clearAuthCookie, isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Item",
  description: "Add a new item to inventory",
};

export default async function AddItemPage() {
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
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Protected Page
          </h1>
          <p className="text-gray-600 mb-6">
            You are successfully authenticated! This page is only visible to
            logged-in users.
          </p>

          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            ✓ Authentication cookie is valid
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Add Item Form
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter item name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Enter item description"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Add Item
              </button>
            </form>
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
