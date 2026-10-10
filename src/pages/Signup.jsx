
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyStore } from "../context/AuthContext";

const Signup = () => {
  const {registeredUsers, setRegiteredUsers} = useContext(MyStore);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-5 py-12">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Home button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-7 left-7 text-sm tracking-[0.25em] text-gray-500 hover:text-white transition"
      >
        ← WINTER ARC
      </button>

      {/* Signup card */}
      <div className="relative w-full max-w-md border border-white/10 bg-[#050505] p-7 sm:p-10">

        <div className="mb-9">
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-5">
            A NEW CHAPTER
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            BECOME
            <br />
            <span className="text-gray-500">MORE.</span>
          </h1>

          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            Build better habits. Keep your promises.
            Become the person you know you can be.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-xs tracking-[0.2em] text-gray-400 mb-3">
              FULL NAME
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              className="w-full bg-transparent border border-white/15 px-4 py-4 text-sm text-white placeholder:text-gray-700 outline-none focus:border-white/60 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs tracking-[0.2em] text-gray-400 mb-3">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full bg-transparent border border-white/15 px-4 py-4 text-sm text-white placeholder:text-gray-700 outline-none focus:border-white/60 transition"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs tracking-[0.2em] text-gray-400">
                CREATE PASSWORD
              </label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-gray-500 hover:text-white transition"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a strong password"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full bg-transparent border border-white/15 px-4 py-4 text-sm text-white placeholder:text-gray-700 outline-none focus:border-white/60 transition"
            />

            <p className="text-xs text-gray-600 mt-2">
              Use at least 8 characters.
            </p>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 text-xs text-gray-500 leading-relaxed cursor-pointer">
            <input
              type="checkbox"
              required
              className="mt-0.5 accent-white"
            />
            <span>
              I agree to the Terms of Service and Privacy Policy.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-white text-black py-4 text-sm font-semibold tracking-[0.2em] hover:bg-gray-200 transition"
          >
            CREATE MY ACCOUNT →
          </button>

        </form>

        <div className="flex items-center gap-4 my-7">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[10px] tracking-[0.25em] text-gray-600">
            YOUR ARC STARTS HERE
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white underline underline-offset-4 hover:text-gray-300"
          >
            Log in
          </Link>
        </p>

      </div>

      <p className="absolute bottom-5 text-[10px] tracking-[0.3em] text-gray-700">
        ONE DAY AT A TIME
      </p>
    </main>
  );
};

export default Signup;
