"use client";

import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>

      <div className="card w-full max-w-md bg-base-100 shadow-2xl z-10 border border-base-200/50 backdrop-blur-sm">
        <div className="card-body gap-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-base-content/60">Join ProductHub today</p>
          </div>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
                  <MdPerson className="text-xl" />
                </div>
                <input
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
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full pl-10 focus:input-primary transition-colors"
                  required
                />
              </div>
               <label className="label">
                <span className="label-text-alt text-base-content/60">Must be at least 8 characters</span>
              </label>
            </div>

            <button className="btn btn-primary w-full text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
              Create Account
            </button>
          </form>

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
            Already have an account?{" "}
            <Link
              href="/login"
              className="link link-primary font-bold hover:text-primary-focus transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
