"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";

export default function SigninForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/items/lists";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        toast.error(result.error);
      } else if (result?.ok) {
        router.push(callbackUrl);
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label"><span className="label-text font-medium">Email</span></label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
            <MdEmail className="text-xl" />
          </div>
          <input type="email" placeholder="name@example.com"
                 className="input input-bordered w-full pl-10 focus:input-primary transition-colors"
                 required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text font-medium">Password</span></label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
            <MdLock className="text-xl" />
          </div>
          <input type="password" placeholder="••••••••"
                 className="input input-bordered w-full pl-10 focus:input-primary transition-colors"
                 required value={password} onChange={(e) => setPassword(e.target.value)} />
          <label className="label">
            <Link href="/forgot-password" className="label-text-alt link link-hover text-primary font-medium">
              Forgot password?
            </Link>
          </label>
        </div>
      </div>

      <button type="submit" disabled={loading}
              className="btn btn-primary w-full text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
        {loading ? "Signing In..." : "Sign In"}
      </button>

      <div className="divider text-base-content/40 text-sm">OR CONTINUE WITH</div>
      <div className="space-y-3">
        <button className="btn btn-outline w-full hover:bg-base-200 hover:border-base-300 transition-all gap-3">
          <FaGoogle className="text-red-500 text-lg" />
          <span className="font-medium">Google</span>
        </button>
        <button className="btn btn-outline w-full hover:bg-base-200 hover:border-base-3 transition-all gap-3">
          <FaGithub className="text-base-content text-lg" />
          <span className="font-medium">GitHub</span>
        </button>
      </div>

      <p className="text-center text-sm text-base-content/70 mt-4">
        {`Don't have an account?`} <Link href="/signup" className="link link-primary font-bold hover:text-primary-focus transition-colors">Sign up</Link>
      </p>
    </form>
  );
}
