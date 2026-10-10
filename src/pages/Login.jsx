
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyStore } from "../context/AuthContext";

const Login = () => {
  const {loginUser,setLoginUser,registeredUsers} = useContext(MyStore)
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

      {/* Login card */}
      <div className="relative w-full max-w-md border border-white/10 bg-[#050505] p-7 sm:p-10">

        <div className="mb-10">
          <p className="text-xs tracking-[0.4em] text-gray-500 mb-5">
            THE JOURNEY CONTINUES
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            WELCOME
            <br />
            <span className="text-gray-500">BACK.</span>
          </h1>

          <p className="text-gray-500 text-sm mt-4">
            Your goals are waiting. Let's get back to work.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

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
                PASSWORD
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
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="w-full bg-transparent border border-white/15 px-4 py-4 text-sm text-white placeholder:text-gray-700 outline-none focus:border-white/60 transition"
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-xs text-gray-500 hover:text-white transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-white text-black py-4 text-sm font-semibold tracking-[0.2em] hover:bg-gray-200 transition"
          >
            ENTER WINTER ARC →
          </button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[10px] tracking-[0.25em] text-gray-600">
            KEEP SHOWING UP
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <p className="text-center text-sm text-gray-500">
          New to Winter Arc?{" "}
          <Link
            to="/signup"
            className="text-white underline underline-offset-4 hover:text-gray-300"
          >
            Create account
          </Link>
        </p>

      </div>

      <p className="absolute bottom-5 text-[10px] tracking-[0.3em] text-gray-700">
        DISCIPLINE OVER MOTIVATION
      </p>
    </main>
  );
};

export default Login;
