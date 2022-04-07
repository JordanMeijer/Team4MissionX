import React from "react";
import PhotoOne from "../images/Home/idea copy.png";
import PhotoTwo from "../images/Home/brain copy.png";
import PhotoThree from "../images/Home/team copy.png";
import PhotoFour from "../images/Home/atom copy.png";
import "../components/SectionTwo.css";

function SectionTwo() {
  return (
    <section>
      <h1>
        Teaching kids programming and digital skills is <b>MORE</b> than just
        writing code.
      </h1>
      <div className="image_box">
        <div className="image_frame image_frame_one">
          <img src={PhotoOne} className="image image_one"></img>
          <br></br>
          <p className="text">Creativity & Individuality</p>
        </div>
        <div className="image_frame image_frame_two">
          <img src={PhotoTwo} className="image image_two"></img>
          <br></br>
          <p className="text">Critical Thinking & Problem Solving</p>
        </div>
        <div className="image_frame image_frame_three">
          <img src={PhotoThree} className="image image_three"></img>
          <br></br>
          <p className="text">Communication & Collaboration</p>
        </div>
        <div className="image_frame image_frame_four">
          <img src={PhotoFour} className="image image_four"></img>
          <br></br>
          <p className="text">Technology & Future Focus</p>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
