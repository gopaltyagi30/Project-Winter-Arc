import React from "react";
import { useNavigate } from "react-router-dom";
const Landing = () => {
    const navigate = useNavigate();
  return (
    <main className="landing">

      {/* Text */}
      <img
        src="/text.png"
        alt="Are you winning, my son?"
        className="text-enter"
      />

      {/* Button */}
      <button className="life-button" onClick={()=>navigate("/questions")}>
        Change My Life
      </button>

    </main>
  );
};

export default Landing;