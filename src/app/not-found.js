import Link from "next/link";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#fcfcfd] text-center px-4">
      <div className="bg-red-50 p-6 rounded-full mb-6 animate-bounce">
         <IoAlertCircleOutline className="text-6xl text-red-500" />
      </div>
      <h2 className="text-4xl font-black text-[#111827] mb-3">Page Not Found</h2>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary px-8 rounded-xl shadow-lg shadow-primary/30">
        Return Home
      </Link>
    </div>
  );
}
