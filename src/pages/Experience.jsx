import React from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();

  const features = [
    {
      number: "01",
      title: "DAILY TASKS",
      description:
        "Turn your goals into daily actions. Know exactly what needs to get done.",
    },
    {
      number: "02",
      title: "STREAKS",
      description:
        "Build consistency one day at a time. Protect your streak and keep moving.",
    },
    {
      number: "03",
      title: "PROGRESS",
      description:
        "See your discipline compound through simple, meaningful progress tracking.",
    },
    {
      number: "04",
      title: "AI COACH",
      description:
        "Get guidance, perspective and direction whenever you feel stuck.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="w-full px-6 md:px-12 py-7 flex items-center justify-between border-b border-white/10">

        <div className="text-sm tracking-[0.35em] font-medium">
          WINTER ARC
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 text-sm text-gray-400 hover:text-white transition"
          >
            LOGIN
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 border border-white text-sm hover:bg-white hover:text-black transition"
          >
            SIGN UP
          </button>
        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6">

        {/* Background glow */}
        <div className="absolute w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full" />

        <div className="relative max-w-5xl text-center">

          <p className="text-xs md:text-sm tracking-[0.5em] text-gray-500 mb-8">
            YOUR WINTER STARTS NOW
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            BUILD THE PERSON
            <br />
            YOU WANT TO BECOME.
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-gray-500 text-base md:text-lg leading-relaxed">
            Winter Arc is a personal discipline system designed to help you
            build consistency, track your progress and become harder to stop.
          </p>

          <button
            onClick={() => navigate("/signup")}
            className="mt-10 px-9 py-4 bg-white text-black text-sm font-semibold tracking-wider hover:bg-gray-200 transition"
          >
            START YOUR ARC →
          </button>

        </div>

      </section>


      {/* ================= DIVIDER ================= */}
      <div className="mx-6 md:mx-12 border-t border-white/10" />


      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-12 py-28">

        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] text-gray-600 mb-4">
              THE SYSTEM
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              EVERYTHING YOU NEED.
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="bg-black p-8 md:p-12 min-h-[260px] hover:bg-white/[0.03] transition duration-500"
              >

                <div className="flex justify-between items-start mb-16">

                  <span className="text-sm text-gray-600">
                    {feature.number}
                  </span>

                  <span className="text-gray-700">
                    ↗
                  </span>

                </div>

                <h3 className="text-xl font-medium tracking-wide mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed max-w-md">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PRODUCT PREVIEW ================= */}
      <section className="px-6 md:px-12 py-28 bg-[#050505]">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>

            <p className="text-xs tracking-[0.4em] text-gray-600 mb-5">
              YOUR DAILY SYSTEM
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              DISCIPLINE
              <br />
              MADE VISIBLE.
            </h2>

            <p className="text-gray-500 mt-6 leading-relaxed max-w-lg">
              Stop relying on motivation. Build a system that shows you what
              needs to happen today and keeps track of every step forward.
            </p>

          </div>


          {/* Fake Dashboard */}
          <div className="border border-white/10 bg-black p-7 md:p-9">

            <div className="flex justify-between items-center mb-10">

              <div>
                <p className="text-xs text-gray-600 tracking-widest">
                  TODAY
                </p>

                <p className="text-lg mt-2">
                  OCTOBER 07
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-600 tracking-widest">
                  STREAK
                </p>

                <p className="text-2xl font-semibold mt-1">
                  14
                </p>
              </div>

            </div>


            {/* Tasks */}
            <div className="space-y-3">

              <div className="flex items-center justify-between border border-white/10 px-5 py-4">
                <span className="text-gray-400">
                  Morning workout
                </span>

                <span className="text-white">
                  ✓
                </span>
              </div>

              <div className="flex items-center justify-between border border-white/10 px-5 py-4">
                <span className="text-gray-400">
                  Study JavaScript
                </span>

                <span className="text-white">
                  ✓
                </span>
              </div>

              <div className="flex items-center justify-between border border-white/10 px-5 py-4">
                <span className="text-gray-400">
                  Build project
                </span>

                <span className="text-gray-700">
                  ○
                </span>
              </div>

            </div>


            {/* Progress */}
            <div className="mt-10">

              <div className="flex justify-between text-xs mb-3">
                <span className="text-gray-600 tracking-widest">
                  DAILY PROGRESS
                </span>

                <span>
                  78%
                </span>
              </div>

              <div className="h-[3px] bg-gray-900">

                <div className="h-full bg-white w-[78%]" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= AI COACH ================= */}
      <section className="px-6 md:px-12 py-28">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-xs tracking-[0.4em] text-gray-600 mb-6">
            YOUR AI COACH
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold">
            WHEN YOU GET STUCK,
            <br />
            DON'T STOP.
          </h2>

          <div className="mt-14 border border-white/10 bg-[#050505] text-left p-7 md:p-10">

            <div className="flex justify-between mb-8">

              <span className="text-sm tracking-widest">
                WINTER ARC AI
              </span>

              <span className="text-xs text-gray-600">
                ONLINE
              </span>

            </div>

            <p className="text-gray-400 leading-relaxed">
              You completed 4 out of 5 tasks today.
              Your consistency is improving.
            </p>

            <p className="text-white mt-5">
              One thing left.
            </p>

            <p className="text-gray-500 mt-2">
              Finish your JavaScript practice before the day ends.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-32 border-t border-white/10">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-xs tracking-[0.5em] text-gray-600 mb-8">
            NO MORE WAITING
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            START
            <br />
            YOUR ARC.
          </h2>

          <button
            onClick={() => navigate("/signup")}
            className="mt-10 px-10 py-4 bg-white text-black font-semibold tracking-wider hover:bg-gray-200 transition"
          >
            CREATE ACCOUNT →
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="px-6 md:px-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">

        <p className="text-xs tracking-[0.3em] text-gray-600">
          WINTER ARC
        </p>

        <p className="text-xs text-gray-700">
          BUILD. DISCIPLINE. BECOME.
        </p>

      </footer>

    </main>
  );
};

export default Experience;