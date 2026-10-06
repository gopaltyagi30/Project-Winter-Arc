import { useState } from "react";

const Questions = () => {
  const questions = [
    "What do you want to improve in your life?",
    "How much time can you dedicate every day?",
    "What is your biggest weakness?",
    "What is the one goal you absolutely want to achieve?",
    "Who do you want to become?",
    "Whats your biggest fear"
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <main className="min-h-screen bg-black text-white">
      <div>{questions[currentQuestion]}</div>
      <div>
        {currentQuestion != 0 && (
          <button onClick={() => setCurrentQuestion((prev) => prev - 1)}>
            PREV
          </button>
        )}
        {currentQuestion != questions.length - 1 && (
          <button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
            NEXT
          </button>
        )}
      </div>
    </main>
  );
};

export default Questions;
