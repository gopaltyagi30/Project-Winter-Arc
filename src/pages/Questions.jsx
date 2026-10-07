import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "What do you want to improve in your life?",
      options: ["Fitness", "Career", "Studies", "Discipline"],
    },

    {
      question: "How much time can you dedicate every day?",
      options: ["1 hour", "2–3 hours", "4–5 hours", "5+ hours"],
    },

    {
      question: "What is your biggest weakness?",
      options: [
        "Procrastination",
        "Lack of consistency",
        "Distraction",
        "Lack of confidence",
      ],
    },

    {
      question: "What is the one goal you absolutely want to achieve?",
      options: [
        "Build my career",
        "Get fit",
        "Become financially independent",
        "Become highly skilled",
      ],
    },

    {
      question: "Who do you want to become?",
      options: [
        "A disciplined person",
        "A successful developer",
        "A strong and confident person",
        "The best version of myself",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});
  const selectedOption = answers[currentQuestion] || null;
  const question = questions[currentQuestion];
  const btnClick = (option) => {
    let arr = { ...answers, [currentQuestion]: option };
    setAnswers(arr);
  };
  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        {/* TOP */}
        <div className="flex j+ustify-between items-center mb-10">
          <p className="text-sm tracking-[0.3em] text-gray-500">WINTER ARC</p>

          <p className="text-sm text-gray-500">
            {String(currentQuestion + 1).padStart(2, "0")} /{" "}
            {String(questions.length).padStart(2, "0")}
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-[2px] bg-gray-800 mb-16">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* QUESTION */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm tracking-widest mb-4">
            QUESTION {currentQuestion + 1}
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            {question.question}
          </h1>
        </div>

        {/* OPTIONS */}
        <div className="flex flex-col gap-4">
          {question.options.map((option, index) => (
            <button
              key={option}
              onClick={() => btnClick(option, index)}
              className={`
                group
                w-full
                flex
                items-center
                justify-between
                px-6
                py-5
                border
                text-left
                transition-all
                duration-300

                ${
                  selectedOption === option
                    ? "border-white bg-white text-black"
                    : "border-gray-800 bg-transparent text-gray-300 hover:border-gray-500 hover:bg-gray-900"
                }
              `}
            >
              <div className="flex items-center gap-5">
                <span
                  className={`
                    text-sm
                    ${
                      selectedOption === option
                        ? "text-gray-500"
                        : "text-gray-600"
                    }
                  `}
                >
                  0{index + 1}
                </span>

                <span className="text-base md:text-lg">{option}</span>
              </div>

              <span
                className={`
                  transition-transform duration-300
                  ${
                    selectedOption === option
                      ? "translate-x-0"
                      : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }
                `}
              >
                →
              </span>
            </button>
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between items-center mt-12">
          {currentQuestion > 0 ? (
            <button
              onClick={() => {
                setCurrentQuestion((prev) => prev - 1);
              }}
              className="text-gray-500 hover:text-white transition"
            >
              ← PREV
            </button>
          ) : (
            <div />
          )}

          {currentQuestion < questions.length - 1 ? (
            <button
              disabled={!selectedOption}
              onClick={() => {
                setCurrentQuestion((prev) => prev + 1);
              }}
              className={`
                px-8
                py-3
                border
                transition-all
                ${
                  selectedOption
                    ? "border-white bg-white text-black hover:bg-gray-200"
                    : "border-gray-800 text-gray-700 cursor-not-allowed"
                }
              `}
            >
              NEXT →
            </button>
          ) : (
            <button
              disabled={!selectedOption}
              onClick={() => {
                
                navigate("/experience")
              }}
              className={`
                px-8
                py-3
                border
                transition-all
                ${
                  selectedOption
                    ? "border-white bg-white text-black hover:bg-gray-200"
                    : "border-gray-800 text-gray-700 cursor-not-allowed"
                }
              `}
            >
              SUBMIT →
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Questions;
