"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation"
import { toast } from "sonner";
import { Lock } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const searchParams = useSearchParams()

  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const show = searchParams.get("show")

    if (show === "true") {
      setIsSignup(true)
    }
  }, [searchParams])

  async function handleLogin() {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false
    })

    if (res?.error) {
      toast.error("Invalid Email or Password!")
    } else {
      toast.success("Login Successfully!")
      router.push("/dashboard")
    }
  }

  async function handleSignup() {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (data.success) {
      console.log("Signup Successful ✅");
      setIsSignup(false); // switch to login
    } else {
      console.log("Signup Failed ❌");
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-700 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-12 pb-16 mx-auto">
        {/* Logo */}
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-700 dark:text-white">
          <div className="w-8 h-8 mr-2 rounded bg-green-600 flex items-center justify-center text-white font-bold">
            R
          </div>
          Resume.
        </div>

        {/* Card */}
        <div className="w-full bg-white rounded-xl shadow-lg sm:max-w-md dark:bg-gray-800 dark:border dark:border-gray-700">
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-700 md:text-2xl dark:text-white">
              {isSignup ? "Create your account" : "Sign in to your account"}
            </h1>

            <form className="space-y-4">
              {isSignup && (
                <div>
                  <label className="flex mb-2 gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <User width={18} />Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              )}

              <div>
                <label className="flex mb-2 gap-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Mail width={18} />Your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label className="flex gap-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Lock width={18} />Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <button
                type="button"
                onClick={isSignup ? handleSignup : handleLogin}
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-indigo-300 font-semibold rounded-lg text-sm px-5 py-2.5 transition"
              >
                {isSignup ? "Create Account" : "Sign in"}
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(false)}
                      className="font-medium text-indigo-600 hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    Don’t have an account yet?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignup(true)}
                      className="font-medium text-indigo-600 hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </p>

              {/* Social Login */}
              <div className="flex items-center my-4">
                <div className="h-px flex-grow bg-gray-300 dark:bg-gray-600"></div>
                <span className="px-3 text-sm text-gray-900 dark:text-gray-400">
                  Or Continue with
                </span>
                <div className="h-px flex-grow bg-gray-300 dark:bg-gray-600"></div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                  type="button"
                  className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                >
                  <Image
                    width={22}
                    height={22}
                    src="/google-color.svg"
                    alt="Google"
                  />
                  Google
                </button>

                <button
                  onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                  type="button"
                  className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                >
                  <Image
                    width={22}
                    height={22}
                    src="/github-142.svg"
                    alt="GitHub"
                  />
                  GitHub
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
