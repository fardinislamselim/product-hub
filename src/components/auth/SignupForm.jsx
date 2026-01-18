"use client";

import { postUser } from "@/actions/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const result = await postUser(data);
    if (result && result.acknowledged) {
      toast.success("User created successfully");
      router.push("/signin");
    } else {
      toast.error(result?.error || "Failed to create user");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Full Name</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
            <MdPerson className="text-xl" />
          </div>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="input input-bordered w-full pl-10 focus:input-primary transition-colors"
            required
          />
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
            <MdEmail className="text-xl" />
          </div>
          <input
            name="email"
            type="email"
            placeholder="name@example.com"
            className="input input-bordered w-full pl-10 focus:input-primary transition-colors"
            required
          />
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Password</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
            <MdLock className="text-xl" />
          </div>
          <input
            name="password"
            type="password"
            placeholder="Create a password"
            className="input input-bordered w-full pl-10 focus:input-primary transition-colors"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
      >
        {loading ? "Creating..." : "Create Account"}
      </button>

      <div className="divider text-base-content/40 text-sm">OR REGISTER WITH</div>

      <div className="space-y-3">
        <button className="btn btn-outline w-full hover:bg-base-200 hover:border-base-300 transition-all gap-3">
          <FaGoogle className="text-red-500 text-lg" />
          <span className="font-medium">Google</span>
        </button>
        <button className="btn btn-outline w-full hover:bg-base-200 hover:border-base-300 transition-all gap-3">
          <FaGithub className="text-base-content text-lg" />
          <span className="font-medium">GitHub</span>
        </button>
      </div>

      <p className="text-center text-sm text-base-content/70 mt-4">
        Already have an account?{' '}
        <Link href="/signin" className="link link-primary font-bold hover:text-primary-focus transition-colors">
          Sign in
        </Link>
      </p>
    </form>
  );
}
