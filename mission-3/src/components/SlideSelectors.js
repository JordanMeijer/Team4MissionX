import React from "react";
import "../components/SlideSelectors.css";

function SlideButtons() {
  return (
    <section>
      <h1>How our programme helps teachers and students</h1>
      <div className="button_box">
        <button className="slide_buttons">
          <b>LEARNING PATHWAYS</b>
        </button>
        <button className="slide_buttons">
          <b>DIGITAL TECHNOLOGIES</b>
        </button>
        <button className="slide_buttons">
          <b>KEY COMPETENCIES</b>
        </button>
        <button className="slide_buttons">
          <b>IR4.0</b>
        </button>
      </div>
    </section>
  );
}

export default SlideButtons;
